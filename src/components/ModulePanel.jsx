import { skills, techStackIcons } from '../data/portfolioData';

/* Category labels */
const categoryMap = {
    core: 'CORE',
    state: 'STATE',
    backend: 'BACKEND',
    web: 'WEB',
    tools: 'TOOLS',
    integrations: 'SDK',
};

export default function ModulePanel() {
    /* Group skills by category */
    const grouped = {};
    skills.forEach(s => {
        const cat = categoryMap[s.category] || s.category.toUpperCase();
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(s);
    });

    return (
        <div className="panel animate-boot boot-4"
            style={{ gridArea: 'bottom', display: 'flex', flexDirection: 'column' }}>
            <div className="panel-header">
                <span className="panel-title">⬡ Skill Modules</span>
                <div className="panel-status">
                    <span className="dot" />
                    <span>{skills.length} LOADED</span>
                </div>
            </div>

            <div className="panel-body" style={{ flex: 1, minHeight: 0 }}>
                <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
                    {Object.entries(grouped).map(([cat, catSkills]) => (
                        <div key={cat} className="shrink-0">
                            {/* Category label */}
                            <div className="font-mono text-[8px] tracking-wider mb-2 flex items-center gap-1.5"
                                style={{ color: '#4A6B55' }}>
                                <span className="w-1 h-1 rounded-full" style={{ background: '#22C55E' }} />
                                {cat}
                            </div>

                            <div className="flex gap-1.5 flex-wrap" style={{ maxWidth: '220px' }}>
                                {catSkills.map(s => (
                                    <div key={s.name} className="module-tile group" style={{ padding: '6px 10px' }}>
                                        <div className="flex items-center justify-between gap-3 mb-1">
                                            <span className="font-mono text-[10px] font-medium"
                                                style={{ color: '#E6F4EA' }}>{s.name}</span>
                                            <span className="font-mono text-[8px]" style={{ color: '#4A6B55' }}>{s.level}%</span>
                                        </div>
                                        {/* Mini progress bar */}
                                        <div className="h-[2px] rounded-full" style={{ background: 'rgba(34,197,94,0.08)' }}>
                                            <div className="h-full rounded-full transition-all duration-700"
                                                style={{
                                                    width: `${s.level}%`,
                                                    background: 'linear-gradient(90deg, #22C55E, #4ADE80)',
                                                    boxShadow: '0 0 4px rgba(34,197,94,0.30)',
                                                }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Tech Stack icons column */}
                    <div className="shrink-0">
                        <div className="font-mono text-[8px] tracking-wider mb-2 flex items-center gap-1.5"
                            style={{ color: '#4A6B55' }}>
                            <span className="w-1 h-1 rounded-full" style={{ background: '#86EFAC' }} />
                            ECOSYSTEM
                        </div>
                        <div className="flex gap-1 flex-wrap" style={{ maxWidth: '200px' }}>
                            {techStackIcons.map(t => (
                                <div key={t.name} className="module-tile flex items-center gap-1.5"
                                    style={{ padding: '4px 8px' }}>
                                    <span className="text-xs">{t.icon}</span>
                                    <span className="font-mono text-[8px]" style={{ color: '#8FB89E' }}>{t.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
