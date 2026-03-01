import { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, techStackIcons } from '../data/portfolioData';
import Hero3D from '../components/Hero3D';

/* ---------- Typewriter ---------- */
function TypeWriter({ texts, speed = 62, deleteSpeed = 32, pause = 2200 }) {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [display, setDisplay] = useState('');

    useEffect(() => {
        const cur = texts[textIndex];
        if (!isDeleting && charIndex < cur.length) {
            const t = setTimeout(() => { setDisplay(cur.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, speed);
            return () => clearTimeout(t);
        }
        if (!isDeleting && charIndex === cur.length) {
            const t = setTimeout(() => setIsDeleting(true), pause);
            return () => clearTimeout(t);
        }
        if (isDeleting && charIndex > 0) {
            const t = setTimeout(() => { setDisplay(cur.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, deleteSpeed);
            return () => clearTimeout(t);
        }
        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTextIndex(i => (i + 1) % texts.length);
        }
    }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pause]);

    return (
        <span>
            {display}
            <span className="animate-pulse" style={{ color: '#22C55E' }}>|</span>
        </span>
    );
}

/* ---------- Floating tech badge ---------- */
function FloatingTechBadge({ icon, name, color, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.15 }}
            className="absolute hidden lg:flex items-center justify-center w-11 h-11 rounded-xl glass transition-all duration-300"
            style={{
                top: `${18 + Math.sin(index * 1.2) * 28 + 22}%`,
                right: `${6 + (index % 3) * 7}%`,
                border: '1px solid rgba(34,197,94,0.12)',
            }}
            title={name}
        >
            <span className="text-base" style={{ color }}>{icon}</span>
        </motion.div>
    );
}

export default function HeroSection() {
    const taglines = [
        'Building Scalable Mobile Experiences',
        'React Native Architecture Expert',
        'Performance-Obsessed Engineer',
        'End-to-End Mobile Lifecycle',
    ];

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden holo-grid">
            {/* Radial ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-breathe"
                    style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.04) 0%, transparent 70%)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen pt-24 lg:pt-0">

                    {/* ── Left column ── */}
                    <div className="order-2 lg:order-1">

                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                            style={{ border: '1px solid rgba(34,197,94,0.22)' }}
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-green" />
                            <span className="text-sm font-medium" style={{ color: '#A7D7B8' }}>
                                Available for opportunities
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4"
                        >
                            <span style={{ color: '#E6F4EA' }}>Hi, I'm</span>
                            <br />
                            <span className="gradient-text">{personalInfo.name}</span>
                        </motion.h1>

                        {/* Role */}
                        <motion.p
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl font-display font-medium mb-6"
                            style={{ color: '#A7D7B8' }}
                        >
                            {personalInfo.role}
                        </motion.p>

                        {/* Typewriter */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-lg md:text-xl font-mono mb-8 h-8"
                            style={{ color: 'rgba(34,197,94,0.80)' }}
                        >
                            <span style={{ color: '#4D7A5F' }} className="mr-2">{'>'}</span>
                            <TypeWriter texts={taglines} />
                        </motion.div>

                        {/* Summary */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="leading-relaxed mb-10 max-w-lg"
                            style={{ color: '#A7D7B8' }}
                        >
                            {personalInfo.summary.slice(0, 155)}…
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#projects" className="btn-primary">View Projects</a>
                            <a href="#contact" className="btn-secondary">Get in Touch</a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="flex gap-10 mt-12"
                        >
                            {[
                                { value: '3.5+', label: 'Years Exp.' },
                                { value: '8+', label: 'Projects' },
                                { value: '2M+', label: 'Users' },
                            ].map((s) => (
                                <div key={s.label}>
                                    <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{s.value}</div>
                                    <div className="text-xs mt-1" style={{ color: '#4D7A5F' }}>{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right — 3D phone ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.82 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="order-1 lg:order-2 h-[350px] sm:h-[450px] lg:h-[600px] relative"
                    >
                        <Suspense fallback={
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border-2 animate-spin"
                                    style={{ borderColor: 'rgba(34,197,94,0.25)', borderTopColor: '#22C55E' }} />
                            </div>
                        }>
                            <Hero3D />
                        </Suspense>
                    </motion.div>
                </div>
            </div>

            {/* Floating tech icons */}
            {techStackIcons.slice(0, 6).map((tech, i) => (
                <FloatingTechBadge key={tech.name} {...tech} index={i} />
            ))}

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-widest uppercase font-mono" style={{ color: '#4D7A5F' }}>Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="w-5 h-8 rounded-full flex items-start justify-center p-1"
                    style={{ border: '1px solid rgba(34,197,94,0.22)' }}
                >
                    <div className="w-1 h-2 rounded-full" style={{ background: '#22C55E' }} />
                </motion.div>
            </motion.div>
        </section>
    );
}
