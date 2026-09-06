import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import About from './pages/About'
import Work from './pages/Work'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Learning from './pages/Learning'
import Contact from './pages/Contact'
import GoodMaiden from './pages/GoodMaiden'
import Mutram from './pages/Mutram'
import './App.css'

const destinations = [
  { id: 'about', label: 'About', path: '/about', position: 'cloud-about' },
  { id: 'work', label: 'Work', path: '/work', position: 'cloud-work' },
  { id: 'skills', label: 'Skills', path: '/skills', position: 'cloud-skills' },
  {
    id: 'experience',
    label: 'Experience',
    path: '/experience',
    position: 'cloud-experience',
  },
  {
    id: 'learning',
    label: 'Learning',
    path: '/learning',
    position: 'cloud-learning',
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    position: 'cloud-contact',
  },
]

function Home() {
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  const handleCloudClick = (destination) => {
    setSelected(destination.id)

    setTimeout(() => {
      navigate(destination.path)
    }, 900)
  }

  return (
    <main className={`portfolio-home ${loaded ? 'loaded' : ''}`}>
      <div className="sky">
        <div className="sun" />

        <div className="cloud-field">
          {destinations.map((destination, index) => (
            <button
              key={destination.id}
              className={`cloud ${destination.position} ${
                selected === destination.id ? 'selected' : ''
              }`}
              style={{ '--delay': `${index * 0.08}s` }}
              onClick={() => handleCloudClick(destination)}
              aria-label={`Explore ${destination.label}`}
            >
              <span className="cloud-shape">
                <span />
                <span />
                <span />
              </span>

              <span className="cloud-label">
                {destination.label}
              </span>
            </button>
          ))}
        </div>

        <div className={`plane ${selected ? 'flying' : ''}`}>
          <div className="plane-body">✈</div>
          <div className="plane-trail" />
        </div>

        <section className="intro">
          <p className="eyebrow">
            FASHION × BUSINESS × TECHNOLOGY
          </p>

          <h1>Shivadharshini</h1>

          <p className="intro-text">
            Exploring the space where fashion, retail,
            management and technology meet.
          </p>

          <p className="instruction">
            Choose a destination to explore
          </p>
        </section>

        {selected && (
          <div className="destination-message">
            Flying to{' '}
            <strong>
              {destinations.find(
                (item) => item.id === selected
              )?.label}
            </strong>
            <span>✦</span>
          </div>
        )}

        <div className="bottom-mark">
          <span>FT</span>
          <span>2026</span>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/good-maiden" element={<GoodMaiden />} />
        <Route path="/work/mutram" element={<Mutram />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App