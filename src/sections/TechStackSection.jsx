import { Suspense } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import TechSphere from '../components/TechSphere';
import { techStackIcons } from '../data/portfolioData';

export default function TechStackSection() {
    return (
        <SectionWrapper id="techstack">
            <div className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono mb-4 block"
                    style={{ color: '#22C55E' }}
                >
                    05 — Tech Stack
                </motion.span>

                <h2 className="section-heading mb-4">
                    Technology <span className="gradient-text">Ecosystem</span>
                </h2>

                <p className="section-subheading mx-auto">
                    An interactive 3D visualization of my core technology stack — the tools
                    and frameworks I use to build exceptional mobile experiences.
                </p>
            </div>

            {/* 3D sphere */}
            <Suspense fallback={
                <div className="w-full h-96 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 animate-spin"
                        style={{ borderColor: 'rgba(34,197,94,0.22)', borderTopColor: '#22C55E' }} />
                </div>
            }>
                <TechSphere />
            </Suspense>

            {/* Flat icon grid */}
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-12"
            >
                {techStackIcons.map((tech, i) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.82 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.09, y: -4 }}
                        className="glass rounded-xl p-4 flex flex-col items-center gap-2 group cursor-default transition-all duration-300"
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.20)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = ''; }}
                    >
                        <span className="text-2xl" style={{ color: tech.color }}>{tech.icon}</span>
                        <span className="text-xs text-center transition-colors" style={{ color: '#4D7A5F' }}>
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
