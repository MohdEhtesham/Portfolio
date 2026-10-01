import { experience, personalInfo } from '../data/portfolioData';

export default function ExperiencePage() {
    return (
        <div className="fade-up">
            <div className="page-header">
                <div className="page-label animate-boot boot-1">
                    <span>⟐ SYSTEM LOGS</span>
                    <div className="line" />
                </div>
                <h2 className="animate-boot boot-2">
                    Professional <span className="gradient-text">Journey</span>
                </h2>
                <p className="animate-boot boot-3">
                    Career activity log — roles, contributions and engineering milestones.
                </p>
            </div>

            {/* Log stream */}
            <div className="max-w-4xl">
                {/* Terminal header */}
                <div className="font-mono text-[11px] mb-4 animate-boot boot-3 flex items-center gap-2"
                    style={{ color: '#6B8F79' }}>
                    <span style={{ color: '#22C55E' }}>{'>'}</span> CAREER LOG — {experience.length} ENTRIES
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-3 top-0 bottom-0 w-px"
                        style={{ background: 'linear-gradient(to bottom, rgba(34,197,94,0.30), rgba(34,197,94,0.05))' }} />

                    <ol className="space-y-6">
                        {experience.map((exp, idx) => (
                            <li key={exp.id} className={`relative pl-10 animate-boot boot-${idx + 3}`}>
                                {/* Timeline dot */}
                                <div className="absolute left-1.5 top-5 w-3 h-3 rounded-full border-2"
                                    style={{
                                        background: 'rgba(34,197,94,0.18)',
                                        borderColor: '#22C55E',
                                        boxShadow: exp.current ? '0 0 12px rgba(34,197,94,0.55)' : '0 0 8px rgba(34,197,94,0.25)',
                                    }}>
                                    <div className="absolute inset-0.5 rounded-full" style={{ background: '#22C55E' }} />
                                </div>

                                {/* Log card */}
                                <article className="panel"
                                    style={{ borderColor: exp.current ? 'rgba(34,197,94,0.28)' : undefined }}>
                                    <div className="panel-body">
                                        {/* Timestamp row */}
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="font-mono text-[11px]" style={{ color: '#22C55E' }}>{exp.period}</span>
                                            <span style={{ color: '#4A6B55' }}>│</span>
                                            <span className="font-mono text-[11px]" style={{ color: '#6B8F79' }}>{exp.location}</span>
                                            {exp.current && (
                                                <span className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded"
                                                    style={{ color: '#060D09', background: '#22C55E' }}>
                                                    CURRENT
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="font-display text-lg md:text-xl font-bold mb-0.5" style={{ color: '#E6F4EA' }}>
                                            {exp.role}
                                        </h3>
                                        <p className="font-mono text-[12px] font-medium mb-3" style={{ color: '#4ADE80' }}>
                                            {exp.company}
                                        </p>

                                        <p className="text-[14px] leading-relaxed mb-4" style={{ color: '#B5D3BF' }}>
                                            {exp.description}
                                        </p>

                                        <div className="pt-3" style={{ borderTop: '1px solid rgba(34,197,94,0.08)' }}>
                                            <span className="font-mono text-[10px] tracking-wider block mb-2" style={{ color: '#6B8F79' }}>
                                                KEY CONTRIBUTIONS
                                            </span>
                                            <ul className="space-y-2">
                                                {exp.highlights.map(h => (
                                                    <li key={h} className="flex items-start gap-2">
                                                        <span className="font-mono text-[11px] mt-0.5 shrink-0" style={{ color: '#22C55E' }}>▸</span>
                                                        <span className="text-[13px] leading-relaxed" style={{ color: '#E6F4EA' }}>{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech tags */}
                                        <ul className="flex flex-wrap gap-1 mt-4">
                                            {exp.tech.map(t => (
                                                <li key={t} className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                                                    style={{ color: '#4ADE80', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.10)' }}>
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Log footer */}
                <div className="font-mono text-[11px] mt-6 pl-10 space-y-0.5" style={{ color: '#4A6B55' }}>
                    <div>{'>'} End of log entries</div>
                    <div>{'>'} Status: Actively contributing</div>
                    <div className="pt-3">
                        <a href={personalInfo.resumeUrl} download="Mohd_Ehtesham_Resume.pdf" className="btn-secondary no-underline">
                            ↓ Full resume (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
