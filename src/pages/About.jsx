import InnerLayout from '../components/InnerLayout'

function About() {
  return (
    <InnerLayout eyebrow="" title="">
      <div className="about-editorial">

        <section className="about-editorial-top">

          <figure className="about-image about-image-portrait">
            <img
              src="/about/about-portrait.jpg"
              alt="Shivadharshini"
            />
          </figure>

          <div className="about-editorial-intro">
            <h2>
              Curious by nature.
              <br />
              Adaptable by choice.
            </h2>

            <p className="about-editorial-lead">
              I am a fourth-year Fashion Technology (BFTech) student at NIFT
              Bhubaneswar, with a strong interest in the intersection of
              fashion, technology, business and retail.
            </p>

            <p>
              Alongside my core Fashion Technology education, I am pursuing an
              interdisciplinary minor in Fashion Management (MFM), which has
              helped me develop a stronger understanding of retail, consumer
              behaviour, merchandising and the business side of fashion.
            </p>

            <p>
              I enjoy learning new things, understanding how processes work
              and taking on opportunities that challenge me to think
              differently. My academic journey has allowed me to explore both
              the technical and creative sides of fashion while building an
              interest in how digital tools, data and business thinking can
              support better decisions.
            </p>
          </div>

        </section>

        <section className="about-editorial-bottom">

          <div className="about-editorial-statement">

            <p>
              My approach is driven by <strong>curiosity, enthusiasm and a
              willingness to learn.</strong> I enjoy exploring unfamiliar
              subjects, experimenting with new ideas and developing my
              understanding through research and practical experience. My
              interests extend across fashion, manufacturing, retail, digital
              tools, coding, photography and creative practices, allowing me
              to look at problems from different perspectives.
            </p>

            <p>
              As I continue developing professionally, I am particularly
              interested in opportunities where <strong>fashion, technology,
              retail and business</strong> come together. I look forward to
              gaining industry experience, contributing to meaningful work
              and continuing to learn from real-world environments.
            </p>

          </div>

        </section>

      </div>
    </InnerLayout>
  )
}

export default About
