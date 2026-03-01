import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', msg: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSent(true);
            setForm({ name: '', email: '', msg: '' });
            setTimeout(() => setSent(false), 5000);
        }, 1500);
    };

    return (
        <div className="fade-up">
            <div className="page-header">
                <div className="page-label animate-boot boot-1">
                    <span>⚡ SIGNAL TERMINAL</span>
                    <div className="line" />
                </div>
                <h2 className="animate-boot boot-2">
                    Open <span className="gradient-text">Channel</span>
                </h2>
                <p className="animate-boot boot-3">
                    Transmit a signal — let's build something exceptional together.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
                {/* Left — info */}
                <div className="space-y-4 animate-boot boot-3">
                    <div className="panel">
                        <div className="panel-header">
                            <span className="panel-title">Channel Links</span>
                            <div className="panel-status"><span className="dot" /><span>OPEN</span></div>
                        </div>
                        <div className="panel-body space-y-3">
                            {[
                                { label: 'EMAIL', href: `mailto:${personalInfo.email}`, val: personalInfo.email },
                                { label: 'GITHUB', href: personalInfo.github, val: 'github.com/ehtesham' },
                                { label: 'LINKEDIN', href: personalInfo.linkedin, val: 'linkedin.com/in/ehtesham' },
                            ].map(c => (
                                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                                    className="module-tile flex items-center gap-3 no-underline group">
                                    <span className="w-2 h-2 rounded-full shrink-0 transition-all group-hover:scale-125"
                                        style={{ background: '#22C55E', boxShadow: '0 0 4px rgba(34,197,94,0.30)' }} />
                                    <div>
                                        <span className="font-mono text-[8px] tracking-wider block" style={{ color: '#4A6B55' }}>
                                            {c.label}
                                        </span>
                                        <span className="font-mono text-[11px] transition-colors group-hover:text-green-400"
                                            style={{ color: '#8FB89E' }}>
                                            {c.val}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panel-header"><span className="panel-title">Signal</span></div>
                        <div className="panel-body">
                            <p className="text-[11px] italic leading-relaxed" style={{ color: '#4A6B55' }}>
                                "Building mobile experiences that are not just functional, but truly delightful.
                                Let's create something amazing together."
                            </p>
                            <p className="font-mono text-[10px] mt-2" style={{ color: '#22C55E' }}>
                                — {personalInfo.name}
                            </p>
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panel-header"><span className="panel-title">Location</span></div>
                        <div className="panel-body">
                            <span className="font-mono text-[11px]" style={{ color: '#8FB89E' }}>{personalInfo.location}</span>
                        </div>
                    </div>
                </div>

                {/* Right — terminal form */}
                <div className="panel animate-boot boot-4">
                    <div className="panel-header">
                        <span className="panel-title">Transmit Message</span>
                        <div className="panel-status">
                            <span className="dot" />
                            <span>{sent ? 'DELIVERED' : 'AWAITING INPUT'}</span>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="font-mono text-[9px] mb-4 flex items-center gap-2" style={{ color: '#2D4636' }}>
                            <span style={{ color: '#22C55E' }}>{'>'}</span> ENTER TRANSMISSION DATA
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label className="font-mono text-[9px] tracking-wider block mb-1.5" style={{ color: '#4A6B55' }}>
                                    IDENTITY.NAME
                                </label>
                                <input type="text" required value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    placeholder="Your name" className="terminal-input" />
                            </div>

                            <div>
                                <label className="font-mono text-[9px] tracking-wider block mb-1.5" style={{ color: '#4A6B55' }}>
                                    SIGNAL.ADDRESS
                                </label>
                                <input type="email" required value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    placeholder="your@email.com" className="terminal-input" />
                            </div>

                            <div>
                                <label className="font-mono text-[9px] tracking-wider block mb-1.5" style={{ color: '#4A6B55' }}>
                                    MESSAGE.PAYLOAD
                                </label>
                                <textarea rows={5} required value={form.msg}
                                    onChange={e => setForm({ ...form, msg: e.target.value })}
                                    placeholder="Tell me about your project…"
                                    className="terminal-input" style={{ resize: 'none' }} />
                            </div>

                            <button type="submit" disabled={sending}
                                className="w-full py-3 rounded-lg font-mono text-[11px] tracking-wider font-semibold transition-all duration-400 flex items-center justify-center gap-2"
                                style={{
                                    background: sent ? 'rgba(34,197,94,0.12)' : 'rgba(34,197,94,0.06)',
                                    border: '1px solid rgba(34,197,94,0.25)',
                                    color: '#22C55E',
                                    cursor: sending ? 'wait' : 'pointer',
                                }}>
                                {sending ? (
                                    <span className="w-4 h-4 rounded-full border-2 animate-spin"
                                        style={{ borderColor: 'rgba(34,197,94,0.20)', borderTopColor: '#22C55E' }} />
                                ) : sent ? (
                                    '✓ SIGNAL TRANSMITTED'
                                ) : (
                                    '⚡ TRANSMIT SIGNAL'
                                )}
                            </button>
                        </form>

                        <div className="font-mono text-[8px] mt-4" style={{ color: '#2D4636' }}>
                            {'>'} All transmissions are encrypted
                            <span className="inline-block w-1.5 h-2.5 ml-1"
                                style={{ background: '#22C55E', animation: 'typing-cursor 1s step-end infinite' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
