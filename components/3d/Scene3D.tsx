"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Torus, Box, Sphere, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

/* ---- Animated ring ---- */
function Ring({ position, scale, speed, color }: { position: [number,number,number]; scale: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.7;
      ref.current.rotation.y += delta * speed;
    }
  });
  return (
    <Torus ref={ref} position={position} scale={scale} args={[1, 0.04, 16, 80]}>
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
    </Torus>
  );
}

/* ---- Floating cube ---- */
function FloatingCube({ position, size, speed }: { position: [number,number,number]; size: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * speed;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.3;
    }
  });
  return (
    <Box ref={ref} position={position} args={[size, size, size]}>
      <meshStandardMaterial color="#C9A84C" metalness={0.8} roughness={0.15} wireframe />
    </Box>
  );
}

/* ---- Gold orb ---- */
function GoldOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });
  return (
    <Sphere ref={ref} args={[1.2, 64, 64]}>
      <meshStandardMaterial
        color="#C9A84C"
        metalness={1}
        roughness={0.05}
        envMapIntensity={2}
      />
    </Sphere>
  );
}

/* ---- Scene ---- */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#E8C97A" />
      <directionalLight position={[-5, -2, -5]} intensity={0.4} color="#ffffff" />
      <pointLight position={[0, 4, 0]} intensity={2} color="#C9A84C" distance={10} />

      {/* Center gold orb */}
      <GoldOrb />

      {/* Rings */}
      <Ring position={[0, 0, 0]} scale={2.2} speed={0.4} color="#C9A84C" />
      <Ring position={[0, 0, 0]} scale={3.0} speed={-0.25} color="#A07A2E" />
      <Ring position={[0, 0, 0]} scale={3.9} speed={0.15} color="#E8C97A" />

      {/* Floating cubes */}
      <FloatingCube position={[-3.5, 1, -1]} size={0.3} speed={0.8} />
      <FloatingCube position={[3.5, -1, -1]} size={0.25} speed={1.1} />
      <FloatingCube position={[-2, -2, 1]} size={0.2} speed={0.6} />
      <FloatingCube position={[2.5, 2, 0.5]} size={0.35} speed={0.9} />
      <FloatingCube position={[0, 3, -2]} size={0.18} speed={1.3} />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </>
  );
}

export default function Scene3D() {
  return (
    <section
      style={{
        background: "var(--dark)",
        padding: "100px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Text */}
        <FadeIn direction="left">
          <SectionLabel>Experience</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 24,
              color: "#F5F0E8",
            }}
          >
            The Art of{" "}
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>
              Perfection
            </em>
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.55)",
              marginBottom: 40,
              maxWidth: 460,
            }}
          >
            Every detail matters. From the first consultation to the final touch,
            we obsess over precision. Our barbers don&apos;t just cut hair — they craft
            an experience tailored to you.
          </p>

          {/* Feature list */}
          {[
            "Consultation-led approach",
            "Premium product selection",
            "Hygienic & sterile tools",
            "Post-service grooming advice",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid #C9A84C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  color: "#C9A84C",
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: "rgba(245,240,232,0.7)",
                  fontFamily: "var(--font-barlow)",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </FadeIn>

        {/* 3D Canvas */}
        <FadeIn direction="right">
          <div
            style={{
              height: 500,
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.12)",
              background: "rgba(201,168,76,0.02)",
            }}
          >
            <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
