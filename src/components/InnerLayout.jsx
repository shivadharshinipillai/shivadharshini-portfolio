import { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import GreenScreenVideo from './skills/GreenScreenVideo'

const navigation = [
  { label: 'About', path: '/about' },
  { label: 'Work', path: '/work' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Learning', path: '/learning' },
  { label: 'Contact', path: '/contact' },
]

function InnerLayout({ eyebrow, title, children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="inner-page">
      <div className="night-sky">

        <div className="stars">
          {Array.from({ length: 45 }).map((_, index) => (
            <span
              key={index}
              className="star"
              style={{
                '--x': `${(index * 37) % 100}%`,
                '--y': `${(index * 61) % 100}%`,
                '--size': `${2 + (index % 3)}px`,
                '--delay': `${(index % 8) * 0.5}s`,
              }}
            />
          ))}
        </div>

        {location.pathname === '/about' && (
          <div className="moon-hedwig">
            <GreenScreenVideo
              src="/animations/about-hedwig-hi.mp4"
              freezeAt={6.2}
            />
          </div>
        )}

        <div className="moon">
          <div className="moon-glow" />
          <div className="moon-disc" />
        </div>

        <header className="inner-nav">

          <button
            className="home-mark"
            onClick={() => navigate('/')}
            aria-label="Return home"
          >
            ←
          </button>

          <nav className="desktop-nav">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <span className="nav-year">2026</span>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </header>

        <section className="inner-content">
          <p className="inner-eyebrow">{eyebrow}</p>

          <h1>{title}</h1>

          <div className="page-content">
            {children}
          </div>
        </section>

        <button
          className="return-home"
          onClick={() => navigate('/')}
        >
          ← Return to sky
        </button>

        <div className="orbit-mark">✦</div>

        {menuOpen && (
          <div className="mobile-drawer">

            <button
              className="mobile-drawer-backdrop"
              onClick={closeMenu}
              aria-label="Close navigation"
            />

            <aside className="mobile-drawer-panel">

              <div className="mobile-drawer-header">
                <span className="mobile-drawer-label">NAVIGATION</span>

                <button
                  className="mobile-drawer-close"
                  onClick={closeMenu}
                  aria-label="Close navigation"
                >
                  ×
                </button>
              </div>

              <nav className="mobile-drawer-nav">
                {navigation.map((item, index) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive
                        ? 'mobile-drawer-link active'
                        : 'mobile-drawer-link'
                    }
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="mobile-drawer-footer">
                <span>SHIVADHARSHINI R A</span>
                <span>2026</span>
              </div>

            </aside>
          </div>
        )}

      </div>
    </main>
  )
}

export default InnerLayout
