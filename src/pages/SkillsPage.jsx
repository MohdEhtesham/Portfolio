import { skillGroups, skills } from '../data/portfolioData';

const palette = ['#22C55E', '#4ADE80', '#86EFAC'];

// Day-to-day core stack, shown emphasised
const coreSkills = new Set([
    'React Native (CLI)', 'JavaScript (ES6+)', 'TypeScript', 'Redux', 'Redux Toolkit', 'REST APIs',
]);

export default function SkillsPage() {
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
                    The tools and practices behind production mobile apps — from React Native and Redux to
                    native integrations, payments and CI/CD.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {skillGroups.map((group, gi) => {
                    const color = palette[gi % palette.length];
                    return (
                        <div key={group.category} className={`panel animate-boot boot-${Math.min(gi + 2, 8)}`}>
                            <div className="panel-header">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}40` }} />
                                    <h3 className="panel-title" style={{ color }}>{group.category}</h3>
                                </div>
                                <div className="panel-status">
                                    <span className="dot" />
                                    <span>{group.items.length} LOADED</span>
                                </div>
                            </div>
                            <div className="panel-body">
                                <ul className="flex flex-wrap gap-2">
                                    {group.items.map(item => {
                                        const core = coreSkills.has(item);
                                        return (
                                            <li key={item} className="skill-chip"
                                                style={core ? { color: '#E6F4EA', borderColor: 'rgba(34,197,94,0.30)', background: 'rgba(34,197,94,0.08)' } : undefined}>
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 font-mono text-[11px] text-center animate-boot boot-8" style={{ color: '#6B8F79' }}>
                {'>'} {skills.length} capabilities loaded across {skillGroups.length} subsystems
            </div>
        </div>
    );
}
