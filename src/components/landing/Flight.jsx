import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const CLOUD_TARGETS = {
  about: [-3.8, 2.2, -0.8],
  work: [-1.7, 0.4, -1.4],
  skills: [0.2, 2.65, -1.8],
  experience: [2.35, 0.55, -1.5],
  learning: [4.0, 2.35, -0.7],
  contact: [3.0, -1.0, -0.8],
}

const START_POSITION = new THREE.Vector3(-4.8, 2.9, 1.8)

export default function Flight({
  selectedId = null,
  transitioning = false,
  reducedMotion = false,
}) {
  const groupRef = useRef(null)
  const position = useRef(START_POSITION.clone())
  const previousPosition = useRef(START_POSITION.clone())

  const target = useMemo(
    () => new THREE.Vector3(),
    []
  )

  useFrame((_, delta) => {
    if (!groupRef.current) return

    if (transitioning && selectedId) {
      const destination = CLOUD_TARGETS[selectedId]

      target.set(
        destination[0],
        destination[1],
        destination[2]
      )

      position.current.lerp(
        target,
        1 - Math.pow(0.0015, delta)
      )
    } else if (!reducedMotion) {
      const time = performance.now() * 0.00035

      position.current.x =
        -4.8 + Math.sin(time) * 0.45

      position.current.y =
        2.9 + Math.sin(time * 1.35) * 0.18

      position.current.z =
        1.8 + Math.cos(time) * 0.12
    }

    groupRef.current.position.copy(position.current)

    const movement = position.current
      .clone()
      .sub(previousPosition.current)

    if (movement.lengthSq() > 0.000001) {
      const angle = Math.atan2(
        movement.y,
        movement.x
      )

      groupRef.current.rotation.z =
        THREE.MathUtils.lerp(
          groupRef.current.rotation.z,
          angle * 0.16,
          0.12
        )
    }

    previousPosition.current.copy(position.current)
  })

  return (
    <group
      ref={groupRef}
      scale={1.35}
      rotation={[0, 0, -0.08]}
    >
      {/* fuselage */}
      <mesh rotation={[0, 0, -Math.PI / 2]}>
        <capsuleGeometry args={[0.09, 0.58, 6, 12]} />
        <meshStandardMaterial
          color="#2c2b29"
          roughness={0.3}
          metalness={0.55}
        />
      </mesh>

      {/* main wings */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.85, 0.035]} />
        <meshStandardMaterial
          color="#383633"
          roughness={0.32}
          metalness={0.5}
        />
      </mesh>

      {/* tail wings */}
      <mesh position={[0.25, 0, 0.04]}>
        <boxGeometry args={[0.08, 0.38, 0.03]} />
        <meshStandardMaterial
          color="#383633"
          roughness={0.32}
          metalness={0.5}
        />
      </mesh>

      {/* tail fin */}
      <mesh
        position={[0.25, 0, 0.1]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <boxGeometry args={[0.18, 0.035, 0.12]} />
        <meshStandardMaterial
          color="#383633"
          roughness={0.32}
          metalness={0.5}
        />
      </mesh>

      {/* soft navigation light */}
      <pointLight
        intensity={0.5}
        distance={2.5}
        color="#fff4dc"
      />
    </group>
  )
}
