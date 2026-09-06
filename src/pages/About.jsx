import InnerLayout from '../components/InnerLayout'

function About() {
  return (
    <InnerLayout eyebrow="" title="">
      <div className="about-editorial">

        <section className="about-editorial-top">
          <div className="about-image-collage">
            <figure className="about-image about-image-tall">
              <img
                src="/about/about-thinking.jpg"
                alt="Working at a laptop"
              />
            </figure>

            <div className="about-image-stack">
              <figure className="about-image about-image-small">
                <img
                  src="/about/about-photography.jpg"
                  alt="Photography"
                />
              </figure>

              <figure className="about-image about-image-small">
                <img
                  src="/about/about-portrait.jpg"
                  alt="Portrait"
                />
              </figure>
            </div>
          </div>

          <div className="about-editorial-intro">
            <h2>
              Curious by nature.
              <br />
              Adaptable by choice.
            </h2>

            <p className="about-editorial-lead">
              I am a Fashion Technology student with a strong interest in
              exploring the connection between fashion, technology, business
              and creativity.
            </p>

            <p>
              I enjoy learning new things, understanding how processes work
              and taking on opportunities that challenge me to think
              differently. I am naturally curious, adaptable and enthusiastic
              about developing new skills across both creative and technical
              areas.
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
              interests extend from fashion and manufacturing to digital
              tools, coding, photography and creative practices, giving me the
              opportunity to look at problems from different perspectives. I
              particularly enjoy situations where I can combine
              <strong> creative thinking with logical problem-solving</strong>
              and contribute to something meaningful.
            </p>

            <p>
              As I continue developing professionally, I look forward to
              gaining industry experience, learning from new environments and
              exploring possibilities at the intersection of
              <strong> fashion, technology and business.</strong>
            </p>
          </div>
        </section>



      </div>
    </InnerLayout>
  )
}

export default About
