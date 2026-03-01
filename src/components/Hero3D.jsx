import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ---------- Emerald glass smartphone ---------- */
function EmeraldPhone() {
    const phoneRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!phoneRef.current) return;
        phoneRef.current.rotation.y = Math.sin(t * 0.28) * 0.30 + 0.15;
        phoneRef.current.rotation.x = Math.sin(t * 0.18) * 0.08 - 0.08;
        phoneRef.current.rotation.z = Math.sin(t * 0.38) * 0.04;
    });

    // App icon positions & green shades
    const appIcons = [
        [-0.44, -0.48, '#22C55E'], [0, -0.48, '#4ADE80'], [0.44, -0.48, '#86EFAC'],
        [-0.44, -0.98, '#16A34A'], [0, -0.98, '#22C55E'], [0.44, -0.98, '#4ADE80'],
    ];

    return (
        <Float speed={1.8} rotationIntensity={0.18} floatIntensity={0.75}>
            <group ref={phoneRef} scale={1.15}>

                {/* Body — dark green-tinted glass */}
                <RoundedBox args={[2, 3.8, 0.15]} radius={0.15} smoothness={4}>
                    <meshPhysicalMaterial
                        color="#0D1F15"
                        metalness={0.75}
                        roughness={0.18}
                        clearcoat={1}
                        clearcoatRoughness={0.08}
                        envMapIntensity={0.6}
                    />
                </RoundedBox>

                {/* Edge glow rim — green */}
                <RoundedBox args={[2.04, 3.84, 0.10]} radius={0.16} smoothness={4}>
                    <meshBasicMaterial color="#22C55E" transparent opacity={0.06} side={THREE.BackSide} />
                </RoundedBox>

                {/* Screen */}
                <RoundedBox args={[1.75, 3.50, 0.01]} radius={0.10} smoothness={4} position={[0, 0, 0.08]}>
                    <meshBasicMaterial color="#0B1410" />
                </RoundedBox>

                {/* Status bar */}
                <RoundedBox args={[1.40, 0.06, 0.005]} radius={0.03} position={[0, 1.60, 0.09]}>
                    <meshBasicMaterial color="#22C55E" transparent opacity={0.20} />
                </RoundedBox>

                {/* Green UI bars on screen */}
                <RoundedBox args={[1.35, 0.38, 0.005]} radius={0.07} position={[0, 1.18, 0.09]}>
                    <meshBasicMaterial color="#22C55E" transparent opacity={0.22} />
                </RoundedBox>
                <RoundedBox args={[1.35, 0.28, 0.005]} radius={0.06} position={[0, 0.62, 0.09]}>
                    <meshBasicMaterial color="#4ADE80" transparent opacity={0.15} />
                </RoundedBox>
                <RoundedBox args={[1.35, 0.28, 0.005]} radius={0.06} position={[0, 0.14, 0.09]}>
                    <meshBasicMaterial color="#86EFAC" transparent opacity={0.12} />
                </RoundedBox>

                {/* App icon grid */}
                {appIcons.map(([x, y, color], i) => (
                    <RoundedBox key={i} args={[0.30, 0.30, 0.005]} radius={0.06} position={[x, y, 0.09]}>
                        <meshBasicMaterial color={color} transparent opacity={0.35} />
                    </RoundedBox>
                ))}

                {/* Camera notch */}
                <mesh position={[0, 1.63, 0.09]}>
                    <circleGeometry args={[0.055, 16]} />
                    <meshBasicMaterial color="#0B1410" />
                </mesh>

                {/* Power button */}
                <mesh position={[1.03, 0.48, 0]}>
                    <boxGeometry args={[0.04, 0.28, 0.07]} />
                    <meshPhysicalMaterial color="#0D2018" metalness={0.9} roughness={0.25} />
                </mesh>
            </group>
        </Float>
    );
}

/* ---------- Soft green glow orbs ---------- */
function GlowOrb({ position, color, scale = 1 }) {
    const ref = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ref.current) ref.current.scale.setScalar(scale + Math.sin(t * 1.8) * 0.08);
    });
    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[0.55, 16, 16]} />
            <MeshDistortMaterial color={color} transparent opacity={0.12} distort={0.35} speed={2.5} />
        </mesh>
    );
}

export default function Hero3D() {
    return (
        <div className="w-full h-full" style={{ minHeight: '400px' }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                {/* Soft green lighting */}
                <ambientLight intensity={0.30} />
                <directionalLight position={[4, 5, 4]} intensity={0.55} color="#22C55E" />
                <directionalLight position={[-4, -3, 3]} intensity={0.22} color="#86EFAC" />
                <pointLight position={[0, 0, 4]} intensity={0.45} color="#4ADE80" />

                <EmeraldPhone />

                <GlowOrb position={[-3.2, 2.2, -2.5]} color="#22C55E" scale={0.75} />
                <GlowOrb position={[3.0, -2.0, -3.5]} color="#16A34A" scale={0.55} />
                <GlowOrb position={[2.0, 2.8, -4.5]} color="#86EFAC" scale={0.45} />
            </Canvas>
        </div>
    );
}
