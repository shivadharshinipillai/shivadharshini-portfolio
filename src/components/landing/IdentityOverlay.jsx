export function IdentityOverlay({ phase }) {
  const visible = phase === 'idle' || phase === 'intro'
  const introduced = phase !== 'intro'

  return (
    <div
      className="landing-identity"
      style={{
        opacity: visible ? 1 : 0,
      }}
      aria-hidden={!visible}
    >
      <p
        className="landing-welcome"
        style={{
          opacity: introduced ? 0.85 : 0,
          transitionDelay: introduced ? '600ms' : '0ms',
        }}
      >
        Welcome to
      </p>
      <h1
        className="landing-name"
        style={{
          opacity: introduced ? 1 : 0,
          transform: introduced ? 'translateY(0)' : 'translateY(10px)',
          transitionDelay: introduced ? '750ms' : '0ms',
        }}
      >
        Shivadharshini
        <br />
        R.A.
      </h1>
      <p
        className="landing-tagline"
        style={{
          opacity: introduced ? 0.75 : 0,
          transitionDelay: introduced ? '1000ms' : '0ms',
        }}
      >
        FASHION TECHNOLOGY &middot; BUSINESS &middot; DIGITAL
      </p>
    </div>
  )
}
