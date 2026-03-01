import { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function ProjectNodes({ onSelect }) {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div className="panel animate-boot boot-3" style={{ gridArea: 'right', display: 'flex', flexDirection: 'column' }}>
            <div className="panel-header">
                <span className="panel-title">◈ Project Nodes</span>
                <div className="panel-status">
                    <span className="dot" />
                    <span>{projects.length} DEPLOYED</span>
                </div>
            </div>

            <div className="panel-body" style={{ flex: 1, minHeight: 0 }}>
                <div className="grid grid-cols-2 gap-2">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-node"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => onSelect(project)}
                        >
                            <div className="node-dot" />

                            {/* Category */}
                            <span className="font-mono text-[8px] tracking-wider uppercase"
                                style={{ color: project.color }}>
                                {project.category}
                            </span>

                            {/* Title */}
                            <h4 className="font-display text-[12px] font-semibold mt-1 mb-1 leading-tight"
                                style={{ color: hoveredId === project.id ? '#22C55E' : '#E6F4EA' }}>
                                {project.title}
                            </h4>

                            {/* Short description */}
                            <p className="text-[9px] leading-relaxed line-clamp-2" style={{ color: '#4A6B55' }}>
                                {project.description.slice(0, 80)}…
                            </p>

                            {/* Tech indicators */}
                            <div className="flex flex-wrap gap-0.5 mt-2">
                                {project.tech.slice(0, 3).map(t => (
                                    <span key={t} className="font-mono text-[7px] px-1 py-0.5 rounded"
                                        style={{ color: '#4ADE80', background: 'rgba(34,197,94,0.06)' }}>
                                        {t}
                                    </span>
                                ))}
                                {project.tech.length > 3 && (
                                    <span className="font-mono text-[7px] px-1 py-0.5" style={{ color: '#2D4636' }}>
                                        +{project.tech.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
