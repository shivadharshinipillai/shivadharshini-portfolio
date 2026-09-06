import { useState } from 'react'
import { Lottie } from 'lottie-react'

function PhotographyScene() {
  const [takingPhoto, setTakingPhoto] = useState(false)

  const handlePhoto = () => {
    if (takingPhoto) return

    setTakingPhoto(true)

    setTimeout(() => {
      setTakingPhoto(false)
    }, 1800)
  }

  return (
    <div className="skill-scene photography-scene">
      <div className="photography-owl">
        <Lottie
          src="/animations/smiling-owl.json"
          loop
          autoplay
        />
      </div>

      <div className={`camera-holding-group ${takingPhoto ? 'taking-photo' : ''}`}>
        <div className="photo-camera">
          <div className="camera-body">
            <div className="camera-top" />

            <div className="camera-lens">
              <span />
            </div>

            <div className="camera-light" />
          </div>
        </div>

        <div className="owl-camera-wing owl-camera-wing-left" />
        <div className="owl-camera-wing owl-camera-wing-right" />
      </div>

      {takingPhoto && (
        <>
          <div className="camera-flash" />
          <div className="camera-spark camera-spark-one" />
          <div className="camera-spark camera-spark-two" />
          <div className="camera-spark camera-spark-three" />
          <div className="camera-spark camera-spark-four" />
        </>
      )}

      <div className={`captured-photo ${takingPhoto ? 'show-photo' : ''}`}>
        <div className="photo-inner">
          <div className="photo-owl">🦉</div>
          <span>CAPTURED</span>
        </div>
      </div>

      <button
        type="button"
        className="scene-hint"
        onClick={handlePhoto}
        disabled={takingPhoto}
      >
        {takingPhoto ? 'CAPTURING...' : 'TAKE PHOTO'}
      </button>
    </div>
  )
}

export default PhotographyScene
