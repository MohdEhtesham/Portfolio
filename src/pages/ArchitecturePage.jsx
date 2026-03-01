import { useState } from 'react';

/* Architecture layers and connections */
const layers = [
    {
        id: 'mobile',
        label: 'MOBILE LAYER',
        color: '#22C55E',
        nodes: [
            { name: 'React Native', desc: 'Cross-platform mobile framework' },
            { name: 'Redux / Context', desc: 'State management architecture' },
            { name: 'Navigation', desc: 'React Navigation stack/tab/drawer' },
            { name: 'Native Modules', desc: 'Bridge to native Android/iOS code' },
        ],
    },
    {
        id: 'integration',
        label: 'INTEGRATION LAYER',
        color: '#4ADE80',
        nodes: [
            { name: 'Stripe SDK', desc: 'Payment gateway processing' },
            { name: 'BLE Protocol', desc: 'Bluetooth Low Energy IoT comm' },
            { name: 'Maps SDK', desc: 'Geolocation, markers, geofencing' },
            { name: 'Video SDK', desc: 'WebRTC-based real-time video' },
        ],
    },
    {
        id: 'cloud',
        label: 'CLOUD & SERVICES',
        color: '#86EFAC',
        nodes: [
            { name: 'Firebase', desc: 'Auth, Firestore, Cloud Functions' },
            { name: 'FCM', desc: 'Push notifications delivery' },
            { name: 'REST APIs', desc: 'HTTP client integration layer' },
            { name: 'Analytics', desc: 'Event tracking & performance' },
        ],
    },
    {
        id: 'devops',
        label: 'BUILD & DEPLOY',
        color: '#16A34A',
        nodes: [
            { name: 'Git / GitHub', desc: 'Version control & collaboration' },
            { name: 'CI/CD', desc: 'Automated build pipelines' },
            { name: 'App Store', desc: 'iOS App Store deployment' },
            { name: 'Play Store', desc: 'Android Play Store deployment' },
        ],
    },
];

const connections = [
    ['React Native', 'Redux / Context'],
    ['React Native', 'Navigation'],
    ['React Native', 'Native Modules'],
    ['React Native', 'Stripe SDK'],
    ['React Native', 'BLE Protocol'],
    ['React Native', 'Maps SDK'],
    ['React Native', 'Video SDK'],
    ['Firebase', 'FCM'],
    ['Firebase', 'REST APIs'],
    ['Git / GitHub', 'CI/CD'],
    ['CI/CD', 'App Store'],
    ['CI/CD', 'Play Store'],
];

export default function ArchitecturePage() {
    const [activeNode, setActiveNode] = useState(null);

    return (
        <div className="fade-up">
            <div className="page-header">
                <div className="page-label animate-boot boot-1">
                    <span>⊞ TECH ARCHITECTURE</span>
                    <div className="line" />
                </div>
                <h2 className="animate-boot boot-2">
                    System <span className="gradient-text">Architecture</span>
                </h2>
                <p className="animate-boot boot-3">
                    Interactive visualization of the engineering ecosystem — how technologies connect
                    across the full mobile development stack.
                </p>
            </div>

            {/* Architecture layers */}
            <div className="space-y-5">
                {layers.map((layer, li) => (
                    <div key={layer.id} className={`panel animate-boot boot-${li + 3}`}>
                        <div className="panel-header">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-5 rounded-full" style={{ background: layer.color }} />
                                <span className="panel-title" style={{ color: layer.color }}>{layer.label}</span>
                            </div>
                            <div className="panel-status">
                                <span className="dot" />
                                <span>{layer.nodes.length} MODULES</span>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {layer.nodes.map(node => {
                                    const isActive = activeNode === node.name;
                                    const isConnected = activeNode && connections.some(
                                        c => (c[0] === activeNode && c[1] === node.name) || (c[1] === activeNode && c[0] === node.name)
                                    );
                                    return (
                                        <div key={node.name}
                                            className="arch-node"
                                            onMouseEnter={() => setActiveNode(node.name)}
                                            onMouseLeave={() => setActiveNode(null)}
                                            style={{
                                                borderColor: isActive ? layer.color :
                                                    isConnected ? 'rgba(34,197,94,0.25)' : undefined,
                                                boxShadow: isActive ? `0 0 18px ${layer.color}20` :
                                                    isConnected ? '0 0 12px rgba(34,197,94,0.06)' : undefined,
                                            }}>
                                            {/* Connection indicator */}
                                            <span className="absolute top-2 right-2 w-[5px] h-[5px] rounded-full transition-all"
                                                style={{
                                                    background: isActive ? layer.color : isConnected ? '#4ADE80' : '#2D4636',
                                                    boxShadow: isActive || isConnected ? `0 0 4px ${layer.color}40` : 'none',
                                                }} />

                                            <span className="font-mono text-[11px] font-medium block"
                                                style={{ color: isActive ? layer.color : '#E6F4EA' }}>
                                                {node.name}
                                            </span>
                                            <span className="font-mono text-[9px] block mt-1" style={{ color: '#4A6B55' }}>
                                                {node.desc}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Connection legend */}
            <div className="mt-6 panel animate-boot boot-8">
                <div className="panel-header">
                    <span className="panel-title">Connection Map</span>
                    <div className="panel-status"><span className="dot" /><span>{connections.length} LINKS</span></div>
                </div>
                <div className="panel-body">
                    <p className="font-mono text-[10px] mb-3" style={{ color: '#4A6B55' }}>
                        Hover any node to highlight its connections across the architecture stack.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {connections.map((c, i) => (
                            <span key={i} className="font-mono text-[8px] px-2 py-1 rounded"
                                style={{
                                    color: (activeNode === c[0] || activeNode === c[1]) ? '#22C55E' : '#4A6B55',
                                    background: (activeNode === c[0] || activeNode === c[1]) ? 'rgba(34,197,94,0.08)' : 'rgba(34,197,94,0.02)',
                                    border: '1px solid rgba(34,197,94,0.08)',
                                }}>
                                {c[0]} → {c[1]}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
