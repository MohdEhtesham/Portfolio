import { NavLink, useLocation } from 'react-router-dom';

const modules = [
    { path: '/', icon: '⬢', tip: 'Core' },
    { path: '/about', icon: '◉', tip: 'Identity' },
    { path: '/skills', icon: '⬡', tip: 'Skills' },
    { path: '/projects', icon: '◈', tip: 'Projects' },
    { path: '/experience', icon: '⟐', tip: 'Logs' },
    { path: '/architecture', icon: '⊞', tip: 'Arch' },
    { path: '/contact', icon: '⚡', tip: 'Signal' },
];

export default function SideIndicator() {
    const location = useLocation();

    return (
        <div className="side-indicator">
            {modules.map((m, i) => {
                const active = location.pathname === m.path || (m.path === '/' && location.pathname === '/');
                return (
                    <NavLink
                        key={m.path}
                        to={m.path}
                        end={m.path === '/'}
                        title={m.tip}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 no-underline text-sm"
                        style={{
                            color: active ? '#22C55E' : '#2D4636',
                            background: active ? 'rgba(34,197,94,0.08)' : 'transparent',
                            border: active ? '1px solid rgba(34,197,94,0.22)' : '1px solid transparent',
                        }}
                    >
                        {m.icon}
                    </NavLink>
                );
            })}

            {/* Spacer + version */}
            <div className="mt-auto">
                <span className="font-mono text-[7px] block text-center" style={{ color: '#2D4636', writingMode: 'vertical-rl' }}>
                    v3.5.0
                </span>
            </div>
        </div>
    );
}
