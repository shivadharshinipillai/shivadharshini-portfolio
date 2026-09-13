import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function createDrapeGeometry(segments) {
  const geometry = new THREE.PlaneGeometry(
    2.8,
    3.5,
    segments,
    segments
  )

  const position = geometry.attributes.position

  for (let i = 0; i < position.count; i += 1) {
    const x = position.getX(i)
    const y = position.getY(i)

    const wave =
      Math.sin(x * 1.7 + y * 0.65) * 0.24 +
      Math.sin(y * 2.2 - x * 0.45) * 0.17 +
      Math.sin((x + y) * 3.1) * 0.06

    position.setZ(i, wave)
  }

  geometry.computeVertexNormals()

  return geometry
}

export default function HeroObject({
  hoveredSection = null,
  isMobile = false,
  reducedMotion = false,
}) {
  const meshRef = useRef(null)
  const materialRef = useRef(null)

  const baseColor = useMemo(
    () => new THREE.Color('#d8cdbc'),
    []
  )

  const accentColor = useMemo(
    () => new THREE.Color('#9c6b4e'),
    []
  )

  const currentColor = useRef(baseColor.clone())

  const geometry = useMemo(
    () => createDrapeGeometry(isMobile ? 24 : 48),
    [isMobile]
  )

  useFrame((_, delta) => {
    if (!meshRef.current) return

    if (!reducedMotion) {
      meshRef.current.rotation.y += delta * 0.06
    }

    const targetTilt = hoveredSection
      ? THREE.MathUtils.clamp(
          hoveredSection.lookAt[0] * 0.12,
          -0.22,
          0.22
        )
      : 0

    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      targetTilt,
      1 - Math.pow(0.001, delta)
    )

    const targetColor = hoveredSection
      ? accentColor
      : baseColor

    currentColor.current.lerp(
      targetColor,
      1 - Math.pow(0.01, delta)
    )

    if (materialRef.current) {
      materialRef.current.color.copy(
        currentColor.current
      )
    }
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={[0, 1.65, -1.5]}
      rotation={[0.08, 0.35, 0]}
    >
      <meshStandardMaterial
        ref={materialRef}
        color={baseColor}
        roughness={0.82}
        metalness={0.02}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
