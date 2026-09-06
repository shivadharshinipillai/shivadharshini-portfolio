import { useEffect, useRef } from 'react'

function GreenScreenVideo({
  src,
  className = '',
  style = {},
  freezeAt = null,
}) {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (!video || !canvas) return

    const context = canvas.getContext('2d', {
      willReadFrequently: true,
    })

    const render = () => {
      if (
        freezeAt !== null &&
        video.currentTime >= freezeAt &&
        !video.paused
      ) {
        video.pause()
        drawFrame()
        return
      }

      if (video.readyState >= 2 && video.videoWidth > 0) {
        if (
          canvas.width !== video.videoWidth ||
          canvas.height !== video.videoHeight
        ) {
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
        }

        context.drawImage(
          video,
          0,
          0,
          canvas.width,
          canvas.height
        )

        const image = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        )

        const pixels = image.data

        for (let i = 0; i < pixels.length; i += 4) {
          let r = pixels[i]
          let g = pixels[i + 1]
          let b = pixels[i + 2]

          const maxRB = Math.max(r, b)
          const greenDominance = g - maxRB

          if (
            g > 85 &&
            greenDominance > 30 &&
            g > r * 1.20 &&
            g > b * 1.15
          ) {
            pixels[i + 3] = 0
            continue
          }

          if (
            g > 70 &&
            greenDominance > 12 &&
            g > r * 1.08 &&
            g > b * 1.06
          ) {
            const edgeStrength = Math.min(
              1,
              Math.max(0, (greenDominance - 12) / 18)
            )

            pixels[i + 3] = Math.round(255 * (1 - edgeStrength))

            const targetGreen = Math.max(r, b) + 8
            g = Math.min(g, targetGreen)

            pixels[i] = r
            pixels[i + 1] = g
            pixels[i + 2] = b
          }
        }

        context.putImageData(image, 0, 0)
      }

      frameRef.current = requestAnimationFrame(render)
    }

    const start = () => {
      video.play().catch(() => {})
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }

      frameRef.current = requestAnimationFrame(render)
    }

    video.addEventListener('loadeddata', start)
    video.addEventListener('canplay', start)

    if (video.readyState >= 2) {
      start()
    }

    return () => {
      video.removeEventListener('loadeddata', start)
      video.removeEventListener('canplay', start)

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [src, freezeAt])

  return (
    <div
      className={`green-screen-video ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        aria-hidden="true"
      />
    </div>
  )
}

export default GreenScreenVideo
