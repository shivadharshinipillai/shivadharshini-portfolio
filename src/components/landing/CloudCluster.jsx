import { useMemo } from 'react'
import { getCloudPuffTexture, mulberry32 } from './cloudTexture'

// One fluffy cloud = a small cluster of soft sprites at varying sizes,
// offsets and opacities. This is the same underlying technique drei's
// <Cloud> uses, built locally so the puff texture never depends on a
// third-party CDN (see cloudTexture.js for why).
export function CloudCluster({
  seed = 1,
  baseScale = 1,
  brightness = 1,
  warmth = 0,
  puffCount,
}) {
  const texture = getCloudPuffTexture()

  const puffs = useMemo(() => {
    const rand = mulberry32(seed)
    const count = puffCount ?? 7 + Math.floor(rand() * 4)
    return Array.from({ length: count }, () => ({
      scale: (0.85 + rand() * 1.3) * baseScale,
      x: (rand() - 0.5) * 2.6 * baseScale,
      y: (rand() - 0.5) * 0.9 * baseScale,
      z: (rand() - 0.5) * 0.9 * baseScale,
      opacity: 0.55 + rand() * 0.35,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seed, baseScale, puffCount])

  // Warm evening tint blended in as `warmth` (0..1) rises — used during
  // the selected cloud's approach/fill sequence.
  const color = useMemo(() => {
    const base = [1, 1, 1]
    const warm = [1, 0.86, 0.68]
    return [
      base[0] + (warm[0] - base[0]) * warmth,
      base[1] + (warm[1] - base[1]) * warmth,
      base[2] + (warm[2] - base[2]) * warmth,
    ]
  }, [warmth])

  return (
    <group>
      {puffs.map((p, i) => (
        <sprite key={i} position={[p.x, p.y, p.z]} scale={[p.scale * 1.7, p.scale, 1]}>
          <spriteMaterial
            map={texture}
            transparent
            depthWrite={false}
            opacity={p.opacity * brightness}
            color={color}
          />
        </sprite>
      ))}
    </group>
  )
}
