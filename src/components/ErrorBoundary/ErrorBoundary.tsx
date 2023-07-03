import React from 'react';

type ComponentProps = {
  children?: JSX.Element;
};

type ErrorState = {
  hasError: boolean,
  error: any,
  errorInfo?: string,
};

class ErrorBoundary extends React.Component<ComponentProps, ErrorState> {
  state: ErrorState = {
    hasError: false,
    error: undefined,
    errorInfo: undefined,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='Error'>
          <title>Error!</title>
          <h1>Error!</h1>
          <div className='Error-message'>
            <p>Oops! Sorry, something went wrong.</p>
            <p>Please take a moment to let us know what happened.</p>
            <p>
              Technical information about the error has been captured and will
              be pasted into your message draft.
            </p>
          </div>
          <a
            href={`mailto:jormceachern@gmail.com?subject=MMAA%20site%20error&body=${this.state.error}:%20${this.state.errorInfo}`}
            target='_top'
          >
            Email the site developer
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
