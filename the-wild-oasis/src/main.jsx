import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Error boundary will fetch error while rendering */}
    {/* bugs in handler will not be caught  */}
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
