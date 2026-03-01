import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard3D from '../components/ProjectCard3D';
import { projects } from '../data/portfolioData';

export default function ProjectsSection() {
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono mb-4 block"
                    style={{ color: '#22C55E' }}
                >
                    04 — Projects
                </motion.span>

                <h2 className="section-heading mb-4">
                    Featured <span className="gradient-text">Work</span>
                </h2>

                <p className="section-subheading mx-auto">
                    A showcase of production mobile applications spanning EdTech, Healthcare,
                    Travel, AI, and more.
                </p>
            </div>

            {/* Category filter */}
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-2 mb-12"
            >
                {categories.map(cat => (
                    <motion.button
                        key={cat}
                        onClick={() => setActive(cat)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 glass"
                        style={{
                            color: active === cat ? '#22C55E' : '#A7D7B8',
                            border: active === cat
                                ? '1px solid rgba(34,197,94,0.32)'
                                : '1px solid #1E3328',
                            background: active === cat ? 'rgba(34,197,94,0.08)' : 'transparent',
                        }}
                    >
                        {cat}
                    </motion.button>
                ))}
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.35 }}
                        >
                            <ProjectCard3D project={project} index={i} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </SectionWrapper>
    );
}
