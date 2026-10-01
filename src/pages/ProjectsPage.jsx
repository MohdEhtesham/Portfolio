import { useState } from 'react';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, index }) {
    return (
        <article className={`project-node flex flex-col animate-boot boot-${Math.min(index + 3, 8)}`}>
            <div className="node-dot" />

            <div className="flex flex-wrap items-center gap-2 pr-4">
                <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: project.color }}>
                    {project.category}
                </span>
                {project.company && (
                    <span className="font-mono text-[10px]" style={{ color: '#6B8F79' }}>· {project.company}</span>
                )}
                {project.featured && (
                    <span className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded"
                        style={{ color: '#060D09', background: '#22C55E' }}>
                        FEATURED
                    </span>
                )}
            </div>

            <h3 className={`font-display font-bold mt-2 mb-2 ${project.featured ? 'text-lg md:text-xl' : 'text-base'}`}
                style={{ color: '#E6F4EA' }}>
                {project.title}
            </h3>

            <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#8FB89E' }}>
                {project.description}
            </p>

            {project.features && (
                <div className="mb-4">
                    <span className="font-mono text-[10px] tracking-wider block mb-1.5" style={{ color: '#6B8F79' }}>
                        CAPABILITIES
                    </span>
                    <ul className="flex flex-wrap gap-1.5">
                        {project.features.map(f => (
                            <li key={f} className="font-mono text-[10px] px-2 py-0.5 rounded"
                                style={{ color: '#E6F4EA', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)' }}>
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Tech tags */}
            <ul className="flex flex-wrap gap-1 mt-auto">
                {project.tech.map(t => (
                    <li key={t} className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                        style={{ color: '#4ADE80', background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.10)' }}>
                        {t}
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default function ProjectsPage() {
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    const [filter, setFilter] = useState('All');
    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
    const featured = filtered.filter(p => p.featured);
    const rest = filtered.filter(p => !p.featured);

    return (
        <div className="fade-up">
            <div className="page-header">
                <div className="page-label animate-boot boot-1">
                    <span>◈ PROJECT NODES</span>
                    <div className="line" />
                </div>
                <h2 className="animate-boot boot-2">
                    Key <span className="gradient-text">Projects</span>
                </h2>
                <p className="animate-boot boot-3">
                    Production mobile apps across EdTech, IoT, Healthcare, Travel, AI and more.
                </p>
            </div>

            {/* Cluster filter */}
            <div className="flex flex-wrap gap-1.5 mb-6 animate-boot boot-3" role="group" aria-label="Filter projects by category">
                {categories.map(cat => (
                    <button key={cat} type="button" onClick={() => setFilter(cat)} aria-pressed={filter === cat}
                        className="font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer"
                        style={{
                            color: filter === cat ? '#22C55E' : '#6B8F79',
                            background: filter === cat ? 'rgba(34,197,94,0.08)' : 'rgba(34,197,94,0.02)',
                            border: filter === cat ? '1px solid rgba(34,197,94,0.25)' : '1px solid rgba(34,197,94,0.10)',
                        }}>
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {featured.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {featured.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {rest.map((project, i) => <ProjectCard key={project.id} project={project} index={i + featured.length} />)}
            </div>

            <div className="mt-6 font-mono text-[11px] text-center" style={{ color: '#6B8F79' }}>
                {'>'} Showing {filtered.length} of {projects.length} projects
            </div>
        </div>
    );
}
