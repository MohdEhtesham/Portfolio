import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ---------- Green particle cloud ---------- */
function GreenParticles({ count = 420 }) {
    const mesh = useRef();

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const palette = [
            new THREE.Color('#22C55E'),
            new THREE.Color('#4ADE80'),
            new THREE.Color('#86EFAC'),
            new THREE.Color('#16A34A'),
        ];

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 32;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 32;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 32;

            const c = palette[Math.floor(Math.random() * palette.length)];
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }
        return { positions, colors };
    }, [count]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!mesh.current) return;
        // Very slow organic drift
        mesh.current.rotation.x = t * 0.012;
        mesh.current.rotation.y = t * 0.018;
        const pos = mesh.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            pos[i * 3 + 1] += Math.sin(t * 0.4 + i * 0.15) * 0.0015;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial
                size={0.045}
                vertexColors
                transparent
                opacity={0.55}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

/* ---------- Soft floating orbs ---------- */
function FloatingOrbs() {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!group.current) return;
        group.current.children.forEach((orb, i) => {
            orb.position.y = orb.userData.baseY + Math.sin(t * 0.45 + i * 1.8) * 1.8;
            orb.position.x = orb.userData.baseX + Math.cos(t * 0.28 + i * 1.2) * 1.4;
        });
    });

    const orbs = [
        { base: [4, 2, -6], scale: 0.55, color: '#22C55E' },
        { base: [-3, -1, -9], scale: 0.70, color: '#16A34A' },
        { base: [5, -3, -11], scale: 0.38, color: '#4ADE80' },
        { base: [-5, 3, -7], scale: 0.50, color: '#86EFAC' },
    ];

    return (
        <group ref={group}>
            {orbs.map((o, i) => (
                <mesh
                    key={i}
                    position={o.base}
                    scale={o.scale}
                    userData={{ baseX: o.base[0], baseY: o.base[1] }}
                >
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshBasicMaterial color={o.color} transparent opacity={0.07} />
                </mesh>
            ))}
        </group>
    );
}

/* ---------- Subtle holographic grid plane ---------- */
function HoloGrid() {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) ref.current.material.opacity = 0.04 + Math.sin(state.clock.elapsedTime * 0.5) * 0.015;
    });
    return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]}>
            <planeGeometry args={[40, 40, 20, 20]} />
            <meshBasicMaterial color="#22C55E" wireframe transparent opacity={0.04} />
        </mesh>
    );
}

export default function ParticleBackground() {
    return (
        <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <GreenParticles count={380} />
                <FloatingOrbs />
                <HoloGrid />
            </Canvas>
        </div>
    );
}
