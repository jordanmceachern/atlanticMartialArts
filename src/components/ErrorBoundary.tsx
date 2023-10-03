import React, { ReactNode } from 'react';

type ComponentProps = {
  children?: ReactNode;
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
        <div className='h-screen w-screen flex flex-col items-center justify-center'>
          <div
            className='z-0 absolute inset-0 opacity-10'
            style={{
              background:
                'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)'
            }}
          />
          <div className='flex flex-col items-center max-w-[400px]'>
            <title>Error!</title>
            <h1 className='mb-2 text-xl'>Error!</h1>
            <div className='flex flex-col items-start text-md'>
              <p className='mb-1'>Oops! Sorry, something went wrong.</p>
              <p className='mb-1'>Please take a moment to let us know what happened.</p>
              <p className='mb-2'>
                Technical information about the error has also been captured and will
                be pasted into your message draft.
              </p>
              <a
                className='z-10 underline cursor-pointer hover:no-underline text-base w-full flex justify-center'
                href={`mailto:jormceachern@gmail.com?subject=AMAA%20site%20error&body=${this.state.error}:%20${this.state.errorInfo}`}
                target='_top'
              >
                Email error report to the site developer
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
