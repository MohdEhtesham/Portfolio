import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="relative py-12 px-6" style={{ borderTop: '1px solid #1E3328' }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.28)' }}
                        >
                            <span className="font-bold text-sm font-display" style={{ color: '#22C55E' }}>E</span>
                        </div>
                        <span className="font-display font-semibold" style={{ color: '#E6F4EA' }}>
                            {personalInfo.name}
                        </span>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-3">
                        {[
                            { icon: FiGithub, href: personalInfo.github },
                            { icon: FiLinkedin, href: personalInfo.linkedin },
                            { icon: FiMail, href: `mailto:${personalInfo.email}` },
                        ].map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.12, y: -2 }}
                                className="w-9 h-9 rounded-lg glass flex items-center justify-center transition-all"
                                style={{ color: '#4D7A5F' }}
                                onMouseEnter={e => { e.currentTarget.style.color = '#22C55E'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = '#4D7A5F'; e.currentTarget.style.borderColor = ''; }}
                            >
                                <s.icon size={16} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm flex items-center gap-1.5" style={{ color: '#4D7A5F' }}>
                        © {new Date().getFullYear()} — Built with{' '}
                        <FiHeart size={12} style={{ color: '#22C55E' }} className="inline" /> by{' '}
                        <span style={{ color: '#22C55E' }}>{personalInfo.name}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
