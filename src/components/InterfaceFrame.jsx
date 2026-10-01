import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

const navItems = [
    { path: '/', label: 'SYS.CORE', short: 'HOME' },
    { path: '/about', label: 'IDENTITY', short: 'ABOUT' },
    { path: '/skills', label: 'CAPABILITIES', short: 'SKILLS' },
    { path: '/projects', label: 'NODES', short: 'PROJECTS' },
    { path: '/experience', label: 'LOGS', short: 'EXP' },
    { path: '/architecture', label: 'ARCHITECTURE', short: 'ARCH' },
    { path: '/contact', label: 'SIGNAL', short: 'CONTACT' },
];

const statusItems = [
    { label: 'SYS', val: 'ONLINE' },
    { label: 'CORE', val: 'ACTIVE' },
    { label: 'NET', val: 'LINKED' },
];

const linkStyle = ({ isActive }) => ({
    color: isActive ? '#22C55E' : '#6B8F79',
    background: isActive ? 'rgba(34,197,94,0.08)' : 'transparent',
    borderBottom: isActive ? '1px solid rgba(34,197,94,0.30)' : '1px solid transparent',
});

export default function InterfaceFrame() {
    const [clock, setClock] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const tick = () => setClock(new Date().toLocaleTimeString('en-US', { hour12: false }));
        tick();
        const iv = setInterval(tick, 1000);
        return () => clearInterval(iv);
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = e => { if (e.key === 'Escape') setMenuOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    return (
        <header className="topbar">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2.5 no-underline" onClick={() => setMenuOpen(false)}
                aria-label={`${personalInfo.name} — home`}>
                <div className="w-7 h-7 rounded flex items-center justify-center"
                    style={{ background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.25)' }}>
                    <span className="font-bold text-xs font-display" style={{ color: '#22C55E' }}>E</span>
                </div>
                <span className="font-mono text-[10px] tracking-[2px] uppercase md:hidden xl:inline"
                    style={{ color: '#8FB89E' }}>
                    {personalInfo.name.toUpperCase()}
                    <span className="hidden xl:inline" style={{ color: '#4A6B55' }}> // SYS v4.0</span>
                </span>
            </NavLink>

            {/* Nav links — tablet & desktop */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main">
                {navItems.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/'}
                        className="px-2.5 py-1.5 rounded text-[10px] font-mono font-medium tracking-wider transition-all duration-300 no-underline hover:text-green-400"
                        style={linkStyle}
                    >
                        <span className="hidden lg:inline">{item.label}</span>
                        <span className="lg:hidden">{item.short}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Status + actions */}
            <div className="flex items-center gap-3 lg:gap-4">
                <div className="hidden 2xl:flex items-center gap-3">
                    {statusItems.map(s => (
                        <div key={s.label} className="flex items-center gap-1.5">
                            <span className="w-[4px] h-[4px] rounded-full"
                                style={{ background: '#22C55E', boxShadow: '0 0 4px rgba(34,197,94,0.4)' }} />
                            <span className="font-mono text-[10px]" style={{ color: '#6B8F79' }}>{s.label}</span>
                            <span className="font-mono text-[10px]" style={{ color: '#8FB89E' }}>{s.val}</span>
                        </div>
                    ))}
                </div>
                <span className="hidden sm:inline font-mono text-[11px] tabular-nums" style={{ color: '#22C55E' }}>{clock}</span>

                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-chip no-underline">
                    RESUME <span aria-hidden="true">↗</span>
                </a>

                {/* Mobile menu toggle */}
                <button type="button" className="md:hidden menu-toggle"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
                    aria-controls="mobile-nav" onClick={() => setMenuOpen(o => !o)}>
                    <span className={menuOpen ? 'open' : ''} />
                </button>
            </div>

            {/* Mobile nav panel */}
            {menuOpen && (
                <nav id="mobile-nav" className="mobile-nav md:hidden" aria-label="Main">
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between px-4 py-3 rounded-lg font-mono text-[12px] tracking-wider no-underline"
                            style={linkStyle}
                        >
                            <span>{item.short}</span>
                            <span className="text-[10px]" style={{ color: '#4A6B55' }}>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    );
}
