import { useState } from 'react';

/* Architecture layers and connections */
const layers = [
    {
        id: 'mobile',
        label: 'MOBILE LAYER',
        color: '#22C55E',
        nodes: [
            { name: 'React Native CLI', desc: 'One codebase for Android & iOS' },
            { name: 'Redux Toolkit', desc: 'Async workflows & complex data flows' },
            { name: 'React Navigation', desc: 'Stack / tab flows & deep linking' },
            { name: 'AsyncStorage', desc: 'Offline-friendly persistence' },
        ],
    },
    {
        id: 'integration',
        label: 'NATIVE & INTEGRATIONS',
        color: '#4ADE80',
        nodes: [
            { name: 'BLE', desc: 'Encrypted IoT device pairing' },
            { name: 'Camera', desc: 'Scan-to-solve doubt capture' },
            { name: 'Maps', desc: 'Google Maps SDK & HERE Maps' },
            { name: 'Payments', desc: 'Stripe Payment Intent & IAP' },
        ],
    },
    {
        id: 'cloud',
        label: 'CLOUD & SERVICES',
        color: '#86EFAC',
        nodes: [
            { name: 'REST APIs', desc: 'JWT auth, token refresh, pagination' },
            { name: 'Firebase', desc: 'Auth, Firestore & Crashlytics' },
            { name: 'FCM', desc: 'Push in every app state' },
            { name: 'Video Streaming', desc: 'Live classes & recorded lectures' },
        ],
    },
    {
        id: 'devops',
        label: 'BUILD & DEPLOY',
        color: '#16A34A',
        nodes: [
            { name: 'Xcode / Gradle', desc: 'Native iOS & Android builds' },
            { name: 'Fastlane', desc: 'Automated signing & releases' },
            { name: 'CI Pipelines', desc: 'GitHub Actions, Bitrise, App Center' },
            { name: 'Store Releases', desc: 'Play Store & App Store' },
        ],
    },
];

const connections = [
    ['React Native CLI', 'Redux Toolkit'],
    ['React Native CLI', 'React Navigation'],
    ['Redux Toolkit', 'AsyncStorage'],
    ['React Native CLI', 'BLE'],
    ['React Native CLI', 'Camera'],
    ['React Native CLI', 'Maps'],
    ['React Native CLI', 'Payments'],
    ['Redux Toolkit', 'REST APIs'],
    ['Firebase', 'FCM'],
    ['React Navigation', 'FCM'],
    ['React Native CLI', 'Video Streaming'],
    ['Xcode / Gradle', 'Fastlane'],
    ['Fastlane', 'CI Pipelines'],
    ['CI Pipelines', 'Store Releases'],
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
                                            tabIndex={0}
                                            onMouseEnter={() => setActiveNode(node.name)}
                                            onMouseLeave={() => setActiveNode(null)}
                                            onFocus={() => setActiveNode(node.name)}
                                            onBlur={() => setActiveNode(null)}
                                            style={{
                                                borderColor: isActive ? layer.color :
                                                    isConnected ? 'rgba(34,197,94,0.25)' : undefined,
                                                boxShadow: isActive ? `0 0 18px ${layer.color}20` :
                                                    isConnected ? '0 0 12px rgba(34,197,94,0.06)' : undefined,
                                            }}>
                                            {/* Connection indicator */}
                                            <span className="absolute top-2 right-2 w-[5px] h-[5px] rounded-full transition-all"
                                                style={{
                                                    background: isActive ? layer.color : isConnected ? '#4ADE80' : '#4A6B55',
                                                    boxShadow: isActive || isConnected ? `0 0 4px ${layer.color}40` : 'none',
                                                }} />

                                            <span className="font-mono text-[12px] font-medium block"
                                                style={{ color: isActive ? layer.color : '#E6F4EA' }}>
                                                {node.name}
                                            </span>
                                            <span className="font-mono text-[10px] block mt-1 leading-snug" style={{ color: '#6B8F79' }}>
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
                    <p className="font-mono text-[11px] mb-3" style={{ color: '#6B8F79' }}>
                        Hover or tap any node to highlight its connections across the architecture stack.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {connections.map((c, i) => (
                            <span key={i} className="font-mono text-[10px] px-2 py-1 rounded"
                                style={{
                                    color: (activeNode === c[0] || activeNode === c[1]) ? '#22C55E' : '#6B8F79',
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
