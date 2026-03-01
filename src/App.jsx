import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

/* Layout components */
import InterfaceFrame from './components/InterfaceFrame';
import SideIndicator from './components/SideIndicator';
import StatusStrip from './components/StatusStrip';
import NetworkBackground from './components/NetworkBackground';
import ErrorBoundary from './components/ErrorBoundary';

/* Pages */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ArchitecturePage from './pages/ArchitecturePage';
import ContactPage from './pages/ContactPage';

/* ========================================
   BOOT SEQUENCE
   ======================================== */
function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  const bootLines = [
    { text: 'INITIALIZING SYSTEM CORE...', delay: 0 },
    { text: 'Loading identity module', delay: 180 },
    { text: 'Mounting capability matrix [18 modules]', delay: 340 },
    { text: 'Deploying project nodes [8 systems]', delay: 480 },
    { text: 'Streaming experience logs [2 entries]', delay: 600 },
    { text: 'Building architecture map', delay: 710 },
    { text: 'Opening signal channel', delay: 810 },
    { text: 'Network background: ACTIVE', delay: 900 },
    { text: 'All subsystems: ONLINE', delay: 1020 },
    { text: '', delay: 1100 },
    { text: '▶ SYSTEM READY — NAVIGATE MODULES', delay: 1180 },
  ];

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, line.text]);
        setProgress(((i + 1) / bootLines.length) * 100);
      }, line.delay);
    });
    setTimeout(onComplete, 1800);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center circuit-bg"
      style={{ background: '#060D09' }}>
      <div className="w-full max-w-md px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.22)' }}>
            <span className="font-bold text-lg font-display" style={{ color: '#22C55E' }}>E</span>
          </div>
          <div>
            <span className="font-display font-bold text-sm block" style={{ color: '#E6F4EA' }}>EHTESHAM.SYS</span>
            <span className="font-mono text-[9px]" style={{ color: '#4A6B55' }}>v3.5.0 // MULTI-MODULE BOOT</span>
          </div>
        </div>

        <div className="font-mono text-[10px] space-y-1 mb-6" style={{ minHeight: '170px' }}>
          {lines.map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              {line.startsWith('▶') ? (
                <span style={{ color: '#22C55E' }}>{line}</span>
              ) : line ? (
                <><span style={{ color: '#22C55E' }}>{'>'}</span><span style={{ color: '#8FB89E' }}>{line}</span></>
              ) : null}
            </div>
          ))}
          <span className="inline-block w-1.5 h-3 ml-2"
            style={{ background: '#22C55E', animation: 'typing-cursor 1s step-end infinite' }} />
        </div>

        <div className="h-[2px] rounded-full" style={{ background: 'rgba(34,197,94,0.08)' }}>
          <div className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #22C55E, #86EFAC)',
              boxShadow: '0 0 8px rgba(34,197,94,0.35)',
            }} />
        </div>
      </div>
    </div>
  );
}

/* ========================================
   SCROLL TO TOP ON ROUTE CHANGE
   ======================================== */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* ========================================
   APP SHELL — LAYOUT WITH ROUTER
   ======================================== */
function AppShell() {
  console.log('AppShell mounted');
  
  return (
    <div className="app-shell circuit-bg" style={{ background: '#060D09', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Background */}
      <Suspense fallback={<div>Loading background...</div>}>
        <NetworkBackground />
      </Suspense>

      {/* Scan line */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px opacity-[0.025]"
          style={{ background: '#22C55E', animation: 'scan-line 10s linear infinite' }} />
      </div>

      {/* Top bar */}
      <Suspense fallback={<div>Loading navbar...</div>}>
        <InterfaceFrame />
      </Suspense>

      {/* Main area */}
      <div className="app-main" style={{ flex: 1, display: 'flex' }}>
        <Suspense fallback={<div>Loading sidebar...</div>}>
          <SideIndicator />
        </Suspense>
        
        <div className="page-content" style={{ flex: 1, padding: '24px 32px 32px', position: 'relative', zIndex: 10 }}>
          <ScrollToTop />
          <Suspense fallback={<div style={{ color: '#22C55E' }}>Loading page...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/architecture" element={<ArchitecturePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>

      {/* Status footer */}
      <Suspense fallback={<div>Loading footer...</div>}>
        <StatusStrip />
      </Suspense>
    </div>
  );
}

/* ========================================
   ROOT
   ======================================== */
export default function App() {
  const [booting, setBooting] = useState(true);
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    console.log('App mounted');
    setDebugInfo('App: Mounted successfully');
    
    const bootTimer = setTimeout(() => {
      console.log('Boot sequence complete, loading main app');
      setBooting(false);
      setDebugInfo('App: Boot complete');
    }, 1800);

    return () => clearTimeout(bootTimer);
  }, []);

  if (booting) {
    console.log('Showing boot sequence');
    return <BootSequence onComplete={() => setBooting(false)} />;
  }

  console.log('Rendering main app');
  
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/Portfolio/">
        <AppShell />
      </BrowserRouter>
      <div style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        fontSize: '10px',
        color: '#22C55E',
        background: 'rgba(0,0,0,0.8)',
        padding: '5px 10px',
        fontFamily: 'monospace',
        zIndex: 99999
      }}>
        {debugInfo}
      </div>
    </ErrorBoundary>
  );
}
