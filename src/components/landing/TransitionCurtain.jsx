const STAR_SEEDS = Array.from({ length: 22 }, (_, i) => ({
  x: (i * 41) % 100,
  y: (i * 67) % 100,
}))

// The selected 3D cloud grows dramatically as the plane arrives (see
// CloudDestination), which carries most of the "flying into the cloud"
// feeling. This HTML layer takes over for the final stretch to guarantee
// gapless, pixel-perfect coverage (billboarded sprites can show seams at
// extreme scale), then carries the warm evening bloom through to a quick
// dip into the destination page's exact night-sky gradient so the cut
// into /about, /work, etc. reads as continuous rather than a hard reset.
export function TransitionCurtain({ phase, timing }) {
  const active = phase === 'filling' || phase === 'atmosphere' || phase === 'navigating'
  if (!active) return null

  const isAtmosphere = phase === 'atmosphere' || phase === 'navigating'

  return (
    <div className="landing-curtain" aria-hidden="true">
      <div
        className={`landing-curtain-fill${active ? ' is-active' : ''}`}
        style={{ '--fill-duration': `${timing.fill}ms` }}
      />
      <div
        className={`landing-curtain-atmosphere${isAtmosphere ? ' is-active' : ''}`}
        style={{ '--atmo-duration': `${timing.atmosphere}ms` }}
      >
        <div className="landing-curtain-warm" />
        <div className="landing-curtain-navy" />
        <div className="landing-curtain-stars">
          {STAR_SEEDS.map((seed, i) => (
            <span key={i} style={{ '--sx': `${seed.x}%`, '--sy': `${seed.y}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
