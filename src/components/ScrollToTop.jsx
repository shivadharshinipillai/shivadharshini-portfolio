import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setVisible(false)
      return
    }

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0

      setVisible(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [location.pathname])

  if (location.pathname === '/' || !visible) {
    return null
  }

  return (
    <button
      className="scroll-to-top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }}
      aria-label="Scroll to top"
      type="button"
    >
      ↑
    </button>
  )
}

export default ScrollToTop
