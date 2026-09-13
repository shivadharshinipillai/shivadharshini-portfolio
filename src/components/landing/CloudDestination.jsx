import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { CloudCluster } from './CloudCluster'
import { ICONS } from './icons'

// Where clouds visually "compose" from before scattering outward on load.
const CLUSTER_CENTER = [0, 0.25, -2.4]
const INTRO_DURATION = 1.5
const INTRO_STAGGER = 0.12

export function CloudDestination({
  section,
  index,
  seed,
  phase,
  isSelected,
  isLocked,
  reducedMotion,
  onSelect,
  onHover,
}) {
  const [hovered, setHovered] = useState(false)
  const groupRef = useRef(null)
  const scaleRef = useRef(1)

  const Icon = ICONS[section.icon]

  const growing = isSelected && (phase === 'approaching' || phase === 'filling')
  const dimmed = isLocked && !isSelected
  const warmActive = isSelected && (phase === 'filling' || phase === 'atmosphere')

  const introStart = useMemo(() => {
    const [fx, fy, fz] = section.position
    const pull = 0.8 // how clustered the starting position is (0 = final, 1 = center)
    return [
      fx + (CLUSTER_CENTER[0] - fx) * pull,
      fy + (CLUSTER_CENTER[1] - fy) * pull,
      fz + (CLUSTER_CENTER[2] - fz) * pull,
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return

    let targetScale = 1
    if (hovered && !isLocked) targetScale = 1.08
    if (isSelected && growing) {
      // Grow dramatically to fill the viewport once the plane arrives.
      const t = phase === 'filling' || phase === 'atmosphere' ? 1 : 0.15
      targetScale = 1 + t * 22
    }
    scaleRef.current = THREE.MathUtils.damp(scaleRef.current, targetScale, 4, delta)
    groupRef.current.scale.setScalar(scaleRef.current)

    // Opening scatter: clouds compose near the centre, then ease out to
    // their final layout, staggered per-cloud so it reads as one
    // orchestrated moment rather than everything moving at once.
    let x = section.position[0]
    let y = section.position[1]
    let z = section.position[2]

    if (phase === 'intro' && !reducedMotion) {
      const localT = THREE.MathUtils.clamp(
        (state.clock.elapsedTime - index * INTRO_STAGGER) / INTRO_DURATION,
        0,
        1
      )
      const eased = 1 - (1 - localT) ** 3
      x = THREE.MathUtils.lerp(introStart[0], section.position[0], eased)
      y = THREE.MathUtils.lerp(introStart[1], section.position[1], eased)
      z = THREE.MathUtils.lerp(introStart[2], section.position[2], eased)
    } else if (phase === 'idle') {
      // Gentle idle drift so "the sky is alive" without being distracting.
      y += Math.sin(state.clock.elapsedTime * 0.22 + seed) * 0.08
    }

    groupRef.current.position.set(x, y, z)
  })

  const brightness = hovered && !isLocked ? 1.15 : dimmed ? 0.55 : 1
  const warmth = warmActive ? 1 : 0

  return (
    <group
      ref={groupRef}
      position={section.position}
      onPointerOver={(e) => {
        if (isLocked) return
        e.stopPropagation()
        setHovered(true)
        onHover?.(section.id)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setHovered(false)
        onHover?.(null)
        document.body.style.cursor = 'default'
      }}
      onClick={(e) => {
        if (isLocked) return
        e.stopPropagation()
        onSelect(section)
      }}
    >
      {/* Forgiving invisible hit area, roughly cloud-shaped. */}
      <mesh visible={false}>
        <sphereGeometry args={[1.6 * section.cloudScale, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <CloudCluster
        seed={seed}
        baseScale={section.cloudScale}
        brightness={brightness}
        warmth={warmth}
      />

      {!growing && (
        <Html center style={{ pointerEvents: 'none' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              color: '#233246',
              opacity: dimmed ? 0 : hovered ? 1 : 0.92,
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'opacity 0.35s ease, transform 0.3s ease',
              textShadow: '0 1px 10px rgba(255,255,255,0.85), 0 0 22px rgba(255,255,255,0.5)',
              whiteSpace: 'nowrap',
            }}
          >
            <Icon />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.16em',
              }}
            >
              {section.label}
            </span>
          </div>
        </Html>
      )}
    </group>
  )
}
