import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { CloudCluster } from './CloudCluster'
import { mulberry32 } from './cloudTexture'

// Purely decorative clouds that give the sky depth (foreground wisps,
// distant haze) without being clickable. Count is reduced on mobile /
// low-power devices via the `count` prop.
export function BackgroundClouds({ count = 10, reducedMotion = false }) {
  const groupRef = useRef(null)

  const layout = useMemo(() => {
    const rand = mulberry32(777)
    return Array.from({ length: count }, (_, i) => {
      const distant = i % 2 === 0
      return {
        seed: 900 + i * 13,
        scale: distant ? 0.5 + rand() * 0.5 : 1.1 + rand() * 0.9,
        position: [
          (rand() - 0.5) * 16,
          -2.2 - rand() * 1.8 + (i % 3) * 0.6,
          distant ? -8 - rand() * 4 : -1.5 - rand() * 2,
        ],
        opacity: distant ? 0.5 : 0.85,
        phase: rand() * Math.PI * 2,
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.children.forEach((child, i) => {
      const item = layout[i]
      if (!item) return
      child.position.y = item.position[1] + Math.sin(t * 0.15 + item.phase) * 0.05
    })
  })

  return (
    <group ref={groupRef}>
      {layout.map((item, i) => (
        <group key={i} position={item.position}>
          <CloudCluster seed={item.seed} baseScale={item.scale} brightness={item.opacity} />
        </group>
      ))}
    </group>
  )
}
