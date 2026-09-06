import InnerLayout from '../components/InnerLayout'

function Experience() {
  return (
    <InnerLayout eyebrow="" title="">
      <div className="experience-page">

        <section className="experience-project">

          <div className="experience-project-header">
            <div className="experience-project-meta">
              <span className="experience-number">01</span>
              <span className="project-type">
                INDUSTRIAL EXPOSURE · TEXTILE & SILK
              </span>
            </div>

            <h1>Orient Processors</h1>

            <p className="experience-duration">
              15 DAYS · 2025 · ASSAM
            </p>
          </div>

          <div className="experience-project-main">

            <div className="experience-project-copy">
              <p className="project-type">TEXTILE EXPERIENCE</p>

              <p>
                A 15-day industrial exposure that gave me practical
                understanding of textile manufacturing and the processes
                involved from material to fabric.
              </p>

              <p>
                I observed silk processing, yarn formation, weaving and
                dyeing operations within a textile manufacturing environment.
              </p>

              <div className="experience-assam-story">
                <p className="project-type">WHY ASSAM?</p>

                <p>
                  I chose this experience because I wanted first-hand exposure
                  to textile manufacturing and a better understanding of what
                  happens before a finished garment is created.
                </p>
              </div>
            </div>

            <div className="experience-gallery experience-gallery-editorial">

              <figure className="experience-image experience-image-large">
                <img
                  src="/experience/assam-dyeing.jpg"
                  alt="Dyeing machinery and yarn at Orient Processors"
                />
              </figure>

              <div className="experience-gallery-middle">

                <figure className="experience-image">
                  <img
                    src="/experience/assam-yarn.jpg"
                    alt="Yarn processing at Orient Processors"
                  />
                </figure>

                <figure className="experience-image">
                  <img
                    src="/experience/assam-field.jpg"
                    alt="Hands-on textile experience in Assam"
                  />
                </figure>

              </div>

              <figure className="experience-image experience-image-tall">
                <img
                  src="/experience/assam-loom.jpg"
                  alt="Weaving process at Orient Processors"
                />
              </figure>

            </div>

          </div>

          <div className="experience-focus-grid">

            <article>
              <span>01</span>
              <h4>Silk</h4>
              <p>
                Explored different silk varieties, including
                <strong> Tussar silk</strong>, and developed a better
                understanding of their material characteristics.
              </p>
            </article>

            <article>
              <span>02</span>
              <h4>Yarn Formation</h4>
              <p>
                Observed the machinery and processes involved in yarn
                formation and how fibre develops into the foundation of a
                textile.
              </p>
            </article>

            <article>
              <span>03</span>
              <h4>Weaving</h4>
              <p>
                Gained exposure to weaving and observed the relationship
                between yarn, loom setup and woven structure.
              </p>
            </article>

            <article>
              <span>04</span>
              <h4>Dyeing</h4>
              <p>
                Observed industrial dyeing processes and gained exposure
                to the machinery used within the dyeing unit.
              </p>
            </article>

          </div>

        </section>

        <section className="experience-madegood">

          <div className="experience-madegood-header">

            <div className="experience-madegood-meta">
              <span className="experience-number">02</span>

              <span className="project-type">
                INTERNSHIP · PRODUCTION & DIGITAL
              </span>
            </div>

            <h1>Made Good Clothing</h1>

            <p className="experience-duration">
              JUNE — JULY 2026 · CHENNAI· INTERN
            </p>

          </div>

          <div className="experience-madegood-intro">

            <p>
              My internship at Made Good Clothing gave me exposure to
              garment production and the digital side of a growing
              fashion business.
            </p>

          </div>

          <div className="experience-madegood-grid">

            <article>

              <span className="experience-mini-number">01</span>

              <p className="project-type">PRODUCTION</p>

              <h3>Production & Productivity</h3>

              <p>
                Worked with production targets and actual output,
                observed manufacturing processes and studied factors
                affecting productivity and efficiency.
              </p>

            </article>

            <article>

              <span className="experience-mini-number">02</span>

              <p className="project-type">DIGITAL</p>

              <h3>Website & UI/UX</h3>

              <p>
                Contributed to the development of a website and UI/UX
                direction for an Australian fashion brand preparing
                for launch, exploring how brand identity translates
                into a digital experience.
              </p>

            </article>

          </div>

        </section>

      </div>
    </InnerLayout>
  )
}

export default Experience
