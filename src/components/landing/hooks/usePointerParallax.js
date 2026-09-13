import { useEffect, useRef } from 'react'

export function usePointerParallax(enabled) {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled) return undefined

    function handlePointerMove(event) {
      pointer.current.x =
        (event.clientX / window.innerWidth) * 2 - 1

      pointer.current.y =
        (event.clientY / window.innerHeight) * 2 - 1
    }

    window.addEventListener(
      'pointermove',
      handlePointerMove,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'pointermove',
        handlePointerMove
      )
    }
  }, [enabled])

  return pointer
}
