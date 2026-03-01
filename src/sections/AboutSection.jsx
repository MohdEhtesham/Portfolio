import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, education } from '../data/portfolioData';

export default function AboutSection() {
    const highlights = [
        {
            icon: '📱', title: '3.5+ Years', subtitle: 'Mobile Development',
            description: 'End-to-end React Native expertise from architecture to deployment'
        },
        {
            icon: '🚀', title: '8+ Apps', subtitle: 'Production Shipped',
            description: 'Delivered across EdTech, Healthcare, Travel & Productivity domains'
        },
        {
            icon: '👥', title: '2M+ Users', subtitle: 'Impact Scale',
            description: 'Built apps serving millions with robust performance & reliability'
        },
        {
            icon: '⚡', title: '40% Faster', subtitle: 'Performance Gains',
            description: 'Consistently optimizing bundle size, load time & runtime performance'
        },
    ];

    return (
        <SectionWrapper id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left — text */}
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono mb-4 block"
                        style={{ color: '#22C55E' }}
                    >
                        01 — About Me
                    </motion.span>

                    <h2 className="section-heading mb-6">
                        Crafting{' '}
                        <span className="gradient-text">Mobile Experiences</span>{' '}
                        That Scale
                    </h2>

                    {/* Left accent bar */}
                    <div className="flex gap-4">
                        <div className="w-0.5 rounded-full shrink-0 mt-1" style={{ background: 'linear-gradient(to bottom, #22C55E, transparent)' }} />
                        <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#A7D7B8' }}>
                            <p>{personalInfo.summary}</p>
                            <p>
                                With deep expertise in React Native, JavaScript ES6+, Redux, Firebase,
                                and a wide array of integrations (payments, BLE, maps, video, analytics),
                                I bring a holistic approach to mobile engineering — ensuring every app
                                is performant, scalable, and delightful to use.
                            </p>
                        </div>
                    </div>

                    {/* Education badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 glass rounded-xl p-5 inline-flex items-center gap-4"
                        style={{ border: '1px solid rgba(34,197,94,0.14)' }}
                    >
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.18)' }}
                        >🎓</div>
                        <div>
                            <p className="font-medium" style={{ color: '#E6F4EA' }}>
                                {education.degree} — {education.field}
                            </p>
                            <p className="text-sm" style={{ color: '#4D7A5F' }}>{education.university}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right — highlight cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 28, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="glass rounded-2xl p-6 group cursor-default transition-all duration-500"
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.20)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(34,197,94,0.05)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}
                        >
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h3
                                className="text-xl font-display font-bold mb-0.5 transition-colors"
                                style={{ color: '#E6F4EA' }}
                            >
                                {item.title}
                            </h3>
                            <p className="text-sm font-mono mb-2" style={{ color: '#22C55E' }}>{item.subtitle}</p>
                            <p className="text-xs leading-relaxed" style={{ color: '#4D7A5F' }}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
