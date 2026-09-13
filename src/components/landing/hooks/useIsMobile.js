import { useEffect, useState } from 'react'

const MOBILE_QUERY = '(max-width: 768px)'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia(MOBILE_QUERY).matches
  )

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY)

    const handleChange = (event) => {
      setIsMobile(event.matches)
    }

    setIsMobile(query.matches)

    query.addEventListener(
      'change',
      handleChange
    )

    return () => {
      query.removeEventListener(
        'change',
        handleChange
      )
    }
  }, [])

  return isMobile
}
