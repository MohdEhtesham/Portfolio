import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ---------- Single skill bar ---------- */
function SkillBar({ name, level, color, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-30px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="group"
        >
            <div className="flex items-center justify-between mb-2">
                <span
                    className="text-sm font-medium transition-colors"
                    style={{ color: inView ? '#E6F4EA' : '#4D7A5F' }}
                >
                    {name}
                </span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: delay + 0.5 }}
                    className="text-xs font-mono"
                    style={{ color: '#4D7A5F' }}
                >
                    {level}%
                </motion.span>
            </div>

            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(34,197,94,0.08)' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1.3, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                        background: `linear-gradient(90deg, ${color}, ${color}99)`,
                        boxShadow: `0 0 10px ${color}35`,
                    }}
                >
                    {/* shimmer on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>
            </div>
        </motion.div>
    );
}

/* ---------- Category mapping — all green shades ---------- */
const categories = {
    core: { label: 'Core Technologies', color: '#22C55E' },
    state: { label: 'State Management', color: '#4ADE80' },
    backend: { label: 'Backend & APIs', color: '#86EFAC' },
    web: { label: 'Web Technologies', color: '#22C55E' },
    integrations: { label: 'Integrations & SDKs', color: '#4ADE80' },
    tools: { label: 'Tools & DevOps', color: '#86EFAC' },
};

export default function SkillGraph({ skills }) {
    const grouped = {};
    skills.forEach((s) => {
        if (!grouped[s.category]) grouped[s.category] = [];
        grouped[s.category].push(s);
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {Object.entries(grouped).map(([cat, catSkills], catIdx) => {
                const meta = categories[cat] || { label: cat, color: '#22C55E' };
                return (
                    <motion.div
                        key={cat}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                        className="glass rounded-2xl p-6 md:p-8 transition-all duration-500"
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.20)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = ''; }}
                    >
                        {/* Category header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-8 rounded-full" style={{ background: meta.color, boxShadow: `0 0 8px ${meta.color}55` }} />
                            <h4 className="text-lg font-display font-semibold" style={{ color: meta.color }}>
                                {meta.label}
                            </h4>
                        </div>

                        <div className="space-y-4">
                            {catSkills.map((skill, i) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    color={meta.color}
                                    delay={i * 0.07}
                                />
                            ))}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
