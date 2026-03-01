import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ---- Slow-moving circuit particles ---- */
function CircuitParticles({ count = 200 }) {
    const ref = useRef();
    const { positions, colors } = useMemo(() => {
        const p = new Float32Array(count * 3);
        const c = new Float32Array(count * 3);
        const palette = [new THREE.Color('#22C55E'), new THREE.Color('#16A34A'), new THREE.Color('#4ADE80')];
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 40;
            p[i * 3 + 1] = (Math.random() - 0.5) * 40;
            p[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
            const col = palette[Math.floor(Math.random() * palette.length)];
            c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b;
        }
        return { positions: p, colors: c };
    }, [count]);

    useFrame(({ clock }) => {
        if (!ref.current) return;
        ref.current.rotation.y = clock.elapsedTime * 0.008;
        ref.current.rotation.x = clock.elapsedTime * 0.005;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.035} vertexColors transparent opacity={0.40} sizeAttenuation
                blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

/* ---- Network connection lines ---- */
function NetworkLines() {
    const ref = useRef();
    const geo = useMemo(() => {
        const pts = [];
        for (let i = 0; i < 24; i++) {
            const a = new THREE.Vector3((Math.random() - 0.5) * 18, (Math.random() - 0.5) * 18, (Math.random() - 0.5) * 8 - 4);
            const b = new THREE.Vector3(a.x + (Math.random() - 0.5) * 6, a.y + (Math.random() - 0.5) * 6, a.z + (Math.random() - 0.5) * 3);
            pts.push(a, b);
        }
        return new THREE.BufferGeometry().setFromPoints(pts);
    }, []);

    useFrame(({ clock }) => {
        if (ref.current) ref.current.rotation.z = clock.elapsedTime * 0.003;
    });

    return (
        <lineSegments ref={ref} geometry={geo}>
            <lineBasicMaterial color="#22C55E" transparent opacity={0.04} />
        </lineSegments>
    );
}

export default function NetworkBackground() {
    return (
        <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 55 }}
                dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}
                style={{ background: 'transparent' }}>
                <CircuitParticles count={180} />
                <NetworkLines />
            </Canvas>
        </div>
    );
}
