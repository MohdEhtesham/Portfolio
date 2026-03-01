import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                            style={{
                                background: 'rgba(34,197,94,0.10)',
                                border: '1px solid rgba(34,197,94,0.30)',
                            }}
                        >
                            <span className="font-bold font-display text-lg" style={{ color: '#22C55E' }}>E</span>
                        </div>
                        <span className="font-display font-bold text-lg hidden sm:block" style={{ color: '#E6F4EA' }}>
                            Ehtesham
                        </span>
                    </motion.a>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <motion.button
                                    key={link.name}
                                    onClick={() => scrollTo(link.href)}
                                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                                    style={{
                                        color: isActive ? '#22C55E' : '#A7D7B8',
                                        background: isActive ? 'rgba(34,197,94,0.08)' : 'transparent',
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                                            style={{ background: '#22C55E' }}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex">
                        <motion.button
                            onClick={() => scrollTo('#contact')}
                            className="btn-primary text-sm !py-2.5 !px-5"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let's Talk
                        </motion.button>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        {[
                            mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 },
                            mobileOpen ? { opacity: 0 } : { opacity: 1 },
                            mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 },
                        ].map((anim, i) => (
                            <motion.span
                                key={i}
                                animate={anim}
                                className="w-6 h-0.5 block rounded-full"
                                style={{ background: '#A7D7B8' }}
                            />
                        ))}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 glass-strong pt-24 px-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-left px-4 py-3 rounded-xl text-lg font-medium transition-all"
                                    style={{
                                        color: activeSection === link.href.replace('#', '') ? '#22C55E' : '#A7D7B8',
                                        background: activeSection === link.href.replace('#', '')
                                            ? 'rgba(34,197,94,0.08)' : 'transparent',
                                    }}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                onClick={() => scrollTo('#contact')}
                                className="btn-primary mt-4 text-center"
                            >
                                Let's Talk
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
