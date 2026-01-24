import React, { useEffect, useRef, useState } from 'react';

export const AgentSelector = () => {
  const agentElementRef = useRef<HTMLElement | null>(null);
  const parentNodeRef = useRef<ParentNode | null>(null);
  const [isHidden, setIsHidden] = useState(false);
  const [agentFound, setAgentFound] = useState(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstAppearanceRef = useRef(true);

  useEffect(() => {
    let findTimeout: NodeJS.Timeout | null = null;
    
    // Check if agent was previously hidden (still exists but hidden with CSS)
    const existingAgent = document.querySelector('.embedded-agent-container') as HTMLElement;
    if (existingAgent && existingAgent.style.display === 'none') {
      // Agent was hidden on previous page, keep it hidden
      agentElementRef.current = existingAgent;
      parentNodeRef.current = existingAgent.parentNode;
      setAgentFound(true);
      setIsHidden(true);
      return;
    }
    
    // Reset state on mount
    setIsHidden(false);
    setAgentFound(false);
    
    const findAndSelectAgent = () => {
      const agentContainer = document.querySelector('.embedded-agent-container') as HTMLElement;
      
      if (agentContainer) {
        // Agent found - you can add any logic here
        console.log('AI Agent container found:', agentContainer);
        agentElementRef.current = agentContainer;
        parentNodeRef.current = agentContainer.parentNode;
        setAgentFound(true);
        // Make sure it's visible
        agentContainer.style.display = '';
      } else {
        // Retry after a short delay if not found immediately
        findTimeout = setTimeout(findAndSelectAgent, 100);
      }
    };

    findAndSelectAgent();
    
    // Cleanup on unmount
    return () => {
      if (findTimeout) {
        clearTimeout(findTimeout);
      }
      // Clear inactivity timer
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!agentFound || isHidden) return;

    const resetInactivityTimer = () => {
      // Clear existing timer
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }

      // Use 10 seconds for first appearance, 5 seconds for subsequent ones
      const timeout = isFirstAppearanceRef.current ? 10000 : 5000;

      // Start new timer
      inactivityTimerRef.current = setTimeout(() => {
        handleDeleteAgent();
      }, timeout);
    };

    // Start the initial timer
    resetInactivityTimer();

    // Listen for any interaction events on the agent
    const events = ['click', 'mouseenter', 'mousemove', 'touchstart', 'scroll'];
    events.forEach(event => {
      agentElementRef.current?.addEventListener(event, resetInactivityTimer);
    });

    // Cleanup
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      events.forEach(event => {
        agentElementRef.current?.removeEventListener(event, resetInactivityTimer);
      });
    };
  }, [agentFound, isHidden]);

  const handleDeleteAgent = () => {
    if (agentElementRef.current) {
      try {
        // Hide with CSS instead of removing from DOM
        agentElementRef.current.style.display = 'none';
        setIsHidden(true);
      } catch (error) {
        console.error('Error hiding agent:', error);
        setIsHidden(false);
      }
    }
  };

  const handleRestoreAgent = () => {
    if (agentElementRef.current) {
      try {
        // Show the agent
        agentElementRef.current.style.display = '';
        isFirstAppearanceRef.current = false;
        setIsHidden(false);
      } catch (error) {
        console.error('Error restoring agent:', error);
      }
    }
  };

  return (
    <>
      {!isHidden && agentFound && (
        <button
          onClick={handleDeleteAgent}
          className="fixed bottom-[152px] sm:bottom-[140px] right-1 sm:right-2 w-10 h-10 bg-red-600 hover:bg-red-700 border-2 border-white rounded flex items-center justify-center transition-colors z-[9999]"
          aria-label="Close AI agent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      
      {isHidden && (
        <button
          onClick={handleRestoreAgent}
          className="fixed bottom-2 right-2 w-10 h-10 bg-white hover:bg-gray-100 border-2 border-gray-700 rounded-full flex items-center justify-center transition-colors z-[9999] animate-radialPulse"
          aria-label="Restore AI agent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default AgentSelector;
