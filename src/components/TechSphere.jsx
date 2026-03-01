import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { techStackIcons } from '../data/portfolioData';

/* ---------- Single orbiting tech node ---------- */
function TechNode({ position, name, color, index }) {
    const ref = useRef();
    const basePos = useRef(position);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!ref.current) return;
        ref.current.position.x = basePos.current[0] + Math.sin(t * 0.45 + index) * 0.28;
        ref.current.position.y = basePos.current[1] + Math.cos(t * 0.38 + index * 0.7) * 0.28;
        ref.current.position.z = basePos.current[2] + Math.sin(t * 0.30 + index * 0.5) * 0.18;
    });

    return (
        <Float speed={1.4} rotationIntensity={0} floatIntensity={0.25}>
            <group ref={ref} position={position}>
                {/* Outer halo */}
                <mesh>
                    <sphereGeometry args={[0.30, 16, 16]} />
                    <meshBasicMaterial color={color} transparent opacity={0.07} />
                </mesh>
                {/* Core sphere */}
                <mesh>
                    <sphereGeometry args={[0.13, 16, 16]} />
                    <meshPhysicalMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.45}
                        metalness={0.4}
                        roughness={0.55}
                        transparent opacity={0.85}
                    />
                </mesh>
                {/* Label */}
                <Text
                    position={[0, -0.40, 0]}
                    fontSize={0.11}
                    color={color}
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2"
                >
                    {name}
                </Text>
            </group>
        </Float>
    );
}

/* ---------- Elliptical orbit rings ---------- */
function OrbitRing({ radius, tilt = 0, color, speed = 1, opacity = 0.06 }) {
    const ref = useRef();
    const pts = useMemo(() => {
        const arr = [];
        for (let i = 0; i <= 80; i++) {
            const a = (i / 80) * Math.PI * 2;
            arr.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius * 0.55, 0));
        }
        return arr;
    }, [radius]);
    const geo = useMemo(() => new THREE.BufferGeometry().setFromPoints(pts), [pts]);

    useFrame((state) => {
        if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * speed * 0.08;
    });

    return (
        <line ref={ref} geometry={geo} rotation={[tilt, 0, 0]}>
            <lineBasicMaterial color={color} transparent opacity={opacity} />
        </line>
    );
}

/* ---------- Glowing icosahedron core ---------- */
function CoreNode() {
    const ref = useRef();
    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (!ref.current) return;
        ref.current.rotation.y = t * 0.42;
        ref.current.rotation.x = t * 0.28;
        const s = 1 + Math.sin(t * 1.8) * 0.06;
        ref.current.scale.setScalar(s);
    });
    return (
        <group ref={ref}>
            <mesh>
                <icosahedronGeometry args={[0.38, 1]} />
                <meshPhysicalMaterial
                    color="#22C55E"
                    emissive="#22C55E"
                    emissiveIntensity={0.28}
                    metalness={0.9}
                    roughness={0.12}
                    wireframe
                    transparent
                    opacity={0.55}
                />
            </mesh>
            <mesh>
                <sphereGeometry args={[0.20, 16, 16]} />
                <meshBasicMaterial color="#22C55E" transparent opacity={0.09} />
            </mesh>
        </group>
    );
}

export default function TechSphere() {
    const nodePositions = useMemo(() => {
        return techStackIcons.map((_, i) => {
            const phi = Math.acos(-1 + (2 * i) / techStackIcons.length);
            const theta = Math.sqrt(techStackIcons.length * Math.PI) * phi;
            const r = 2.45;
            return [
                r * Math.cos(theta) * Math.sin(phi),
                r * Math.sin(theta) * Math.sin(phi),
                r * Math.cos(phi),
            ];
        });
    }, []);

    return (
        <div className="w-full" style={{ height: '500px' }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.35} />
                <pointLight position={[5, 5, 5]} intensity={0.45} color="#22C55E" />
                <pointLight position={[-5, -5, 5]} intensity={0.25} color="#86EFAC" />

                <CoreNode />

                <OrbitRing radius={1.5} tilt={0} color="#22C55E" speed={1.0} opacity={0.09} />
                <OrbitRing radius={2.2} tilt={Math.PI / 5} color="#4ADE80" speed={-0.7} opacity={0.06} />
                <OrbitRing radius={3.0} tilt={Math.PI / 3} color="#86EFAC" speed={0.5} opacity={0.04} />

                {techStackIcons.map((tech, i) => (
                    <TechNode
                        key={tech.name}
                        position={nodePositions[i]}
                        name={tech.name}
                        color={tech.color}
                        index={i}
                    />
                ))}
            </Canvas>
        </div>
    );
}
