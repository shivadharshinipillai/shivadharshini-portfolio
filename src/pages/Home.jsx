import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GreenScreenVideo from '../components/skills/GreenScreenVideo'

function Home() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const [transitioning, setTransitioning] = useState(false)

  const destinations = [
    { label: 'ABOUT', path: '/about', position: 'cloud-about' },
    { label: 'WORK', path: '/work', position: 'cloud-work' },
    { label: 'SKILLS', path: '/skills', position: 'cloud-skills' },
    { label: 'EXPERIENCE', path: '/experience', position: 'cloud-experience' },
    { label: 'LEARNING', path: '/learning', position: 'cloud-learning' },
    { label: 'CONTACT', path: '/contact', position: 'cloud-contact' },
  ]

  const handleDestination = (item) => {
    if (transitioning) return

    setSelected(item.label)
    setTransitioning(true)

    setTimeout(() => {
      navigate(item.path)
    }, 1900)
  }

  return (
    <main className={`home-page ${transitioning ? 'is-transitioning' : ''}`}>
      <section className="home-hero">

        <div className="home-sky-glow" />

        {/* CLOUD NAVIGATION */}
        <div className="home-clouds">
          {destinations.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`home-cloud ${item.position} ${
                selected === item.label ? 'is-selected' : ''
              }`}
              onClick={() => handleDestination(item)}
              aria-label={`Go to ${item.label}`}
              disabled={transitioning}
            >
              <span className="cloud-shape">
                <span />
                <span />
                <span />
              </span>

              <strong>{item.label}</strong>
            </button>
          ))}
        </div>

        {/* CENTRE IDENTITY */}
        <div className="home-copy">

          <div className="home-institution">
            
            <span>NATIONAL INSTITUTE OF FASHION TECHNOLOGY</span>
            <span>BBSR,ODISHA</span>
          </div>

          <h1>
            SHIVADHARSHINI R.A
            <br />
            <em></em>
          </h1>

          <div className="home-journey">
            <span>B.F.TECH Fourth Year </span>
            <i />
          </div>

        </div>

        {/* PLANE */}
        <div
          className={`home-plane ${
            selected ? `plane-to-${selected.toLowerCase()}` : ''
          }`}
          aria-hidden="true"
        >
          <div className="plane-body" />
          <div className="plane-wing plane-wing-left" />
          <div className="plane-wing plane-wing-right" />
          <div className="plane-tail" />
        </div>

        {/* HEDWIG — PEEKING FROM RIGHT EDGE */}
        <div className="home-hedwig-peek" aria-hidden="true">
          <GreenScreenVideo
            src="/animations/home-hedwig-peek.mp4"
          />
        </div>

        {/* TRANSITION */}
        <div
          className={`home-night-wash ${
            transitioning ? 'is-visible' : ''
          }`}
        />

      </section>
    </main>
  )
}

export default Home
