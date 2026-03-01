import { experience } from '../data/portfolioData';

export default function ExperienceLog({ onSelect }) {
    return (
        <div className="panel animate-boot boot-2" style={{ gridArea: 'left', display: 'flex', flexDirection: 'column' }}>
            <div className="panel-header">
                <span className="panel-title">⟐ Experience Logs</span>
                <div className="panel-status">
                    <span className="dot" />
                    <span>STREAMING</span>
                </div>
            </div>

            <div className="panel-body" style={{ flex: 1, minHeight: 0 }}>
                {/* System log header */}
                <div className="font-mono text-[9px] mb-3 flex items-center gap-2" style={{ color: '#2D4636' }}>
                    <span>—— CAREER LOG ——</span>
                </div>

                {experience.map((exp, idx) => (
                    <div key={exp.id}
                        className="log-entry"
                        onClick={() => onSelect(exp)}>

                        <div className="flex items-center gap-2">
                            <span className="log-timestamp">{exp.period}</span>
                            <span className="font-mono text-[8px]" style={{ color: '#2D4636' }}>│</span>
                            <span className="font-mono text-[8px]" style={{ color: '#4A6B55' }}>{exp.location}</span>
                        </div>

                        <div className="log-title">{exp.role}</div>

                        <div className="flex items-center gap-2 mb-2">
                            <span className="log-meta font-medium" style={{ color: '#8FB89E' }}>{exp.company}</span>
                        </div>

                        <p className="text-[11px] leading-relaxed mb-2" style={{ color: '#4A6B55' }}>
                            {exp.description}
                        </p>

                        {/* Highlights as log entries */}
                        <div className="space-y-1 mb-3">
                            {exp.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-1.5">
                                    <span className="font-mono text-[9px] mt-0.5 shrink-0" style={{ color: '#22C55E' }}>▸</span>
                                    <span className="text-[10px]" style={{ color: '#8FB89E' }}>{h}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1">
                            {exp.tech.map(t => (
                                <span key={t} className="font-mono text-[8px] px-1.5 py-0.5 rounded"
                                    style={{ color: '#4ADE80', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.10)' }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                {/* System footer */}
                <div className="font-mono text-[9px] mt-4 pt-3" style={{ color: '#2D4636', borderTop: '1px solid rgba(34,197,94,0.06)' }}>
                    <div>{'>'} Total entries: {experience.length}</div>
                    <div>{'>'} Status: Active contributions</div>
                    <div className="flex items-center gap-1 mt-1">
                        <span>{'>'} _</span>
                        <span className="inline-block w-1.5 h-3 ml-0.5" style={{ background: '#22C55E', animation: 'typing-cursor 1s step-end infinite' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
