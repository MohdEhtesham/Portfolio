import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

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
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
