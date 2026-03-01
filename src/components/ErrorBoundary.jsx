import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: '#060D09',
          color: '#E6F4EA',
          fontFamily: 'monospace',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px'
        }}>
          <div style={{ fontSize: '18px', color: '#22C55E' }}>ERROR: Application Failed to Load</div>
          <pre style={{
            background: 'rgba(34, 197, 94, 0.08)',
            padding: '16px',
            borderRadius: '4px',
            maxWidth: '500px',
            overflow: 'auto',
            fontSize: '12px',
            color: '#8FB89E'
          }}>
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '8px 16px',
              background: '#22C55E',
              color: '#060D09',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
