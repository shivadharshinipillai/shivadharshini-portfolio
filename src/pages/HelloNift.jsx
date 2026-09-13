import InnerLayout from '../components/InnerLayout'

function HelloNift() {
  return (
    <InnerLayout
      eyebrow="05 · ENTREPRENEURSHIP · PRODUCT DESIGN · FULL-STACK DEVELOPMENT"
      title="Hello NIFT"
    >
      <section className="case-study">

        <div className="case-intro">
          <p className="case-lead">
            A student-focused campus marketplace designed to help NIFT
            creators showcase and sell handmade products within their
            campus community.
          </p>

          <div className="case-meta">
            <div>
              <span>ROLE</span>
              <strong>
                Product Concept · Information Architecture · UI/UX ·
                Full-Stack Development
              </strong>
            </div>

            <div>
              <span>PLATFORM</span>
              <strong>
                Flutter · Dart · Supabase
              </strong>
            </div>

            <div>
              <span>CONTEXT</span>
              <strong>
                Entrepreneurship Academic Project
              </strong>
            </div>
          </div>

          <a
            className="case-website-link"
            href="https://test-app-navy-mu.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            View App ↗
          </a>
        </div>

        <section className="case-section">
          <p className="section-number">01</p>

          <h2>What is Hello NIFT?</h2>

          <p>
            Hello NIFT is a student-focused marketplace created to
            connect NIFT creators with buyers within the campus
            community.
          </p>

          <p>
            The platform was developed as part of an Entrepreneurship
            academic project, where the objective was to explore an
            idea for a campus-based business and turn it into a
            functional digital product.
          </p>
        </section>

        <section className="case-section">
          <p className="section-number">02</p>

          <h2>Why I Created It</h2>

          <p>
            NIFT has a large creative student community where people
            create products such as crochet pieces, clay art and other
            handmade products.
          </p>

          <p>
            I saw an opportunity to create a dedicated digital space
            where these student creators could showcase their work
            and connect with potential buyers within the campus
            community.
          </p>

          <p className="case-note">
            Turning student creativity into a campus marketplace.
          </p>
        </section>

        <section className="case-section">
          <p className="section-number">03</p>

          <h2>The Product Idea</h2>

          <p>
            Instead of creating a general marketplace, the concept
            focuses on a specific community — NIFT students.
          </p>

          <div className="process-grid">

            <div>
              <span>01</span>
              <h3>Create</h3>
              <p>
                Students create handmade or creative products that
                can be offered to the campus community.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Showcase</h3>
              <p>
                Creators get a digital space to present their
                products to potential buyers.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Connect</h3>
              <p>
                Buyers and creators can discover each other within
                a focused student ecosystem.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Grow</h3>
              <p>
                The platform explores how student creativity can
                develop into small campus businesses.
              </p>
            </div>

          </div>
        </section>

        <section className="case-section">
          <p className="section-number">04</p>

          <h2>Who Can Access It?</h2>

          <p>
            Hello NIFT is designed specifically for the NIFT
            community rather than as an open public marketplace.
          </p>

          <p>
            I implemented NIFT email verification to create a more
            focused and trusted environment for students using the
            platform.
          </p>

          <div className="case-list">
            <div>NIFT student community</div>
            <div>NIFT email verification</div>
            <div>Student creators</div>
            <div>Student buyers</div>
          </div>
        </section>

        <section className="case-section">
          <p className="section-number">05</p>

          <h2>From Idea to Product</h2>

          <p>
            I developed Hello NIFT from scratch, taking the project
            from the initial business concept through information
            architecture, user experience and technical development.
          </p>

          <div className="case-list">
            <div>Business concept</div>
            <div>Information architecture</div>
            <div>User flows</div>
            <div>UI / UX design</div>
            <div>Frontend development</div>
            <div>Backend development</div>
            <div>Authentication</div>
            <div>Database integration</div>
            <div>Deployment</div>
          </div>
        </section>

        <section className="case-section">
          <p className="section-number">06</p>

          <h2>Technology</h2>

          <p>
            The application was developed using Flutter and Dart,
            with Supabase used for backend and database
            functionality.
          </p>

          <div className="tech-row">
            <span>Flutter</span>
            <span>Dart</span>
            <span>Supabase</span>
          </div>
        </section>

        <section className="case-section">
          <p className="section-number">07</p>

          <h2>Payment Approach</h2>

          <p>
            The current version does not include an integrated
            payment gateway.
          </p>

          <p>
            This keeps the project focused on exploring the core
            campus marketplace concept and the interaction between
            student creators and buyers, rather than building a
            complete commercial payment infrastructure.
          </p>
        </section>

        <section className="case-section">
          <p className="section-number">08</p>

          <h2>Project Outcome</h2>

          <p>
            Hello NIFT allowed me to take an entrepreneurship idea
            beyond a business concept and turn it into a working
            digital product.
          </p>

          <p>
            The project gave me practical experience across the
            complete product-development cycle — from identifying
            an opportunity and structuring the user experience to
            designing, developing and deploying the platform.
          </p>

          <p className="case-note">
            A campus business idea, developed into a working digital product.
          </p>
        </section>

        <section className="case-section case-section-final">
          <p className="section-number">09</p>

          <h2>Explore Hello NIFT</h2>

          <p>
            Experience the working prototype of the platform.
          </p>

          <a
            className="case-website-link"
            href="https://test-app-navy-mu.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            View App ↗
          </a>
        </section>

      </section>
    </InnerLayout>
  )
}

export default HelloNift
