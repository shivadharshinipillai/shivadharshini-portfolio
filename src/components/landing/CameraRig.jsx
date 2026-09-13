import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const IDLE_POSITION = new THREE.Vector3(0, 0.35, 7.2)
const IDLE_LOOKAT = new THREE.Vector3(0, 0.1, -2)

export function CameraRig({ phase, target, hoveredTarget, reducedMotion, isMobile }) {
  const { camera, pointer } = useThree()
  const lookAtRef = useRef(IDLE_LOOKAT.clone())
  const approachStart = useRef(null)
  const startPos = useRef(new THREE.Vector3())
  const lastPhase = useRef(phase)

  useFrame((state, delta) => {
    if (phase !== lastPhase.current) {
      if (phase === 'approaching') {
        approachStart.current = state.clock.elapsedTime
        startPos.current.copy(camera.position)
      }
      lastPhase.current = phase
    }

    if (phase === 'idle' || phase === 'selected') {
      // Subtle parallax from pointer position, plus a gentle nudge toward
      // whichever cloud is currently hovered.
      const px = reducedMotion ? 0 : pointer.x
      const py = reducedMotion ? 0 : pointer.y

      let desired = IDLE_POSITION.clone()
      if (isMobile) desired.set(0, 0.35, 9.2)
      desired.x += px * (isMobile ? 0.18 : 0.5)
      desired.y += py * (isMobile ? 0.12 : 0.25)

      let lookAt = IDLE_LOOKAT.clone()
      if (hoveredTarget) {
        const hv = new THREE.Vector3(...hoveredTarget)
        desired.lerp(new THREE.Vector3(hv.x * (isMobile ? 0.06 : 0.12), hv.y * (isMobile ? 0.06 : 0.12) + 0.35, isMobile ? 9.2 : IDLE_POSITION.z), 0.4)
        lookAt.lerp(hv, 0.15)
      }

      camera.position.lerp(desired, reducedMotion ? 1 : 0.03)
      lookAtRef.current.lerp(lookAt, reducedMotion ? 1 : 0.05)
      camera.lookAt(lookAtRef.current)
    } else if (phase === 'approaching' && target) {
      const duration = reducedMotion ? 0.2 : 1.4
      const elapsed = state.clock.elapsedTime - (approachStart.current ?? 0)
      const p = Math.min(elapsed / duration, 1)
      const eased = p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2

      const t = new THREE.Vector3(...target)
      const pushed = new THREE.Vector3(t.x * 0.35, t.y * 0.3 + 0.3, t.z + 2.6)
      camera.position.lerpVectors(startPos.current, pushed, eased)
      lookAtRef.current.lerp(t, 0.12)
      camera.lookAt(lookAtRef.current)
    } else if ((phase === 'filling' || phase === 'atmosphere') && target) {
      const t = new THREE.Vector3(...target)
      camera.lookAt(t)
    }
    // navigating: hold last camera state; Home unmounts the scene shortly after.
  })

  return null
}
