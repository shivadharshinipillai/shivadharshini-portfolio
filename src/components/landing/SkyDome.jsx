import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Golden-hour gradient: cool blue overhead settling into warm peach/gold
// toward the horizon, with a soft sun glow offset to the right — matching
// the reference image. Implemented as a real dome (large inverted sphere)
// with a vertex/fragment shader rather than a flat canvas texture, so it
// genuinely reads as an enclosing 3D sky as the camera drifts.

const VERTEX_SHADER = /* glsl */ `
  varying vec3 vWorldDir;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldDir = normalize(worldPos.xyz - cameraPosition);
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`

const FRAGMENT_SHADER = /* glsl */ `
  varying vec3 vWorldDir;

  uniform vec3 uTopColor;
  uniform vec3 uHorizonColor;
  uniform vec3 uLowColor;
  uniform vec3 uSunColor;
  uniform vec3 uSunDirection;
  uniform float uSunIntensity;
  uniform float uTime;

  void main() {
    float h = clamp(vWorldDir.y * 0.5 + 0.5, 0.0, 1.0);

    // Two-stage vertical gradient: sky-blue up top, warm gold near horizon.
    vec3 sky = mix(uHorizonColor, uTopColor, smoothstep(0.18, 0.85, h));
    sky = mix(uLowColor, sky, smoothstep(0.0, 0.22, h));

    // Soft sun glow based on angular closeness to the sun direction.
    float sunDot = max(dot(normalize(vWorldDir), normalize(uSunDirection)), 0.0);
    float glow = pow(sunDot, 8.0) * 0.6 + pow(sunDot, 64.0) * uSunIntensity;
    sky += uSunColor * glow;

    // Extremely subtle animated haze so the sky doesn't feel static.
    float haze = sin(vWorldDir.x * 3.0 + uTime * 0.02) * 0.01;
    sky += haze;

    gl_FragColor = vec4(sky, 1.0);
  }
`

export function SkyDome({ reducedMotion = false }) {
  const materialRef = useRef(null)

  const uniforms = useMemo(
    () => ({
      uTopColor: { value: new THREE.Color('#3c6690') },
      uHorizonColor: { value: new THREE.Color('#e7c49a') },
      uLowColor: { value: new THREE.Color('#f6dfb6') },
      uSunColor: { value: new THREE.Color('#fff2d6') },
      uSunDirection: { value: new THREE.Vector3(0.75, 0.28, -0.35).normalize() },
      uSunIntensity: { value: 1.0 },
      uTime: { value: 0 },
    }),
    []
  )

  useFrame((state) => {
    if (reducedMotion) return
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh scale={[80, 80, 80]} renderOrder={-10}>
      <sphereGeometry args={[1, 32, 24]} />
      <shaderMaterial
        ref={materialRef}
        side={THREE.BackSide}
        depthWrite={false}
        uniforms={uniforms}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
      />
    </mesh>
  )
}
