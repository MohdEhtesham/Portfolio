import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolioData';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(r => setTimeout(r, 1500));
        setSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
    };

    const socials = [
        { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
        { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
        { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    ];

    const inputStyle = {
        width: '100%',
        padding: '14px 20px',
        borderRadius: '12px',
        background: 'rgba(34,197,94,0.03)',
        border: '1px solid #1E3328',
        color: '#E6F4EA',
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.9rem',
        transition: 'all 0.3s',
        outline: 'none',
    };

    return (
        <SectionWrapper id="contact">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono mb-4 block"
                    style={{ color: '#22C55E' }}
                >
                    06 — Contact
                </motion.span>

                <h2 className="section-heading mb-4">
                    Let's Build <span className="gradient-text">Together</span>
                </h2>

                <p className="section-subheading mx-auto">
                    Have a project in mind or want to discuss opportunities?
                    I'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* Left — info */}
                <motion.div
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-display font-bold mb-6" style={{ color: '#E6F4EA' }}>Get in Touch</h3>

                    <div className="space-y-6 mb-10">
                        {[
                            {
                                icon: FiMail, label: 'Email', value: personalInfo.email,
                                href: `mailto:${personalInfo.email}`, accent: '#22C55E'
                            },
                            {
                                icon: FiMapPin, label: 'Location', value: personalInfo.location,
                                accent: '#4ADE80'
                            },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: `${item.accent}0D`,
                                        border: `1px solid ${item.accent}22`,
                                        color: item.accent,
                                    }}
                                >
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-sm" style={{ color: '#4D7A5F' }}>{item.label}</p>
                                    {item.href
                                        ? <a href={item.href} className="transition-colors" style={{ color: '#E6F4EA' }}
                                            onMouseEnter={e => e.target.style.color = '#22C55E'}
                                            onMouseLeave={e => e.target.style.color = '#E6F4EA'}
                                        >{item.value}</a>
                                        : <p style={{ color: '#E6F4EA' }}>{item.value}</p>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Socials */}
                    <div>
                        <p className="text-sm mb-4" style={{ color: '#4D7A5F' }}>Find me on</p>
                        <div className="flex gap-3">
                            {socials.map(s => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.12, y: -2 }}
                                    className="w-12 h-12 rounded-xl glass flex items-center justify-center transition-all"
                                    style={{ color: '#4D7A5F' }}
                                    onMouseEnter={e => { e.currentTarget.style.color = '#22C55E'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.28)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = '#4D7A5F'; e.currentTarget.style.borderColor = ''; }}
                                    aria-label={s.label}
                                >
                                    <s.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quote card */}
                    <div
                        className="mt-12 glass rounded-2xl p-6 relative overflow-hidden"
                        style={{ border: '1px solid rgba(34,197,94,0.10)' }}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06), transparent)' }} />
                        <p className="text-sm leading-relaxed relative z-10" style={{ color: '#A7D7B8' }}>
                            "I'm passionate about building mobile experiences that are not just
                            functional, but truly delightful. Let's create something amazing."
                        </p>
                        <p className="font-display font-medium mt-3 relative z-10" style={{ color: '#22C55E' }}>
                            — {personalInfo.name}
                        </p>
                    </div>
                </motion.div>

                {/* Right — form */}
                <motion.div
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {[
                            { id: 'contact-name', name: 'name', type: 'text', label: 'Your Name', placeholder: 'John Doe' },
                            { id: 'contact-email', name: 'email', type: 'email', label: 'Email Address', placeholder: 'john@example.com' },
                        ].map(field => (
                            <div key={field.id}>
                                <label htmlFor={field.id} className="block text-sm mb-2" style={{ color: '#4D7A5F' }}>
                                    {field.label}
                                </label>
                                <input
                                    id={field.id}
                                    type={field.type}
                                    name={field.name}
                                    required
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    style={inputStyle}
                                    onFocus={e => { e.target.style.borderColor = 'rgba(34,197,94,0.35)'; e.target.style.background = 'rgba(34,197,94,0.05)'; }}
                                    onBlur={e => { e.target.style.borderColor = '#1E3328'; e.target.style.background = 'rgba(34,197,94,0.03)'; }}
                                />
                            </div>
                        ))}

                        <div>
                            <label htmlFor="contact-message" className="block text-sm mb-2" style={{ color: '#4D7A5F' }}>Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                style={{ ...inputStyle, resize: 'none' }}
                                onFocus={e => { e.target.style.borderColor = 'rgba(34,197,94,0.35)'; e.target.style.background = 'rgba(34,197,94,0.05)'; }}
                                onBlur={e => { e.target.style.borderColor = '#1E3328'; e.target.style.background = 'rgba(34,197,94,0.03)'; }}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 rounded-xl font-display font-semibold text-base flex items-center justify-center gap-2 transition-all duration-500"
                            style={submitted
                                ? { background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.30)', color: '#22C55E' }
                                : { background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.28)', color: '#22C55E' }
                            }
                        >
                            {isSubmitting
                                ? <div className="w-5 h-5 rounded-full border-2 animate-spin"
                                    style={{ borderColor: 'rgba(34,197,94,0.25)', borderTopColor: '#22C55E' }} />
                                : submitted
                                    ? <><span>✓</span> Message Sent!</>
                                    : <><FiSend size={18} /> Send Message</>
                            }
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
