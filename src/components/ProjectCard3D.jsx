import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ProjectCard3D({ project, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 140, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 140, damping: 15 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['11deg', '-11deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-11deg', '11deg']);

    const handleMouseMove = (e) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => { x.set(0); y.set(0); setIsHovered(false); };

    // Shade the project color slightly towards mint when hovered
    const glowColor = project.color;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative group cursor-pointer"
        >
            <div
                className="relative rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                    background: `linear-gradient(135deg, ${glowColor}07, rgba(17,28,22,0.55))`,
                    border: `1px solid ${isHovered ? glowColor + '38' : '#1E3328'}`,
                    boxShadow: isHovered
                        ? `0 0 36px ${glowColor}12, 0 18px 55px rgba(0,0,0,0.40)`
                        : '0 4px 20px rgba(0,0,0,0.18)',
                }}
            >
                {/* Top accent bar */}
                <div
                    className="h-0.5 w-full transition-opacity duration-400"
                    style={{
                        background: `linear-gradient(90deg, ${glowColor}, transparent)`,
                        opacity: isHovered ? 1 : 0.38,
                    }}
                />

                <div className="p-6 md:p-8">
                    {/* Category + arrow */}
                    <div className="flex items-center justify-between mb-4">
                        <span
                            className="text-xs font-mono font-medium px-3 py-1 rounded-full"
                            style={{
                                color: glowColor,
                                background: `${glowColor}12`,
                                border: `1px solid ${glowColor}28`,
                            }}
                        >
                            {project.category}
                        </span>

                        <motion.div
                            animate={{ rotate: isHovered ? 45 : 0 }}
                            transition={{ duration: 0.28 }}
                            className="w-7 h-7 rounded-lg flex items-center justify-center"
                            style={{ background: `${glowColor}0E` }}
                        >
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path d="M1 12L12 1M12 1H3M12 1V10" stroke={glowColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Title */}
                    <h3
                        className="text-xl md:text-2xl font-display font-bold mb-3 transition-colors duration-300"
                        style={{ color: isHovered ? glowColor : '#E6F4EA' }}
                    >
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: '#A7D7B8' }}>
                        {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.features?.map((f) => (
                            <span
                                key={f}
                                className="text-xs px-2 py-1 rounded-md"
                                style={{
                                    color: '#4D7A5F',
                                    background: 'rgba(34,197,94,0.05)',
                                    border: '1px solid rgba(34,197,94,0.10)',
                                }}
                            >
                                {f}
                            </span>
                        ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs font-mono px-2.5 py-1 rounded-lg"
                                style={{
                                    color: glowColor,
                                    background: `${glowColor}0C`,
                                    border: `1px solid ${glowColor}20`,
                                }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bloom glow on hover */}
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    animate={{ opacity: isHovered ? 0.07 : 0 }}
                    style={{
                        background: `radial-gradient(500px circle at 50% 50%, ${glowColor}, transparent 40%)`,
                    }}
                />
            </div>
        </motion.div>
    );
}
