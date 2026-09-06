import InnerLayout from '../components/InnerLayout'

const skillScenes = [
  {
    number: '01',
    title: 'Creative',
    skills: [
      'Photography',
      'Video Editing',
      'Sketching',
      'Visual Storytelling',
      'AutoCAD',
    ],
    action: 'CAPTURE · CREATE · TELL',
    type: 'photography',
  },
  {
    number: '02',
    title: 'Fashion & Industry',
    skills: [
      'Apparel Production',
      'Sourcing & Costing',
      'Merchandising',
      'Fashion Retail',
      'Supply Chain Fundamentals',
    ],
    action: 'SKETCH · DEVELOP · BUILD',
    type: 'sketching',
  },
  {
    number: '03',
    title: 'Business & Analytical',
    skills: [
      'Market Research',
      'Data Analysis',
      'MS Excel',
      'Problem Solving',
      'Decision-Making',
    ],
    action: 'ANALYSE · THINK · DECIDE',
    type: 'analytics',
  },
  {
    number: '04',
    title: 'Digital & Web',
    skills: [
      'Web Development',
      'UI/UX Design',
      'Shopify',
      'Figma',
      'Advanced Excel',
      'Power BI',
    ],
    action: 'DESIGN · CODE · LAUNCH',
    type: 'digital',
  },
]

function Owl({ type }) {
  return (
    <div className={`cute-owl-scene owl-${type}`}>

      <div className="cute-owl">
        <div className="owl-tuft owl-tuft-left" />
        <div className="owl-tuft owl-tuft-right" />

        <div className="owl-head">
          <div className="owl-face">
            <div className="owl-eye owl-eye-left">
              <span className="owl-pupil" />
              <span className="owl-highlight" />
            </div>

            <div className="owl-eye owl-eye-right">
              <span className="owl-pupil" />
              <span className="owl-highlight" />
            </div>

            <div className="owl-beak" />
          </div>
        </div>

        <div className="owl-belly">
          <div className="owl-belly-feather" />
          <div className="owl-belly-feather owl-belly-feather-two" />
          <div className="owl-belly-feather owl-belly-feather-three" />
        </div>

        <div className="owl-wing owl-wing-left" />
        <div className="owl-wing owl-wing-right" />

        <div className="owl-foot owl-foot-left" />
        <div className="owl-foot owl-foot-right" />
      </div>

      {type === 'photography' && (
        <>
          <div className="owl-camera">
            <div className="camera-body">
              <div className="camera-top" />
              <div className="camera-lens">
                <span />
              </div>
              <div className="camera-button" />
            </div>
          </div>

          <div className="camera-flash-burst">
            <i />
            <i />
            <i />
            <i />
          </div>

          <div className="photo-result">
            <div className="photo-image">
              <span>✦</span>
            </div>
            <small>SHOT!</small>
          </div>
        </>
      )}

      {type === 'sketching' && (
        <>
          <div className="sketch-desk">
            <div className="sketch-paper">
              <div className="fashion-sketch">
                <span className="sketch-head" />
                <span className="sketch-body" />
                <span className="sketch-arm sketch-arm-one" />
                <span className="sketch-arm sketch-arm-two" />
                <span className="sketch-leg sketch-leg-one" />
                <span className="sketch-leg sketch-leg-two" />
                <span className="sketch-dress" />
              </div>
            </div>

            <div className="owl-pencil">
              <span />
            </div>
          </div>

          <div className="sketch-stars">
            <span>✦</span>
            <span>✧</span>
            <span>✦</span>
          </div>
        </>
      )}

      {type === 'analytics' && (
        <>
          <div className="analytics-laptop">
            <div className="laptop-screen">
              <div className="analytics-header">
                <span />
                <span />
                <span />
              </div>

              <div className="analytics-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="analytics-line">
                <span />
              </div>
            </div>

            <div className="laptop-base" />
          </div>

          <div className="data-bubble">
            <span>+24%</span>
            <small>GROWTH</small>
          </div>
        </>
      )}

      {type === 'digital' && (
        <>
          <div className="digital-laptop">
            <div className="laptop-screen">
              <div className="website-window">
                <div className="window-top">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="website-content">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>

            <div className="laptop-base" />
          </div>

          <div className="floating-code">
            <span>&lt;/&gt;</span>
          </div>

          <div className="cursor-dot" />
        </>
      )}
    </div>
  )
}

function Skills() {
  return (
    <InnerLayout eyebrow="CAPABILITIES" title="Skills">

      <div className="skills-intro">
        <p>
          A little curiosity can take you anywhere.
        </p>

        <span>
          LEARNING · CREATING · EXPLORING · ALWAYS
        </span>
      </div>

      <section className="owl-skills-grid">

        {skillScenes.map((scene) => (
          <article
            className="owl-skill-card"
            key={scene.number}
          >

            <div className="owl-card-number">
              {scene.number}
            </div>

            <Owl type={scene.type} />

            <div className="owl-skill-info">

              <h2>{scene.title}</h2>

              <div className="owl-divider" />

              <div className="owl-skill-list">
                {scene.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <p className="owl-action">
                {scene.action}
              </p>

            </div>

          </article>
        ))}

      </section>

      <div className="skills-closing">
        <span>✦</span>
        <p>Explore. Build. Grow.</p>
        <span>✦</span>
      </div>

    </InnerLayout>
  )
}

export default Skills