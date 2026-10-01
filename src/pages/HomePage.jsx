import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import { personalInfo, projects } from '../data/portfolioData';
import { getExperienceYearsLabel } from '../utils/experience';

const SystemCore = lazy(() => import('../components/SystemCore'));

const quickModules = [
    { path: '/about', icon: '◉', label: 'IDENTITY', desc: 'Profile & background' },
    { path: '/skills', icon: '⬡', label: 'CAPABILITIES', desc: 'Technical matrix' },
    { path: '/projects', icon: '◈', label: 'PROJECTS', desc: `${projects.length} key projects` },
    { path: '/experience', icon: '⟐', label: 'EXPERIENCE', desc: 'Career timeline' },
    { path: '/architecture', icon: '⊞', label: 'ARCHITECTURE', desc: 'Tech ecosystem' },
    { path: '/contact', icon: '⚡', label: 'CONTACT', desc: 'Open channel' },
];

const coreFallback = (
    <div className="w-full h-full flex items-center justify-center">
        <span className="font-mono text-[11px]" style={{ color: '#6B8F79' }}>Initializing core...</span>
    </div>
);

export default function HomePage() {
    const experienceYears = getExperienceYearsLabel();
    const headline = personalInfo.headline.replace('{EXP_YEARS}', experienceYears);
    const { current } = personalInfo;

    return (
        <div className="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center lg:min-h-[calc(100vh-140px)]">

                {/* Left — Core identity */}
                <div>
                    <div className="status-pill mb-5 animate-boot boot-1">
                        <span className="dot" />
                        <span>
                            Currently <span style={{ color: '#E6F4EA' }}>{current.role}</span> @ {current.company.replace(' Pvt. Ltd.', '')}
                        </span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3 animate-boot boot-2">
                        <span style={{ color: '#E6F4EA' }}>Hi, I'm </span>
                        <span className="gradient-text">{personalInfo.name}</span>
                    </h1>

                    <p className="font-mono text-sm mb-3 animate-boot boot-3" style={{ color: '#22C55E' }}>
                        {personalInfo.role} <span style={{ color: '#4A6B55' }}>// </span>
                        <span style={{ color: '#4ADE80' }}>{personalInfo.tagline}</span>
                    </p>

                    <p className="text-[15px] leading-relaxed mb-7 max-w-xl animate-boot boot-4" style={{ color: '#8FB89E' }}>
                        {headline}
                    </p>

                    {/* Primary actions */}
                    <div className="flex flex-wrap items-center gap-3 mb-8 animate-boot boot-4">
                        <a href={personalInfo.resumeUrl} download="Mohd_Ehtesham_Resume.pdf" className="btn-primary no-underline">
                            ↓ Download Resume
                        </a>
                        <Link to="/projects" className="btn-secondary no-underline">
                            View Projects →
                        </Link>
                        <Link to="/contact" className="btn-secondary no-underline">
                            Contact Me
                        </Link>
                    </div>

                    {/* Quick access modules */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 animate-boot boot-5">
                        {quickModules.map(m => (
                            <Link key={m.path} to={m.path}
                                className="module-tile flex items-center gap-3 no-underline group">
                                <span className="text-base transition-transform group-hover:scale-110"
                                    style={{ color: '#22C55E' }}>{m.icon}</span>
                                <div>
                                    <span className="font-mono text-[10px] tracking-wider block"
                                        style={{ color: '#E6F4EA' }}>{m.label}</span>
                                    <span className="font-mono text-[10px]"
                                        style={{ color: '#6B8F79' }}>{m.desc}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-10 md:gap-14 mt-8 animate-boot boot-6">
                        {[
                            { val: experienceYears, label: 'Years Experience' },
                            { val: `${projects.length}`, label: 'Key Projects' },
                            { val: personalInfo.studentsServed, label: 'Students Served' },
                        ].map(s => (
                            <div key={s.label}>
                                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{s.val}</div>
                                <div className="font-mono text-[10px] mt-1" style={{ color: '#6B8F79' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — 3D core */}
                <div className="h-[300px] sm:h-[420px] lg:h-[500px] animate-boot boot-3">
                    <ErrorBoundary fallback={null}>
                        <Suspense fallback={coreFallback}>
                            <SystemCore name={personalInfo.name} role={personalInfo.role} />
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
}
