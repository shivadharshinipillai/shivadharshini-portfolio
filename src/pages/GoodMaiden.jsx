import InnerLayout from '../components/InnerLayout'

function GoodMaiden() {
  return (
    <InnerLayout
      eyebrow="01 · E-COMMERCE · UI/UX · DEVELOPMENT"
      title="Good Maiden"
    >
      <section className="case-study">

        {/* INTRO */}
        <div className="case-intro">
          <p className="case-lead">
            Building a luxury women’s fashion e-commerce experience
            from architecture to interface and web development.
          </p>

          <div className="case-meta">
            <div>
              <span>ROLE</span>
              <strong>
                E-commerce Intern — UI/UX & Web Development
              </strong>
            </div>

            <div>
              <span>PLATFORM</span>
              <strong>
                Shopify + Custom Development
              </strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>
                In Development
              </strong>
            </div>
          </div>
        </div>


        {/* 01 — THE PROJECT */}
        <section className="case-section">
          <p className="section-number">01</p>

          <h2>The Project</h2>

          <p>
            Good Maiden is a luxury women’s fashion e-commerce project
            focused on creating a refined digital experience for the brand.
            The website is being developed from the ground up, beginning
            with information architecture and user flows and extending
            through UI/UX and web development.
          </p>
        </section>


        {/* 02 — MY ROLE */}
        <section className="case-section">
          <p className="section-number">02</p>

          <h2>My Role</h2>

          <p>
            I worked across the digital development of the project,
            translating the brand direction into the structure and
            experience of the website.
          </p>

          <div className="case-list">
            <div>Information architecture</div>
            <div>Website structure & navigation</div>
            <div>User flows</div>
            <div>UI/UX design</div>
            <div>Shopify development</div>
            <div>Custom web development</div>
            <div>AI-assisted visual creation</div>
          </div>
        </section>


        {/* 03 — INFORMATION ARCHITECTURE */}
        <section className="case-section architecture-section">
          <p className="section-number">03</p>

          <h2>From Architecture to Experience</h2>

          <p>
            The project began before visual design. I first structured how
            the website should be organised, how users would move through
            the experience, and how the different parts of the e-commerce
            journey would connect.
          </p>

          <p>
            The architecture mapped key journeys across discovery, product
            selection, cart and checkout, including category navigation,
            filters, sorting, size and colour selection, and recommended
            products.
          </p>

          <div className="architecture-visual">
            <img
              src="/good-maiden/website-architecture.png"
              alt="Good Maiden website information architecture and user flow"
            />
          </div>

          <div className="architecture-caption">
            <span>GOOD MAIDEN</span>
            <span>INFORMATION ARCHITECTURE · USER FLOW</span>
          </div>

          <div className="process-grid">

            <div>
              <span>01</span>
              <h3>Architecture</h3>

              <p>
                Structuring the website and defining key sections,
                hierarchy and navigation.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>User Flows</h3>

              <p>
                Mapping how a customer moves through the shopping
                experience.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>UI / UX</h3>

              <p>
                Translating the structure into a refined,
                fashion-focused interface.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Development</h3>

              <p>
                Turning the designed experience into a
                Shopify-based website.
              </p>
            </div>

          </div>
        </section>


        {/* 04 — UI / UX DESIGN */}
        <section className="case-section visual-section">
          <p className="section-number">04</p>

          <h2>UI / UX Design</h2>

          <p>
            With the structure and user journeys established, I translated
            the architecture into the visual interface of the Good Maiden
            e-commerce experience.
          </p>

          <p>
            The design focused on clear navigation, product discovery,
            category browsing and a refined visual language appropriate
            for a luxury fashion brand.
          </p>

          <div className="visual-grid">

            <div className="visual-frame large">
              <img
                src="/good-maiden/ui-home.png"
                alt="Good Maiden homepage UI design"
              />
            </div>

            <div className="visual-frame">
              <img
                src="/good-maiden/ui-product.png"
                alt="Good Maiden product and cart experience UI"
              />
            </div>

          </div>

          <div className="visual-caption">
            <span>GOOD MAIDEN</span>
            <span>UI / UX · E-COMMERCE EXPERIENCE</span>
          </div>
        </section>


        {/* 05 — AI VISUAL DEVELOPMENT */}
        <section className="case-section">
          <p className="section-number">05</p>

          <h2>AI-Assisted Visual Development</h2>

          <p>
            For product presentation, I worked from the supplied fabric
            print and the desired model and background direction.
            I developed prompts to generate visual assets aligned
            with the intended brand aesthetic.
          </p>

          <p>
            This allowed the visual direction to be explored alongside
            the website design rather than treating imagery as an
            afterthought.
          </p>
        </section>


        {/* 06 — DEVELOPMENT */}
        <section className="case-section">
          <p className="section-number">06</p>

          <h2>Development</h2>

          <p>
            The website is being developed using Shopify with custom
            development. The current work focuses on translating the
            planned architecture and UI into the actual e-commerce
            experience.
          </p>

          <div className="tech-row">
            <span>SHOPIFY</span>
            <span>CUSTOM CODE</span>
            <span>UI / UX</span>
            <span>WEB DEVELOPMENT</span>
          </div>
        </section>


        {/* 07 — PROJECT APPROACH */}
        <section className="case-section">
          <p className="section-number">07</p>

          <h2>Designing Beyond the Interface</h2>

          <p>
            The project allowed me to work across both creative and
            technical aspects of digital fashion. Rather than treating
            the website as only a visual interface, I approached it as
            an interconnected experience involving structure, navigation,
            product presentation and development.
          </p>

          <p>
            This process helped connect my understanding of fashion,
            e-commerce and technology within a single project.
          </p>
        </section>


        {/* 08 — CURRENT STATUS */}
        <section className="case-section case-final">
          <p className="section-number">08</p>

          <h2>Current Status</h2>

          <p>
            The project is currently in development. The experience,
            architecture and visual direction have been established,
            with the website continuing toward its final front-end
            implementation.
          </p>

          <p className="case-note">
            A work in progress — documented as it develops.
          </p>
        </section>

      </section>
    </InnerLayout>
  )
}

export default GoodMaiden