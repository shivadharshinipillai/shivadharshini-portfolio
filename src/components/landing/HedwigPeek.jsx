import GreenScreenVideo from '../skills/GreenScreenVideo'

// Reuses the project's existing green-screen pipeline and the existing
// Hedwig asset. Does not touch the About/Contact Hedwig implementations.
const HEDWIG_SRC = '/animations/home-hedwig-peek.mp4'

export function HedwigPeek({ phase }) {
  const visible = phase === 'idle'

  return (
    <div className="landing-hedwig" style={{ opacity: visible ? 1 : 0 }} aria-hidden="true">
      <div className="landing-hedwig-copy">
        <span>Let&rsquo;s explore</span>
        <span>together?</span>
      </div>
      <div className="landing-hedwig-video">
        <GreenScreenVideo src={HEDWIG_SRC} />
      </div>
    </div>
  )
}
