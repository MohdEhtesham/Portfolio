import { skills } from '../data/portfolioData';

const categoryMeta = {
    core: { label: 'CORE TECHNOLOGIES', color: '#22C55E' },
    state: { label: 'STATE MANAGEMENT', color: '#4ADE80' },
    backend: { label: 'BACKEND & APIS', color: '#86EFAC' },
    web: { label: 'WEB TECHNOLOGIES', color: '#22C55E' },
    integrations: { label: 'INTEGRATIONS & SDKs', color: '#4ADE80' },
    tools: { label: 'TOOLS & DEVOPS', color: '#86EFAC' },
};

export default function SkillsPage() {
    const grouped = {};
    skills.forEach(s => {
        if (!grouped[s.category]) grouped[s.category] = [];
        grouped[s.category].push(s);
    });

    return (
        <div className="fade-up">
            <div className="page-header">
                <div className="page-label animate-boot boot-1">
                    <span>⬡ CAPABILITY MATRIX</span>
                    <div className="line" />
                </div>
                <h2 className="animate-boot boot-2">
                    Technical <span className="gradient-text">Arsenal</span>
                </h2>
                <p className="animate-boot boot-3">
                    A matrix of engineering capabilities honed through years of production mobile development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {Object.entries(grouped).map(([cat, catSkills], ci) => {
                    const meta = categoryMeta[cat] || { label: cat.toUpperCase(), color: '#22C55E' };
                    return (
                        <div key={cat} className={`panel animate-boot boot-${ci + 2}`}>
                            <div className="panel-header">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: meta.color, boxShadow: `0 0 6px ${meta.color}40` }} />
                                    <span className="panel-title" style={{ color: meta.color }}>{meta.label}</span>
                                </div>
                                <div className="panel-status">
                                    <span className="dot" />
                                    <span>{catSkills.length} LOADED</span>
                                </div>
                            </div>
                            <div className="panel-body space-y-3">
                                {catSkills.map(s => (
                                    <div key={s.name} className="group">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="font-mono text-[11px] font-medium"
                                                style={{ color: '#E6F4EA' }}>{s.name}</span>
                                            <span className="font-mono text-[9px]" style={{ color: '#4A6B55' }}>{s.level}%</span>
                                        </div>
                                        <div className="h-[3px] rounded-full" style={{ background: 'rgba(34,197,94,0.06)' }}>
                                            <div className="h-full rounded-full transition-all duration-1000 relative overflow-hidden"
                                                style={{
                                                    width: `${s.level}%`,
                                                    background: `linear-gradient(90deg, ${meta.color}, ${meta.color}88)`,
                                                    boxShadow: `0 0 6px ${meta.color}30`,
                                                }}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                          -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Connection lines hint */}
            <div className="mt-6 font-mono text-[9px] text-center animate-boot boot-8" style={{ color: '#2D4636' }}>
                {'>'} {skills.length} capabilities loaded across {Object.keys(grouped).length} subsystems
            </div>
        </div>
    );
}
