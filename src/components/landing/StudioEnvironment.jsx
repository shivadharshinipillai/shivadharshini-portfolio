export default function StudioEnvironment() {
  return (
    <group>
      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[18, 18]} />
        <meshStandardMaterial
          color="#e7e0d3"
          roughness={0.95}
          metalness={0}
        />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3.5, -5]}>
        <planeGeometry args={[18, 9]} />
        <meshStandardMaterial
          color="#e2dbcd"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Soft window light */}
      <mesh position={[3.8, 3, -4.85]}>
        <planeGeometry args={[2.4, 4.5]} />
        <meshBasicMaterial
          color="#fff4e2"
          transparent
          opacity={0.32}
        />
      </mesh>

      {/* Architectural plinth */}
      <mesh position={[-3, 0.45, -1]}>
        <boxGeometry args={[1.4, 0.9, 1.4]} />
        <meshStandardMaterial
          color="#d5ccbc"
          roughness={0.88}
          metalness={0}
        />
      </mesh>

      {/* Second architectural plane */}
      <mesh
        position={[4.2, 1.8, -2.8]}
        rotation={[0, -0.18, 0]}
      >
        <boxGeometry args={[0.12, 3.6, 2.2]} />
        <meshStandardMaterial
          color="#dcd3c4"
          roughness={0.92}
          metalness={0}
        />
      </mesh>
    </group>
  )
}
