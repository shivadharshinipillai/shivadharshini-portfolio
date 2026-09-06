import GreenScreenVideo from './GreenScreenVideo'

function AnimatedOwl({ scene }) {
  if (scene === 'photography') {
    return (
      <div className="animated-owl animated-owl-photography video-owl">
        <GreenScreenVideo
          src="/animations/photography-flow-owl.mp4"
        />
      </div>
    )
  }

  if (scene === 'sketching') {
    return (
      <div className="animated-owl animated-owl-sketching video-owl">
        <video
          src="/animations/fashion-owl.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      </div>
    )
  }

  if (scene === 'fashion-industry') {
    return (
      <div className="animated-owl animated-owl-fashion-industry video-owl">
        <GreenScreenVideo
          src="/animations/fashion-flow-owl.mp4"
        />
      </div>
    )
  }

  if (scene === 'analytics') {
    return (
      <div className="animated-owl animated-owl-analytics video-owl">
        <GreenScreenVideo
          src="/animations/business-flow-owl.mp4"
        />
      </div>
    )
  }

  if (scene === 'digital') {
    return (
      <div className="animated-owl animated-owl-digital video-owl">
        <GreenScreenVideo
          src="/animations/uiux-flow-owl.mp4"
        />
      </div>
    )
  }

  return (
    <div className={`animated-owl animated-owl-${scene}`} aria-hidden="true">
      <div className="owl-placeholder">
        <span>🦉</span>
      </div>
    </div>
  )
}

export default AnimatedOwl
