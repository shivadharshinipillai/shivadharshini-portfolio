import { forwardRef, useImperativeHandle, useRef } from 'react'

const OwlCharacter = forwardRef(function OwlCharacter(props, ref) {
  const root = useRef(null)
  const body = useRef(null)
  const belly = useRef(null)
  const head = useRef(null)
  const earLeft = useRef(null)
  const earRight = useRef(null)
  const eyeLeft = useRef(null)
  const eyeRight = useRef(null)
  const pupilLeft = useRef(null)
  const pupilRight = useRef(null)
  const beak = useRef(null)
  const wingLeft = useRef(null)
  const wingRight = useRef(null)
  const footLeft = useRef(null)
  const footRight = useRef(null)

  useImperativeHandle(ref, () => ({
    root: root.current,
    body: body.current,
    belly: belly.current,
    head: head.current,
    earLeft: earLeft.current,
    earRight: earRight.current,
    eyeLeft: eyeLeft.current,
    eyeRight: eyeRight.current,
    pupilLeft: pupilLeft.current,
    pupilRight: pupilRight.current,
    beak: beak.current,
    wingLeft: wingLeft.current,
    wingRight: wingRight.current,
    footLeft: footLeft.current,
    footRight: footRight.current,
  }))

  return (
    <g ref={root} className="owl-character">
      <g ref={footLeft} className="owl-part owl-foot">
        <ellipse cx="78" cy="207" rx="10" ry="5" fill="var(--owl-foot)" />
      </g>

      <g ref={footRight} className="owl-part owl-foot">
        <ellipse cx="122" cy="207" rx="10" ry="5" fill="var(--owl-foot)" />
      </g>

      <g ref={body} className="owl-part owl-body">
        <path
          d="M100 78
             C146 78 168 118 168 156
             C168 190 138 208 100 208
             C62 208 32 190 32 156
             C32 118 54 78 100 78 Z"
          fill="var(--owl-body)"
        />

        <g ref={belly}>
          <ellipse
            cx="100"
            cy="158"
            rx="44"
            ry="42"
            fill="var(--owl-belly)"
          />
        </g>
      </g>

      <g ref={wingLeft} className="owl-part owl-wing owl-wing-left">
        <path
          d="M46 118
             C24 128 16 158 24 186
             C30 198 44 200 52 190
             C44 168 42 140 54 122 Z"
          fill="var(--owl-wing)"
        />
      </g>

      <g ref={wingRight} className="owl-part owl-wing owl-wing-right">
        <path
          d="M154 118
             C176 128 184 158 176 186
             C170 198 156 200 148 190
             C156 168 158 140 146 122 Z"
          fill="var(--owl-wing)"
        />
      </g>

      <g ref={head} className="owl-part owl-head">
        <g ref={earLeft}>
          <path
            d="M62 44 L52 12 L78 34 Z"
            fill="var(--owl-wing)"
          />
        </g>

        <g ref={earRight}>
          <path
            d="M138 44 L148 12 L122 34 Z"
            fill="var(--owl-wing)"
          />
        </g>

        <circle
          cx="100"
          cy="86"
          r="58"
          fill="var(--owl-head)"
        />

        <g ref={eyeLeft} className="owl-part owl-eye">
          <circle
            cx="78"
            cy="86"
            r="19"
            fill="var(--owl-eye-white)"
          />

          <g ref={pupilLeft}>
            <circle
              cx="78"
              cy="86"
              r="9.5"
              fill="var(--owl-pupil)"
            />
            <circle
              cx="81"
              cy="82.5"
              r="3"
              fill="var(--owl-eye-highlight)"
            />
          </g>
        </g>

        <g ref={eyeRight} className="owl-part owl-eye">
          <circle
            cx="122"
            cy="86"
            r="19"
            fill="var(--owl-eye-white)"
          />

          <g ref={pupilRight}>
            <circle
              cx="122"
              cy="86"
              r="9.5"
              fill="var(--owl-pupil)"
            />
            <circle
              cx="125"
              cy="82.5"
              r="3"
              fill="var(--owl-eye-highlight)"
            />
          </g>
        </g>

        <g ref={beak}>
          <path
            d="M100 100 L91 114 L109 114 Z"
            fill="var(--owl-beak)"
          />
        </g>
      </g>
    </g>
  )
})

export default OwlCharacter
