import InnerLayout from '../components/InnerLayout'

function Learning() {
  return (
    <InnerLayout
      eyebrow=""
      title="Still becoming."
    >
      <div className="learning-editorial">
        <p className="learning-intro">
          I like learning tools that help me understand both the
          business and technical side of a problem.
        </p>

        <div className="learning-cards">
          <article className="learning-card">
            <span className="learning-number">01</span>
            <h2>SAP MM</h2>
            <p>
              Building an understanding of materials management
              and enterprise processes.
            </p>
          </article>

          <article className="learning-card">
            <span className="learning-number">02</span>
            <h2>Power BI</h2>
            <p>
              Learning to turn business data into clear and
              useful visual insights.
            </p>
          </article>

          <article className="learning-card">
            <span className="learning-number">03</span>
            <h2>JavaScript</h2>
            <p>
              Strengthening front-end development and interactive
              digital experiences.
            </p>
          </article>

          <article className="learning-card">
            <span className="learning-number">04</span>
            <h2>Data Analytics</h2>
            <p>
              Developing a stronger analytical approach to
              understanding business decisions.
            </p>
          </article>
        </div>
      </div>
    </InnerLayout>
  )
}

export default Learning
