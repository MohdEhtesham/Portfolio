import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// #region agent log
fetch('http://127.0.0.1:7719/ingest/b7b45269-dba7-47c4-826d-3840bf0e348e', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Debug-Session-Id': 'c93068',
  },
  body: JSON.stringify({
    sessionId: 'c93068',
    runId: 'initial',
    hypothesisId: 'H1',
    location: 'src/main.jsx:10',
    message: 'main.jsx loaded',
    data: {
      href: window.location.href,
      pathname: window.location.pathname,
      origin: window.location.origin,
    },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

// Debug: Log asset paths
console.log('🔍 Environment Info:');
console.log('  - Current URL:', window.location.href);
console.log('  - Pathname:', window.location.pathname);
console.log('  - Origin:', window.location.origin);
console.log('  - Base path would be: /Portfolio/');

// Warn about any 404 errors
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('404')) {
    console.error('❌ 404 Error detected:', event);
  }

  // #region agent log
  fetch('http://127.0.0.1:7719/ingest/b7b45269-dba7-47c4-826d-3840bf0e348e', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Debug-Session-Id': 'c93068',
    },
    body: JSON.stringify({
      sessionId: 'c93068',
      runId: 'initial',
      hypothesisId: 'H3',
      location: 'src/main.jsx:22',
      message: 'window error event',
      data: {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// #region agent log
fetch('http://127.0.0.1:7719/ingest/b7b45269-dba7-47c4-826d-3840bf0e348e', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Debug-Session-Id': 'c93068',
  },
  body: JSON.stringify({
    sessionId: 'c93068',
    runId: 'initial',
    hypothesisId: 'H2',
    location: 'src/main.jsx:36',
    message: 'React root rendered',
    data: {},
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion
