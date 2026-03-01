/* ---- Expanded overlay panel for detail views ---- */

export default function DetailOverlay({ type, data, onClose }) {
    if (!data) return null;

    return (
        <div className="overlay-backdrop" onClick={onClose}>
            <div className="overlay-panel animate-boot" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4"
                    style={{ borderBottom: '1px solid rgba(34,197,94,0.12)' }}>
                    <div>
                        <span className="font-mono text-[9px] tracking-widest uppercase block mb-1"
                            style={{ color: '#22C55E' }}>
                            {type === 'project' ? '◈ PROJECT NODE' : '⟐ EXPERIENCE LOG'}
                        </span>
                        <h2 className="font-display text-lg font-bold" style={{ color: '#E6F4EA' }}>
                            {type === 'project' ? data.title : data.role}
                        </h2>
                    </div>
                    <button onClick={onClose}
                        className="w-8 h-8 rounded flex items-center justify-center font-mono text-sm transition-all hover:scale-110"
                        style={{ color: '#4A6B55', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.12)' }}>
                        ✕
                    </button>
                </div>

                <div className="px-5 py-4 space-y-4">
                    {type === 'project' ? (
                        <>
                            {/* Project category + color */}
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full" style={{ background: data.color }} />
                                <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: data.color }}>
                                    {data.category}
                                </span>
                            </div>

                            <p className="text-sm leading-relaxed" style={{ color: '#8FB89E' }}>
                                {data.description}
                            </p>

                            {/* Features */}
                            {data.features && (
                                <div>
                                    <span className="font-mono text-[9px] tracking-wider block mb-2" style={{ color: '#4A6B55' }}>
                                        CAPABILITIES
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {data.features.map(f => (
                                            <span key={f} className="font-mono text-[10px] px-2.5 py-1 rounded"
                                                style={{ color: '#E6F4EA', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.10)' }}>
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tech stack */}
                            <div>
                                <span className="font-mono text-[9px] tracking-wider block mb-2" style={{ color: '#4A6B55' }}>
                                    TECH STACK
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {data.tech.map(t => (
                                        <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded"
                                            style={{ color: '#4ADE80', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Experience detail */}
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-[10px]" style={{ color: '#22C55E' }}>{data.period}</span>
                                <span style={{ color: '#2D4636' }}>│</span>
                                <span className="text-sm font-medium" style={{ color: '#8FB89E' }}>{data.company}</span>
                                <span style={{ color: '#2D4636' }}>│</span>
                                <span className="text-xs" style={{ color: '#4A6B55' }}>{data.location}</span>
                            </div>

                            <p className="text-sm leading-relaxed" style={{ color: '#8FB89E' }}>
                                {data.description}
                            </p>

                            <div>
                                <span className="font-mono text-[9px] tracking-wider block mb-2" style={{ color: '#4A6B55' }}>
                                    KEY CONTRIBUTIONS
                                </span>
                                <div className="space-y-2">
                                    {data.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="font-mono text-[10px] mt-0.5 shrink-0" style={{ color: '#22C55E' }}>▸</span>
                                            <span className="text-[12px] leading-relaxed" style={{ color: '#E6F4EA' }}>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <span className="font-mono text-[9px] tracking-wider block mb-2" style={{ color: '#4A6B55' }}>
                                    TECHNOLOGIES
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {data.tech.map(t => (
                                        <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded"
                                            style={{ color: '#4ADE80', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="px-5 py-3 flex items-center justify-between"
                    style={{ borderTop: '1px solid rgba(34,197,94,0.08)' }}>
                    <span className="font-mono text-[8px]" style={{ color: '#2D4636' }}>
                        NODE ID: {String(data.id).padStart(3, '0')}
                    </span>
                    <span className="font-mono text-[8px]" style={{ color: '#2D4636' }}>
                        STATUS: DEPLOYED
                    </span>
                </div>
            </div>
        </div>
    );
}
