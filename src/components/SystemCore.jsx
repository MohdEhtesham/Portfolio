import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/* ---- Rotating wireframe core ---- */
function CoreGeometry() {
    const icoRef = useRef();
    const ringRef = useRef();
    const shellRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.elapsedTime;
        if (icoRef.current) {
            icoRef.current.rotation.y = t * 0.35;
            icoRef.current.rotation.x = t * 0.18;
            const s = 1 + Math.sin(t * 1.2) * 0.04;
            icoRef.current.scale.setScalar(s);
        }
        if (ringRef.current) ringRef.current.rotation.z = t * 0.22;
        if (shellRef.current) {
            shellRef.current.rotation.y = -t * 0.12;
            shellRef.current.rotation.x = t * 0.08;
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.35}>
            <group>
                {/* Inner icosahedron wireframe */}
                <mesh ref={icoRef}>
                    <icosahedronGeometry args={[0.65, 1]} />
                    <meshPhysicalMaterial color="#22C55E" emissive="#22C55E" emissiveIntensity={0.30}
                        wireframe transparent opacity={0.60} metalness={0.8} roughness={0.15} />
                </mesh>

                {/* Core glow sphere */}
                <mesh>
                    <sphereGeometry args={[0.30, 16, 16]} />
                    <meshBasicMaterial color="#22C55E" transparent opacity={0.12} />
                </mesh>

                {/* Outer orbit ring */}
                <mesh ref={ringRef}>
                    <torusGeometry args={[1.1, 0.008, 8, 64]} />
                    <meshBasicMaterial color="#22C55E" transparent opacity={0.25} />
                </mesh>

                {/* Second ring tilted */}
                <mesh rotation={[Math.PI / 3, 0, 0]}>
                    <torusGeometry args={[1.3, 0.006, 8, 64]} />
                    <meshBasicMaterial color="#4ADE80" transparent opacity={0.12} />
                </mesh>

                {/* Outer shell octahedron */}
                <mesh ref={shellRef}>
                    <octahedronGeometry args={[1.6, 0]} />
                    <meshBasicMaterial color="#86EFAC" wireframe transparent opacity={0.06} />
                </mesh>

                {/* Orbiting data nodes */}
                {[0, 1, 2, 3, 4, 5].map(i => {
                    const a = (i / 6) * Math.PI * 2;
                    return (
                        <mesh key={i} position={[Math.cos(a) * 1.1, Math.sin(a) * 1.1, 0]}>
                            <sphereGeometry args={[0.04, 8, 8]} />
                            <meshBasicMaterial color="#22C55E" transparent opacity={0.65} />
                        </mesh>
                    );
                })}
            </group>
        </Float>
    );
}

export default function SystemCore({ name, role }) {
    return (
        <div className="w-full h-full relative flex flex-col items-center justify-center">
            {/* 3D core */}
            <div className="w-full flex-1 min-h-0">
                <Canvas camera={{ position: [0, 0, 4], fov: 42 }}
                    dpr={[1, 2]} gl={{ antialias: true, alpha: true }}
                    style={{ background: 'transparent' }}>
                    <ambientLight intensity={0.25} />
                    <pointLight position={[3, 3, 4]} intensity={0.50} color="#22C55E" />
                    <pointLight position={[-3, -2, 3]} intensity={0.25} color="#86EFAC" />
                    <CoreGeometry />
                </Canvas>
            </div>

            {/* Identity overlay */}
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <h1 className="font-display text-2xl sm:text-3xl font-bold gradient-text leading-tight">
                    {name}
                </h1>
                <p className="font-mono text-[10px] tracking-[3px] uppercase mt-1"
                    style={{ color: '#4ADE80' }}>
                    {role}
                </p>
            </div>
        </div>
    );
}
