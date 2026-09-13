import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TRANSITION_DURATION_MS = 1200

export function useSectionTransition(sections) {
  const navigate = useNavigate()
  const [transitioningId, setTransitioningId] = useState(null)

  const transitionTarget =
    sections.find(
      (section) => section.id === transitioningId
    ) || null

  const startTransition = useCallback(
    (id) => {
      if (transitioningId) return
      setTransitioningId(id)
    },
    [transitioningId]
  )

  useEffect(() => {
    if (!transitionTarget) return undefined

    const timer = setTimeout(() => {
      navigate(transitionTarget.route)
    }, TRANSITION_DURATION_MS)

    return () => clearTimeout(timer)
  }, [transitionTarget, navigate])

  return {
    transitioning: Boolean(transitioningId),
    transitionTarget,
    startTransition,
  }
}
