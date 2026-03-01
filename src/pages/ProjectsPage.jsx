import { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function ProjectsPage() {
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    const [filter, setFilter] = useState('All');
    const [expanded, setExpanded] = useState(null);
    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="fade-up">
            <div className="page-header">
                <div className="page-label animate-boot boot-1">
                    <span>◈ PROJECT NODES</span>
                    <div className="line" />
                </div>
                <h2 className="animate-boot boot-2">
                    Deployed <span className="gradient-text">Systems</span>
                </h2>
                <p className="animate-boot boot-3">
                    Production mobile applications spanning EdTech, Healthcare, Travel, AI, and more.
                </p>
            </div>

            {/* Cluster filter */}
            <div className="flex flex-wrap gap-1.5 mb-6 animate-boot boot-3">
                {categories.map(cat => (
                    <button key={cat} onClick={() => setFilter(cat)}
                        className="font-mono text-[9px] tracking-wider px-3 py-1.5 rounded-lg transition-all duration-300"
                        style={{
                            color: filter === cat ? '#22C55E' : '#4A6B55',
                            background: filter === cat ? 'rgba(34,197,94,0.08)' : 'rgba(34,197,94,0.02)',
                            border: filter === cat ? '1px solid rgba(34,197,94,0.25)' : '1px solid rgba(34,197,94,0.08)',
                        }}>
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Node network grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((project, i) => (
                    <div key={project.id}
                        className={`project-node animate-boot boot-${Math.min(i + 3, 8)}`}
                        onClick={() => setExpanded(expanded === project.id ? null : project.id)}>
                        <div className="node-dot" />

                        <span className="font-mono text-[8px] tracking-wider uppercase" style={{ color: project.color }}>
                            {project.category}
                        </span>

                        <h3 className="font-display text-base font-bold mt-1.5 mb-2"
                            style={{ color: expanded === project.id ? '#22C55E' : '#E6F4EA' }}>
                            {project.title}
                        </h3>

                        <p className={`text-[11px] leading-relaxed mb-3 ${expanded === project.id ? '' : 'line-clamp-2'}`}
                            style={{ color: '#8FB89E' }}>
                            {project.description}
                        </p>

                        {/* Expanded content */}
                        {expanded === project.id && (
                            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(34,197,94,0.08)' }}>
                                {project.features && (
                                    <div className="mb-3">
                                        <span className="font-mono text-[8px] tracking-wider block mb-1.5" style={{ color: '#4A6B55' }}>
                                            CAPABILITIES
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.features.map(f => (
                                                <span key={f} className="font-mono text-[9px] px-2 py-0.5 rounded"
                                                    style={{ color: '#E6F4EA', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.10)' }}>
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1">
                            {project.tech.map(t => (
                                <span key={t} className="font-mono text-[8px] px-1.5 py-0.5 rounded"
                                    style={{ color: '#4ADE80', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.08)' }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 font-mono text-[9px] text-center" style={{ color: '#2D4636' }}>
                {'>'} Showing {filtered.length} of {projects.length} deployed nodes
            </div>
        </div>
    );
}
