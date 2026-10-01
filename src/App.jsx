import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { experience, projects, skills } from './data/portfolioData';

/* Layout components */
import InterfaceFrame from './components/InterfaceFrame';
import SideIndicator from './components/SideIndicator';
import StatusStrip from './components/StatusStrip';
import ErrorBoundary from './components/ErrorBoundary';

/* Pages */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ArchitecturePage from './pages/ArchitecturePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

/* three.js is heavy — load the background after first paint */
const NetworkBackground = lazy(() => import('./components/NetworkBackground'));

const BOOT_KEY = 'ehtesham-sys-booted';

function shouldShowBoot() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return sessionStorage.getItem(BOOT_KEY) !== '1';
  } catch {
    return true;
  }
}

/* ========================================
   BOOT SEQUENCE (once per visit, click/key to skip)
   ======================================== */
const bootLines = [
  { text: 'INITIALIZING SYSTEM CORE...', delay: 0 },
  { text: 'Loading identity module', delay: 140 },
  { text: `Mounting capability matrix [${skills.length} modules]`, delay: 270 },
  { text: `Deploying project nodes [${projects.length} systems]`, delay: 390 },
  { text: `Streaming experience logs [${experience.length} entries]`, delay: 500 },
  { text: 'Building architecture map', delay: 600 },
  { text: 'Opening signal channel', delay: 690 },
  { text: 'All subsystems: ONLINE', delay: 790 },
  { text: '', delay: 860 },
  { text: '▶ SYSTEM READY — NAVIGATE MODULES', delay: 920 },
];
const BOOT_DURATION = 1400;

function BootSequence({ onComplete }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const timers = bootLines.map((line, i) => setTimeout(() => setShown(i + 1), line.delay));
    timers.push(setTimeout(onComplete, BOOT_DURATION));
    const skip = () => onComplete();
    window.addEventListener('keydown', skip);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('keydown', skip);
    };
  }, [onComplete]);

  const progress = (shown / bootLines.length) * 100;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center circuit-bg cursor-pointer"
      style={{ background: '#060D09' }} onClick={onComplete} role="presentation">
      <div className="w-full max-w-md px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.22)' }}>
            <span className="font-bold text-lg font-display" style={{ color: '#22C55E' }}>E</span>
          </div>
          <div>
            <span className="font-display font-bold text-sm block" style={{ color: '#E6F4EA' }}>EHTESHAM.SYS</span>
            <span className="font-mono text-[10px]" style={{ color: '#6B8F79' }}>v4.0.0 // MULTI-MODULE BOOT</span>
          </div>
        </div>

        <div className="font-mono text-[11px] space-y-1 mb-6" style={{ minHeight: '170px' }}>
          {bootLines.slice(0, shown).map(({ text }, i) => (
            <div key={i} className="flex items-center gap-2">
              {text.startsWith('▶') ? (
                <span style={{ color: '#22C55E' }}>{text}</span>
              ) : text ? (
                <><span style={{ color: '#22C55E' }}>{'>'}</span><span style={{ color: '#8FB89E' }}>{text}</span></>
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
        <p className="font-mono text-[10px] mt-4 text-center" style={{ color: '#4A6B55' }}>
          Click or press any key to skip
        </p>
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
  return (
    <div className="app-shell circuit-bg" style={{ background: '#060D09' }}>
      {/* Background */}
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <NetworkBackground />
        </Suspense>
      </ErrorBoundary>

      {/* Scan line */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px opacity-[0.025]"
          style={{ background: '#22C55E', animation: 'scan-line 10s linear infinite' }} />
      </div>

      {/* Top bar */}
      <InterfaceFrame />

      {/* Main area */}
      <div className="app-main">
        <SideIndicator />

        <main className="page-content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      {/* Status footer */}
      <StatusStrip />
    </div>
  );
}

export default function App() {
  const [booting, setBooting] = useState(shouldShowBoot);

  const finishBoot = () => {
    try { sessionStorage.setItem(BOOT_KEY, '1'); } catch { /* storage blocked */ }
    setBooting(false);
  };

  if (booting) {
    return <BootSequence onComplete={finishBoot} />;
  }

  return (
    <ErrorBoundary>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppShell />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
