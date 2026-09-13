import { Cloud, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const CLOUDS = [
  {
    id: 'about',
    label: 'ABOUT',
    position: [-3.7, 2.0, -1.2],
    scale: 1.2,
  },
  {
    id: 'work',
    label: 'WORK',
    position: [-1.35, 0.25, -1.8],
    scale: 1.35,
  },
  {
    id: 'skills',
    label: 'SKILLS',
    position: [0.1, 2.25, -2.2],
    scale: 1.15,
  },
  {
    id: 'experience',
    label: 'EXPERIENCE',
    position: [1.75, 0.45, -1.7],
    scale: 1.3,
  },
  {
    id: 'learning',
    label: 'LEARNING',
    position: [3.55, 2.0, -1.0],
    scale: 1.2,
  },
  {
    id: 'contact',
    label: 'CONTACT',
    position: [3.1, -1.0, -1.2],
    scale: 1.25,
  },
]

export default function CloudField({
  selectedId = null,
  hoveredId = null,
  onHover = () => {},
  onSelect = () => {},
  reducedMotion = false,
}) {
  const groupRefs = useRef([])

  const clouds = useMemo(() => CLOUDS, [])

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    const scatterProgress = reducedMotion
      ? 1
      : THREE.MathUtils.clamp(
          (elapsed - 0.15) / 1.8,
          0,
          1
        )

    const eased =
      1 - Math.pow(1 - scatterProgress, 3)

    groupRefs.current.forEach((group, index) => {
      if (!group) return

      const cloud = clouds[index]

      const x = THREE.MathUtils.lerp(
        0,
        cloud.position[0],
        eased
      )

      const y = THREE.MathUtils.lerp(
        0.4,
        cloud.position[1],
        eased
      )

      const z = THREE.MathUtils.lerp(
        0.5,
        cloud.position[2],
        eased
      )

      group.position.set(x, y, z)

      const floating =
        reducedMotion
          ? 0
          : Math.sin(
              elapsed * 0.35 + index * 1.4
            ) * 0.045

      group.position.y += floating

      const isSelected =
        selectedId === cloud.id

      const isHovered =
        hoveredId === cloud.id

      const targetScale =
        isSelected
          ? cloud.scale * 1.22
          : isHovered
            ? cloud.scale * 1.1
            : cloud.scale

      group.scale.lerp(
        new THREE.Vector3(
          targetScale,
          targetScale,
          targetScale
        ),
        0.08
      )
    })
  })

  return (
    <group>
      {clouds.map((cloud, index) => {
        const isSelected =
          selectedId === cloud.id

        const isHovered =
          hoveredId === cloud.id

        return (
          <group
            key={cloud.id}
            ref={(node) => {
              groupRefs.current[index] = node
            }}
            position={[0, 0.4, 0.5]}
            scale={cloud.scale}
          >
            <group
              onPointerEnter={(event) => {
                event.stopPropagation()
                onHover(cloud.id)
                document.body.style.cursor = 'pointer'
              }}
              onPointerLeave={(event) => {
                event.stopPropagation()
                onHover(null)
                document.body.style.cursor = 'default'
              }}
              onClick={(event) => {
                event.stopPropagation()
                onSelect(cloud.id)
              }}
            >
              <Cloud
                segments={
                  isSelected || isHovered
                    ? 24
                    : 18
                }
                bounds={[2.1, 1.15, 1.25]}
                volume={3}
                color={
                  isSelected
                    ? '#fff7e8'
                    : '#ffffff'
                }
                opacity={
                  isSelected
                    ? 1
                    : 0.94
                }
                speed={
                  isSelected
                    ? 0.22
                    : 0.08
                }
                concentrate="inside"
                fade={3}
              />

              <Html
                center
                distanceFactor={7}
                position={[0, 0, 0.1]}
                style={{
                  pointerEvents: 'none',
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                <div
                  className={`cloud-label${
                    isHovered
                      ? ' cloud-label--active'
                      : ''
                  }${
                    isSelected
                      ? ' cloud-label--selected'
                      : ''
                  }`}
                >
                  <span className="cloud-label__rule" />
                  <span>{cloud.label}</span>
                </div>
              </Html>
            </group>
          </group>
        )
      })}
    </group>
  )
}
