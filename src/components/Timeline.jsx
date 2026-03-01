import { motion } from 'framer-motion';

export default function Timeline({ items }) {
    return (
        <div className="relative">
            {/* Vertical connector line */}
            <div
                className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-px"
                style={{
                    background: 'linear-gradient(to bottom, rgba(34,197,94,0.40), rgba(74,222,128,0.15), transparent)',
                }}
            />

            <div className="space-y-16">
                {items.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative flex flex-col md:flex-row items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline dot */}
                            <div
                                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 transform -translate-x-1.5 md:-translate-x-2 mt-6 z-10 animate-pulse-green"
                                style={{
                                    background: 'rgba(34,197,94,0.25)',
                                    borderColor: '#22C55E',
                                }}
                            >
                                <div
                                    className="absolute inset-1 rounded-full animate-pulse-glow"
                                    style={{ background: '#22C55E' }}
                                />
                            </div>

                            {/* Card */}
                            <div className={`pl-8 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                                <div
                                    className="glass rounded-2xl p-6 md:p-8 group transition-all duration-500"
                                    style={{ '--tw-ring-color': 'rgba(34,197,94,0.15)' }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'rgba(34,197,94,0.22)';
                                        e.currentTarget.style.boxShadow = '0 0 40px rgba(34,197,94,0.06)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = '';
                                        e.currentTarget.style.boxShadow = '';
                                    }}
                                >
                                    {/* Period badge */}
                                    <span
                                        className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-4"
                                        style={{
                                            color: '#22C55E',
                                            background: 'rgba(34,197,94,0.09)',
                                            border: '1px solid rgba(34,197,94,0.22)',
                                        }}
                                    >
                                        {item.period}
                                    </span>

                                    <h3
                                        className="text-xl md:text-2xl font-display font-bold mb-1 transition-colors group-hover:opacity-90"
                                        style={{ color: '#E6F4EA' }}
                                    >
                                        {item.role}
                                    </h3>
                                    <p style={{ color: '#A7D7B8' }} className="font-medium mb-1">
                                        {item.company}
                                        <span style={{ color: '#4D7A5F' }} className="ml-2">• {item.location}</span>
                                    </p>

                                    <p style={{ color: '#A7D7B8' }} className="text-sm leading-relaxed mt-4 mb-5">
                                        {item.description}
                                    </p>

                                    <ul className="space-y-2 mb-5">
                                        {item.highlights.map((h, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * i + 0.3 }}
                                                className="flex items-start gap-2 text-sm"
                                                style={{ color: '#A7D7B8' }}
                                            >
                                                <span style={{ color: '#22C55E' }} className="mt-0.5 shrink-0">▹</span>
                                                {h}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs font-mono px-2.5 py-1 rounded-lg"
                                                style={{
                                                    color: '#4ADE80',
                                                    background: 'rgba(74,222,128,0.08)',
                                                    border: '1px solid rgba(74,222,128,0.18)',
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
