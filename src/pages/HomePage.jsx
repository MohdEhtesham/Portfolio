import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import SystemCore from '../components/SystemCore';
import { personalInfo } from '../data/portfolioData';
import { getExperienceYearsLabel } from '../utils/experience';

const quickModules = [
    { path: '/about', icon: '◉', label: 'IDENTITY', desc: 'Profile & philosophy' },
    { path: '/skills', icon: '⬡', label: 'CAPABILITIES', desc: 'Technical matrix' },
    { path: '/projects', icon: '◈', label: 'PROJECT NODES', desc: '8 deployed systems' },
    { path: '/experience', icon: '⟐', label: 'SYSTEM LOGS', desc: 'Career timeline' },
    { path: '/architecture', icon: '⊞', label: 'ARCHITECTURE', desc: 'Tech ecosystem' },
    { path: '/contact', icon: '⚡', label: 'SIGNAL', desc: 'Open channel' },
];

export default function HomePage() {
    const experienceYears = getExperienceYearsLabel();
    return (
        <div className="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-140px)]">

                {/* Left — Core identity */}
                <div>
                    <div className="font-mono text-[10px] tracking-[3px] mb-4 animate-boot boot-1"
                        style={{ color: '#4A6B55' }}>
                        {'>'} SYSTEM CORE INITIALIZED
                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3 animate-boot boot-2">
                        <span style={{ color: '#E6F4EA' }}>Hi, I'm </span>
                        <span className="gradient-text">{personalInfo.name}</span>
                    </h1>

                    <p className="font-mono text-sm mb-2 animate-boot boot-3" style={{ color: '#22C55E' }}>
                        {personalInfo.role} <span style={{ color: '#2D4636' }}>// </span>
                        <span style={{ color: '#4ADE80' }}>{personalInfo.tagline}</span>
                    </p>

                    <p className="text-sm leading-relaxed mb-8 max-w-lg animate-boot boot-4" style={{ color: '#8FB89E' }}>
                        {personalInfo.summary.slice(0, 200)}…
                    </p>

                    {/* Quick access modules */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 animate-boot boot-5">
                        {quickModules.map(m => (
                            <Link key={m.path} to={m.path}
                                className="module-tile flex items-center gap-3 no-underline group">
                                <span className="text-base transition-colors group-hover:scale-110"
                                    style={{ color: '#22C55E' }}>{m.icon}</span>
                                <div>
                                    <span className="font-mono text-[9px] tracking-wider block"
                                        style={{ color: '#E6F4EA' }}>{m.label}</span>
                                    <span className="font-mono text-[8px]"
                                        style={{ color: '#4A6B55' }}>{m.desc}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-10 md:gap-14 mt-8 animate-boot boot-6">
                        {[
                            { val: experienceYears, label: 'Years' },
                            { val: '8+', label: 'Projects' },
                            { val: '2M+', label: 'Users' },
                        ].map(s => (
                            <div key={s.label}>
                                <div className="text-2xl font-display font-bold gradient-text">{s.val}</div>
                                <div className="font-mono text-[9px] mt-1" style={{ color: '#4A6B55' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — 3D core */}
                <div className="h-[350px] sm:h-[450px] lg:h-[500px] animate-boot boot-3">
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="font-mono text-[10px]" style={{ color: '#4A6B55' }}>Initializing core...</span>
                        </div>
                    }>
                        <SystemCore name={personalInfo.name} role={personalInfo.role} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
