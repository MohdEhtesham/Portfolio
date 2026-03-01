import { useState } from 'react';
import { experience } from '../data/portfolioData';

export default function ExperiencePage() {
    const [expandedId, setExpandedId] = useState(null);

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
                    Career activity log — a stream of contributions and engineering milestones.
                </p>
            </div>

            {/* Log stream */}
            <div className="max-w-3xl">
                {/* Terminal header */}
                <div className="font-mono text-[9px] mb-4 animate-boot boot-3 flex items-center gap-2"
                    style={{ color: '#2D4636' }}>
                    <span style={{ color: '#22C55E' }}>{'>'}</span> CAREER LOG — {experience.length} ENTRIES
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-3 top-0 bottom-0 w-px"
                        style={{ background: 'linear-gradient(to bottom, rgba(34,197,94,0.30), rgba(34,197,94,0.05))' }} />

                    <div className="space-y-6">
                        {experience.map((exp, idx) => {
                            const isExpanded = expandedId === exp.id;
                            return (
                                <div key={exp.id} className={`relative pl-10 animate-boot boot-${idx + 3}`}
                                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}>

                                    {/* Timeline dot */}
                                    <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full border-2"
                                        style={{
                                            background: 'rgba(34,197,94,0.18)',
                                            borderColor: '#22C55E',
                                            boxShadow: '0 0 8px rgba(34,197,94,0.25)',
                                        }}>
                                        <div className="absolute inset-0.5 rounded-full" style={{ background: '#22C55E' }} />
                                    </div>

                                    {/* Log card */}
                                    <div className="panel cursor-pointer transition-all duration-300"
                                        style={{ borderColor: isExpanded ? 'rgba(34,197,94,0.22)' : undefined }}>
                                        <div className="panel-body">
                                            {/* Timestamp row */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="font-mono text-[10px]" style={{ color: '#22C55E' }}>{exp.period}</span>
                                                <span style={{ color: '#2D4636' }}>│</span>
                                                <span className="font-mono text-[10px]" style={{ color: '#4A6B55' }}>{exp.location}</span>
                                            </div>

                                            <h3 className="font-display text-lg font-bold mb-0.5"
                                                style={{ color: isExpanded ? '#22C55E' : '#E6F4EA' }}>
                                                {exp.role}
                                            </h3>
                                            <p className="font-mono text-[11px] font-medium mb-3" style={{ color: '#8FB89E' }}>
                                                {exp.company}
                                            </p>

                                            <p className="text-[12px] leading-relaxed mb-3" style={{ color: '#8FB89E' }}>
                                                {exp.description}
                                            </p>

                                            {/* Expanded highlights */}
                                            {isExpanded && (
                                                <div className="mt-3 pt-3 space-y-4" style={{ borderTop: '1px solid rgba(34,197,94,0.08)' }}>
                                                    <div>
                                                        <span className="font-mono text-[8px] tracking-wider block mb-2" style={{ color: '#4A6B55' }}>
                                                            KEY CONTRIBUTIONS
                                                        </span>
                                                        <div className="space-y-2">
                                                            {exp.highlights.map((h, i) => (
                                                                <div key={i} className="flex items-start gap-2">
                                                                    <span className="font-mono text-[10px] mt-0.5 shrink-0" style={{ color: '#22C55E' }}>▸</span>
                                                                    <span className="text-[11px] leading-relaxed" style={{ color: '#E6F4EA' }}>{h}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Tech tags */}
                                            <div className="flex flex-wrap gap-1 mt-3">
                                                {exp.tech.map(t => (
                                                    <span key={t} className="font-mono text-[8px] px-1.5 py-0.5 rounded"
                                                        style={{ color: '#4ADE80', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.10)' }}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Expand hint */}
                                            <div className="font-mono text-[8px] mt-3" style={{ color: '#2D4636' }}>
                                                {isExpanded ? '▾ Click to collapse' : '▸ Click to expand'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Log footer */}
                <div className="font-mono text-[9px] mt-6 pl-10" style={{ color: '#2D4636' }}>
                    <div>{'>'} End of log entries</div>
                    <div>{'>'} Status: Actively contributing</div>
                    <div className="flex items-center gap-1 mt-1">
                        <span>{'>'} _</span>
                        <span className="inline-block w-1.5 h-3"
                            style={{ background: '#22C55E', animation: 'typing-cursor 1s step-end infinite' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
