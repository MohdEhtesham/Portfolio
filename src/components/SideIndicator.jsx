import { NavLink } from 'react-router-dom';

const modules = [
    { path: '/', icon: '⬢', tip: 'Home' },
    { path: '/about', icon: '◉', tip: 'About' },
    { path: '/skills', icon: '⬡', tip: 'Skills' },
    { path: '/projects', icon: '◈', tip: 'Projects' },
    { path: '/experience', icon: '⟐', tip: 'Experience' },
    { path: '/architecture', icon: '⊞', tip: 'Architecture' },
    { path: '/contact', icon: '⚡', tip: 'Contact' },
];

export default function SideIndicator() {
    return (
        <aside className="side-indicator" aria-label="Quick navigation">
            {modules.map(m => (
                <NavLink
                    key={m.path}
                    to={m.path}
                    end={m.path === '/'}
                    title={m.tip}
                    aria-label={m.tip}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 no-underline text-sm hover:text-green-400"
                    style={({ isActive }) => ({
                        color: isActive ? '#22C55E' : '#4A6B55',
                        background: isActive ? 'rgba(34,197,94,0.08)' : 'transparent',
                        border: isActive ? '1px solid rgba(34,197,94,0.22)' : '1px solid transparent',
                    })}
                >
                    {m.icon}
                </NavLink>
            ))}

            {/* Spacer + version */}
            <div className="mt-auto">
                <span className="font-mono text-[9px] block text-center" style={{ color: '#4A6B55', writingMode: 'vertical-rl' }}>
                    v4.0.0
                </span>
            </div>
        </aside>
    );
}
