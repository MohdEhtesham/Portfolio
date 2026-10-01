import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const channels = [
    { label: 'EMAIL', href: `mailto:${personalInfo.email}`, val: personalInfo.email },
    { label: 'PHONE', href: `tel:${personalInfo.phone.replace(/\s/g, '')}`, val: personalInfo.phone },
    { label: 'LINKEDIN', href: personalInfo.linkedin, val: 'linkedin.com/in/mohd-ehtesham-11482021b', external: true },
    { label: 'GITHUB', href: personalInfo.github, val: 'github.com/MohdEhtesham', external: true },
    { label: 'RESUME', href: personalInfo.resumeUrl, val: 'Mohd_Ehtesham_Resume.pdf', external: true },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', msg: '' });
    const [sent, setSent] = useState(false);
    const [copied, setCopied] = useState(false);

    // No backend on GitHub Pages — hand the message to the visitor's email app.
    const handleSubmit = e => {
        e.preventDefault();
        const subject = `Portfolio enquiry from ${form.name}`;
        const body = `${form.msg}\n\n— ${form.name}\n${form.email}`;
        window.location.href =
            `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            window.location.href = `mailto:${personalInfo.email}`;
        }
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
                    Hiring for a React Native role or building a mobile app? Let's talk.
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
                            {channels.map(c => (
                                <a key={c.label} href={c.href}
                                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="module-tile flex items-center gap-3 no-underline group">
                                    <span className="w-2 h-2 rounded-full shrink-0 transition-all group-hover:scale-125"
                                        style={{ background: '#22C55E', boxShadow: '0 0 4px rgba(34,197,94,0.30)' }} />
                                    <div className="min-w-0">
                                        <span className="font-mono text-[10px] tracking-wider block" style={{ color: '#6B8F79' }}>
                                            {c.label}
                                        </span>
                                        <span className="font-mono text-[12px] transition-colors group-hover:text-green-400 break-all"
                                            style={{ color: '#B5D3BF' }}>
                                            {c.val}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panel-header"><span className="panel-title">Location</span></div>
                        <div className="panel-body">
                            <span className="font-mono text-[12px]" style={{ color: '#8FB89E' }}>{personalInfo.location}</span>
                        </div>
                    </div>
                </div>

                {/* Right — terminal form */}
                <div className="panel animate-boot boot-4">
                    <div className="panel-header">
                        <span className="panel-title">Transmit Message</span>
                        <div className="panel-status">
                            <span className="dot" />
                            <span>{sent ? 'HANDED TO MAIL APP' : 'AWAITING INPUT'}</span>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="font-mono text-[11px] mb-4 flex items-center gap-2" style={{ color: '#6B8F79' }}>
                            <span style={{ color: '#22C55E' }}>{'>'}</span> ENTER TRANSMISSION DATA
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label htmlFor="contact-name" className="font-mono text-[10px] tracking-wider block mb-1.5" style={{ color: '#6B8F79' }}>
                                    IDENTITY.NAME
                                </label>
                                <input id="contact-name" type="text" required value={form.name} autoComplete="name"
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    placeholder="Your name" className="terminal-input" />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="font-mono text-[10px] tracking-wider block mb-1.5" style={{ color: '#6B8F79' }}>
                                    SIGNAL.ADDRESS
                                </label>
                                <input id="contact-email" type="email" required value={form.email} autoComplete="email"
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    placeholder="your@email.com" className="terminal-input" />
                            </div>

                            <div>
                                <label htmlFor="contact-msg" className="font-mono text-[10px] tracking-wider block mb-1.5" style={{ color: '#6B8F79' }}>
                                    MESSAGE.PAYLOAD
                                </label>
                                <textarea id="contact-msg" rows={5} required value={form.msg}
                                    onChange={e => setForm({ ...form, msg: e.target.value })}
                                    placeholder="Tell me about the role or project…"
                                    className="terminal-input" style={{ resize: 'none' }} />
                            </div>

                            <button type="submit"
                                className="w-full py-3 rounded-lg font-mono text-[12px] tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:bg-green-500/15"
                                style={{
                                    background: 'rgba(34,197,94,0.08)',
                                    border: '1px solid rgba(34,197,94,0.30)',
                                    color: '#22C55E',
                                }}>
                                ⚡ SEND VIA EMAIL
                            </button>
                        </form>

                        <div className="font-mono text-[11px] mt-4 leading-relaxed" style={{ color: '#6B8F79' }} aria-live="polite">
                            {sent ? (
                                <span style={{ color: '#8FB89E' }}>
                                    ✓ Your email app should open with the message ready — just hit send.
                                    Nothing opened? Write to <a href={`mailto:${personalInfo.email}`} style={{ color: '#22C55E' }}>{personalInfo.email}</a>.
                                </span>
                            ) : (
                                <span>{'>'} Opens your email app with the message pre-filled.</span>
                            )}
                        </div>

                        <button type="button" onClick={copyEmail}
                            className="mt-3 font-mono text-[11px] underline underline-offset-4 cursor-pointer"
                            style={{ color: copied ? '#22C55E' : '#8FB89E' }}>
                            {copied ? '✓ Email copied' : 'Copy email address'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
