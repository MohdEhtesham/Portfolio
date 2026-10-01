import { personalInfo, education, experience, projects } from '../data/portfolioData';
import { getExperienceYearsLabel } from '../utils/experience';

const experienceYears = getExperienceYearsLabel();

const highlights = [
    { icon: '📱', val: `${experienceYears} Years`, sub: 'Mobile Engineering', text: 'Production React Native apps for Android & iOS' },
    { icon: '🚀', val: `${projects.length} Projects`, sub: 'Key Projects', text: 'EdTech, IoT, Healthcare, Travel & AI' },
    { icon: '👥', val: personalInfo.studentsServed, sub: 'Students Served', text: 'Scholarship apps built at Buddy4Study' },
    { icon: '🏢', val: `${experience.length} Companies`, sub: 'Career Path', text: experience.map(e => e.company.replace(/ Pvt\. Ltd\.$/, '')).join(' · ') },
];

export default function AboutPage() {
    const summary = personalInfo.summary.replace('{EXP_YEARS}', experienceYears);
    const { current } = personalInfo;

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
                    Background, focus areas and the numbers behind the work.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
                {/* Main summary panel */}
                <div className="lg:col-span-8 panel animate-boot boot-3">
                    <div className="panel-header">
                        <span className="panel-title">Profile Data</span>
                        <div className="panel-status"><span className="dot" /><span>LOADED</span></div>
                    </div>
                    <div className="panel-body space-y-4 md:space-y-5">
                        <p className="text-[15px] leading-relaxed" style={{ color: '#B5D3BF' }}>
                            {summary}
                        </p>
                        <p className="text-[15px] leading-relaxed" style={{ color: '#8FB89E' }}>
                            {personalInfo.expertise}
                        </p>

                        {/* Education */}
                        <div className="module-tile flex items-start gap-3 mt-2 cursor-default">
                            <span className="text-xl">🎓</span>
                            <div>
                                <span className="font-mono text-[12px] font-medium block" style={{ color: '#E6F4EA' }}>
                                    {education.degree} — {education.field}
                                </span>
                                <span className="font-mono text-[11px] block mt-0.5" style={{ color: '#8FB89E' }}>
                                    {education.college}
                                </span>
                                <span className="font-mono text-[10px] block mt-0.5" style={{ color: '#6B8F79' }}>
                                    {education.university} · {education.location} · {education.period}
                                </span>
                            </div>
                        </div>

                        <a href={personalInfo.resumeUrl} download="Mohd_Ehtesham_Resume.pdf"
                            className="btn-primary no-underline">
                            ↓ Download Resume (PDF)
                        </a>
                    </div>
                </div>

                {/* Side data panel */}
                <div className="lg:col-span-4 space-y-4 md:space-y-5 lg:space-y-6 animate-boot boot-4">
                    <div className="panel">
                        <div className="panel-header">
                            <span className="panel-title">Current Role</span>
                            <div className="panel-status"><span className="dot" /><span>ACTIVE</span></div>
                        </div>
                        <div className="panel-body">
                            <span className="font-display text-[15px] font-semibold block" style={{ color: '#E6F4EA' }}>
                                {current.role}
                            </span>
                            <span className="font-mono text-[11px] block mt-1" style={{ color: '#22C55E' }}>
                                {current.company}
                            </span>
                            <span className="text-[12px] block mt-2 leading-relaxed" style={{ color: '#8FB89E' }}>
                                Building the {current.product} for JEE, NEET and CUET aspirants · since {current.since}
                            </span>
                        </div>
                    </div>

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
                            <a href={`mailto:${personalInfo.email}`} className="font-mono text-[12px] block no-underline break-all"
                                style={{ color: '#22C55E' }}>{personalInfo.email}</a>
                            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="font-mono text-[12px] block no-underline"
                                style={{ color: '#8FB89E' }}>{personalInfo.phone}</a>
                            <div className="flex gap-4 pt-1">
                                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                                    className="font-mono text-[12px] no-underline" style={{ color: '#4ADE80' }}>GitHub ↗</a>
                                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="font-mono text-[12px] no-underline" style={{ color: '#4ADE80' }}>LinkedIn ↗</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-10 sm:mt-12">
                {highlights.map((h, i) => (
                    <div key={h.sub} className={`module-tile cursor-default animate-boot boot-${i + 4}`}>
                        <span className="text-xl mb-2 block">{h.icon}</span>
                        <span className="font-display text-lg font-bold block" style={{ color: '#E6F4EA' }}>{h.val}</span>
                        <span className="font-mono text-[10px] tracking-wider block" style={{ color: '#22C55E' }}>{h.sub}</span>
                        <span className="text-[11px] mt-1 block leading-snug" style={{ color: '#6B8F79' }}>{h.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
