import * as THREE from 'three'

// A soft radial-gradient puff, generated once at runtime and reused for
// every cloud sprite in the scene. Deliberately NOT using drei's <Cloud />
// helper here: its docs state it "is not meant to be used in production
// environments" because it fetches its texture from a third-party CDN at
// runtime — a fragile, unnecessary external dependency for a portfolio
// site. This texture is generated locally instead, so clouds render
// identically offline and never depend on a third party staying up.
let cachedTexture = null

export function getCloudPuffTexture() {
  if (cachedTexture) return cachedTexture

  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  )
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.35, 'rgba(255,255,255,0.92)')
  grad.addColorStop(0.7, 'rgba(255,255,255,0.35)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')

  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  cachedTexture = texture
  return texture
}

// Deterministic pseudo-random generator so a cloud's puff layout is
// stable across re-renders (keyed by seed, not Math.random()).
export function mulberry32(seed) {
  let a = seed
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
