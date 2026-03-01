import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function SignalPanel() {
    const [form, setForm] = useState({ name: '', email: '', msg: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSent(true);
            setForm({ name: '', email: '', msg: '' });
            setTimeout(() => setSent(false), 4000);
        }, 1200);
    };

    return (
        <div className="space-y-3">
            {/* Terminal header */}
            <div className="font-mono text-[9px] flex items-center gap-2" style={{ color: '#2D4636' }}>
                <span style={{ color: '#22C55E' }}>{'>'}</span>
                SIGNAL TERMINAL — OPEN CHANNEL
            </div>

            {/* Contact links */}
            <div className="flex gap-2 flex-wrap">
                {[
                    { label: 'EMAIL', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { label: 'GITHUB', value: 'github', href: personalInfo.github },
                    { label: 'LINKEDIN', value: 'linkedin', href: personalInfo.linkedin },
                ].map(c => (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                        className="module-tile flex items-center gap-2 no-underline" style={{ padding: '6px 10px' }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22C55E' }} />
                        <span className="font-mono text-[8px] tracking-wider" style={{ color: '#4A6B55' }}>{c.label}</span>
                    </a>
                ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <div className="flex gap-2 mb-2">
                    <input type="text" placeholder="identity.name" required value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="terminal-input flex-1" />
                    <input type="email" placeholder="signal.address" required value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="terminal-input flex-1" />
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="> transmit message..." required value={form.msg}
                        onChange={e => setForm({ ...form, msg: e.target.value })}
                        className="terminal-input flex-1" />
                    <button type="submit" disabled={sending}
                        className="px-4 rounded font-mono text-[10px] tracking-wider transition-all duration-300"
                        style={{
                            background: sent ? 'rgba(34,197,94,0.12)' : 'rgba(34,197,94,0.08)',
                            border: '1px solid rgba(34,197,94,0.25)',
                            color: '#22C55E',
                            cursor: sending ? 'wait' : 'pointer',
                        }}>
                        {sending ? '...' : sent ? '✓ SENT' : 'TRANSMIT'}
                    </button>
                </div>
            </form>
        </div>
    );
}
