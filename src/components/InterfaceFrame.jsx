import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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

export default function InterfaceFrame() {
    const [clock, setClock] = useState('');
    const location = useLocation();

    useEffect(() => {
        const tick = () => setClock(new Date().toLocaleTimeString('en-US', { hour12: false }));
        tick();
        const iv = setInterval(tick, 1000);
        return () => clearInterval(iv);
    }, []);

    return (
        <div className="topbar">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2.5 no-underline">
                <div className="w-7 h-7 rounded flex items-center justify-center"
                    style={{ background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.25)' }}>
                    <span className="font-bold text-xs font-display" style={{ color: '#22C55E' }}>E</span>
                </div>
                <span className="font-mono text-[9px] tracking-[2px] uppercase hidden md:inline"
                    style={{ color: '#4A6B55' }}>
                    {personalInfo.name.toUpperCase()} // SYS v3.5
                </span>
            </NavLink>

            {/* Nav links */}
            <nav className="flex items-center gap-0.5">
                {navItems.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/'}
                        className="px-2.5 py-1.5 rounded text-[9px] font-mono font-medium tracking-wider transition-all duration-300 no-underline"
                        style={({ isActive }) => ({
                            color: isActive ? '#22C55E' : '#4A6B55',
                            background: isActive ? 'rgba(34,197,94,0.08)' : 'transparent',
                            borderBottom: isActive ? '1px solid rgba(34,197,94,0.30)' : '1px solid transparent',
                        })}
                    >
                        <span className="hidden lg:inline">{item.label}</span>
                        <span className="lg:hidden">{item.short}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Status */}
            <div className="flex items-center gap-4">
                <div className="hidden xl:flex items-center gap-3">
                    {statusItems.map(s => (
                        <div key={s.label} className="flex items-center gap-1.5">
                            <span className="w-[4px] h-[4px] rounded-full"
                                style={{ background: '#22C55E', boxShadow: '0 0 4px rgba(34,197,94,0.4)' }} />
                            <span className="font-mono text-[8px]" style={{ color: '#4A6B55' }}>{s.label}</span>
                            <span className="font-mono text-[8px]" style={{ color: '#8FB89E' }}>{s.val}</span>
                        </div>
                    ))}
                </div>
                <span className="font-mono text-[10px] tabular-nums" style={{ color: '#22C55E' }}>{clock}</span>
            </div>
        </div>
    );
}
