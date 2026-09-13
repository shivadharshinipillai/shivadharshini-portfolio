import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Scene } from '../components/landing/Scene'
import { IdentityOverlay } from '../components/landing/IdentityOverlay'
import { SectionNav } from '../components/landing/SectionNav'
import { HedwigPeek } from '../components/landing/HedwigPeek'
import { TransitionCurtain } from '../components/landing/TransitionCurtain'
import { useReducedMotion } from '../components/landing/hooks/useReducedMotion'
import { useViewport } from '../components/landing/hooks/useViewport'
import { SECTIONS, TIMING, REDUCED_TIMING } from '../data/sections'
import './Home.css'

// ---------------------------------------------------------------------------
// Transition state machine
//
//   INTRO -> IDLE -> SELECTED -> APPROACHING -> FILLING -> ATMOSPHERE -> NAVIGATING
//
// Timing lives in src/data/sections.js so the JS timers here and the CSS
// transition-durations passed down to TransitionCurtain can never drift
// out of sync.
// ---------------------------------------------------------------------------
const PHASES = {
  INTRO: 'intro',
  IDLE: 'idle',
  SELECTED: 'selected',
  APPROACHING: 'approaching',
  FILLING: 'filling',
  ATMOSPHERE: 'atmosphere',
  NAVIGATING: 'navigating',
}

const INTRO_DURATION_MS = 2600
const INTRO_DURATION_REDUCED_MS = 150

function Home() {
  const navigate = useNavigate()
  const reducedMotion = useReducedMotion()
  const { isMobile, hasWebGL } = useViewport()

  const [phase, setPhase] = useState(PHASES.INTRO)
  const [selectedId, setSelectedId] = useState(null)

  const phaseRef = useRef(PHASES.INTRO)
  const timeoutsRef = useRef([])

  const timing = reducedMotion ? REDUCED_TIMING : TIMING
  const selectedSection = SECTIONS.find((s) => s.id === selectedId) ?? null

  const setPhaseSafe = useCallback((next) => {
    phaseRef.current = next
    setPhase(next)
  }, [])

  // Opening sequence: clouds compose near the centre, then scatter to
  // their final layout while the identity text reveals (see
  // CloudDestination + IdentityOverlay). Once settled, the experience
  // becomes interactive.
  useEffect(() => {
    const introMs = reducedMotion ? INTRO_DURATION_REDUCED_MS : INTRO_DURATION_MS
    const id = window.setTimeout(() => {
      if (phaseRef.current === PHASES.INTRO) setPhaseSafe(PHASES.IDLE)
    }, introMs)
    timeoutsRef.current.push(id)
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion])

  // The full click -> navigate sequence. Rejects any additional selection
  // while a transition is already running -- the first destination wins.
  const handleCloudSelect = useCallback(
    (section) => {
      if (phaseRef.current !== PHASES.IDLE) return

      setSelectedId(section.id)
      setPhaseSafe(PHASES.SELECTED)

      const t1 = window.setTimeout(() => {
        setPhaseSafe(PHASES.APPROACHING)

        const t2 = window.setTimeout(() => {
          setPhaseSafe(PHASES.FILLING)

          const t3 = window.setTimeout(() => {
            setPhaseSafe(PHASES.ATMOSPHERE)

            const t4 = window.setTimeout(() => {
              setPhaseSafe(PHASES.NAVIGATING)
              navigate(section.path)
            }, timing.atmosphere + timing.hold)
            timeoutsRef.current.push(t4)
          }, timing.fill)
          timeoutsRef.current.push(t3)
        }, timing.approach)
        timeoutsRef.current.push(t2)
      }, timing.settle)
      timeoutsRef.current.push(t1)
    },
    [navigate, setPhaseSafe, timing]
  )

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id))
    }
  }, [])

  const isTransitioning = phase !== PHASES.IDLE && phase !== PHASES.INTRO
  const selectedLabel = selectedSection?.label

  return (
    <main className="landing-page" data-phase={phase}>
      {hasWebGL ? (
        <Canvas
          className="landing-canvas"
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          camera={{ position: [0, 0.35, 7.2], fov: isMobile ? 55 : 45, near: 0.1, far: 100 }}
          gl={{ antialias: true, alpha: false }}
        >
          <Scene
            phase={phase}
            selectedSection={selectedSection}
            reducedMotion={reducedMotion}
            isMobile={isMobile}
            onCloudSelect={handleCloudSelect}
          />
        </Canvas>
      ) : (
        // No-WebGL fallback: a static golden-hour gradient with plain
        // accessible links, so the site still works everywhere.
        <div className="landing-static-fallback">
          <nav aria-label="Portfolio destinations">
            {SECTIONS.map((section) => (
              <a key={section.id} href={section.path}>
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <IdentityOverlay phase={phase} />
      <SectionNav phase={phase} />
      <HedwigPeek phase={phase} />
      <TransitionCurtain phase={phase} timing={timing} />

      <div className="sr-only" role="status" aria-live="polite">
        {isTransitioning && selectedLabel ? `Flying to ${selectedLabel}` : ''}
      </div>
    </main>
  )
}

export default Home
