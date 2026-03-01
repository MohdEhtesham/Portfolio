import { personalInfo, education } from '../data/portfolioData';
import { getExperienceYearsLabel } from '../utils/experience';

const experienceYears = getExperienceYearsLabel();

const highlights = [
    { icon: '📱', val: `${experienceYears} Years`, sub: 'Mobile Engineering', text: 'End-to-end React Native lifecycle ownership' },
    { icon: '🚀', val: '8+ Apps', sub: 'Deployed Systems', text: 'Shipped across EdTech, Healthcare, Travel, AI' },
    { icon: '👥', val: '2M+ Users', sub: 'Scale Impact', text: 'Production apps serving millions daily' },
    { icon: '⚡', val: '40% Faster', sub: 'Performance Gains', text: 'Bundle & runtime optimization mastery' },
];

export default function AboutPage() {
    return (
        <div className="fade-up">
            <div className="page-header">
                <div className="page-label animate-boot boot-1">
                    <span>◉ IDENTITY MODULE</span>
                    <div className="line" />
                </div>
                <h2 className="animate-boot boot-2">
                    About <span className="gradient-text">Mohd Ehtesham</span>
                </h2>
                <p className="animate-boot boot-3">
                    Engineering philosophy, background, and core metrics.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                {/* Main summary panel */}
                <div className="lg:col-span-2 panel animate-boot boot-3">
                    <div className="panel-header">
                        <span className="panel-title">Profile Data</span>
                        <div className="panel-status"><span className="dot" /><span>LOADED</span></div>
                    </div>
                    <div className="panel-body space-y-4 md:space-y-5">
                        <p className="text-sm leading-relaxed" style={{ color: '#8FB89E' }}>
                            {personalInfo.summary}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: '#8FB89E' }}>
                            With deep expertise in React Native, JavaScript ES6+, Redux, Firebase, and a wide array
                            of integrations — payments, BLE, maps, video, analytics — I bring a holistic approach
                            to mobile engineering, ensuring every app is performant, scalable, and delightful.
                        </p>

                        {/* Education */}
                        <div className="module-tile inline-flex items-center gap-3 mt-2">
                            <span className="text-xl">🎓</span>
                            <div>
                                <span className="font-mono text-[11px] font-medium block" style={{ color: '#E6F4EA' }}>
                                    {education.degree} — {education.field}
                                </span>
                                <span className="font-mono text-[9px]" style={{ color: '#4A6B55' }}>{education.university}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side data panel */}
                <div className="space-y-4 md:space-y-5 animate-boot boot-4">
                    <div className="panel">
                        <div className="panel-header">
                            <span className="panel-title">Location</span>
                        </div>
                        <div className="panel-body">
                            <span className="font-mono text-xs" style={{ color: '#8FB89E' }}>{personalInfo.location}</span>
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panel-header">
                            <span className="panel-title">Contact</span>
                        </div>
                        <div className="panel-body space-y-2">
                            <a href={`mailto:${personalInfo.email}`} className="font-mono text-[11px] block no-underline"
                                style={{ color: '#22C55E' }}>{personalInfo.email}</a>
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                                className="font-mono text-[11px] block no-underline" style={{ color: '#4ADE80' }}>GitHub ↗</a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                                className="font-mono text-[11px] block no-underline" style={{ color: '#4ADE80' }}>LinkedIn ↗</a>
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panel-header">
                            <span className="panel-title">Philosophy</span>
                        </div>
                        <div className="panel-body">
                            <p className="text-[11px] italic leading-relaxed" style={{ color: '#4A6B55' }}>
                                "Build mobile experiences that aren't just functional, but truly
                                delightful. Own the full lifecycle. Ship with confidence."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-10">
                {highlights.map((h, i) => (
                    <div key={h.val} className={`module-tile animate-boot boot-${i + 4}`}>
                        <span className="text-xl mb-2 block">{h.icon}</span>
                        <span className="font-display text-lg font-bold block" style={{ color: '#E6F4EA' }}>{h.val}</span>
                        <span className="font-mono text-[9px] tracking-wider block" style={{ color: '#22C55E' }}>{h.sub}</span>
                        <span className="text-[10px] mt-1 block" style={{ color: '#4A6B55' }}>{h.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
