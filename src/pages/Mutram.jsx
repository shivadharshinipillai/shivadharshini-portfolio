import InnerLayout from '../components/InnerLayout'

function Mutram() {
  return (
    <InnerLayout
      eyebrow="02 · RESEARCH · DIGITAL DEVELOPMENT"
      title="Mutram"
    >
      <section className="case-study">

        {/* INTRO */}
        <div className="case-intro">
          <p className="case-lead">
            Developing a digital platform around Athangudi tile heritage,
            craft, premium positioning and international opportunity.
          </p>

          <div className="case-meta">
            <div>
              <span>ROLE</span>
              <strong>
                Research · Website Architecture · UI/UX · Web Development
              </strong>
            </div>

            <div>
              <span>PLATFORM</span>
              <strong>
                PHP · MySQL · Apache · Docker
              </strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>
                Academic Project
              </strong>
            </div>
          </div>

          <a
            className="case-website-link"
            href="https://mutramheritage.free.je/?utm_source=chatgpt.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website ↗
          </a>

        </div>


        {/* 01 — THE PROJECT */}
        <section className="case-section">
          <p className="section-number">01</p>

          <h2>The Project</h2>

          <p>
            Mutram — House of Athangudi explores how a traditional
            South Indian craft can be positioned through a contemporary
            digital platform while retaining its cultural identity.
          </p>

          <p>
            The project brings together craft research, product
            understanding, digital development and market-oriented
            thinking to create a premium B2B architectural-material
            platform.
          </p>
        </section>


        {/* 02 — MY ROLE */}
        <section className="case-section">
          <p className="section-number">02</p>

          <h2>My Role</h2>

          <p>
            I contributed across the research and digital development
            of the project, from understanding the product and its
            positioning to structuring and developing the website.
          </p>

          <div className="case-list">
            <div>Research & product understanding</div>
            <div>Website architecture & structure</div>
            <div>UI / UX development</div>
            <div>Web development</div>
            <div>Market research</div>
            <div>Digital platform development</div>
          </div>
        </section>


        {/* 03 — CRAFT TO DIGITAL */}
        <section className="case-section">
          <p className="section-number">03</p>

          <h2>From Craft to Digital Platform</h2>

          <p>
            The project began with understanding Athangudi tiles as
            both a traditional craft product and a contemporary
            architectural material.
          </p>

          <p>
            The website was structured to communicate heritage,
            product value and commercial relevance rather than
            presenting the craft only as a cultural artefact.
          </p>

          <div className="process-grid">

            <div>
              <span>01</span>
              <h3>Heritage</h3>
              <p>
                Understanding the cultural and craft significance
                of Athangudi tiles.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Product</h3>
              <p>
                Translating product characteristics into a
                digital catalogue experience.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Experience</h3>
              <p>
                Structuring navigation and information for
                contemporary users.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Platform</h3>
              <p>
                Developing the website as a functional digital
                platform.
              </p>
            </div>

          </div>
        </section>


        {/* 04 — RESEARCH & MARKET */}
        <section className="case-section">
          <p className="section-number">04</p>

          <h2>Research & Market Opportunity</h2>

          <p>
            The wider study explored international opportunities
            for Athangudi tiles, including markets such as Singapore,
            Malaysia and the UAE.
          </p>

          <p>
            The research considered market justification,
            authenticity, GI and certification, pricing and margins,
            export costing, payment terms, Incoterms and an export
            roadmap.
          </p>

          <div className="case-list">
            <div>International market opportunity</div>
            <div>Authenticity & certification</div>
            <div>Pricing & margins</div>
            <div>Export costing</div>
            <div>Payment terms</div>
            <div>Incoterms & export planning</div>
          </div>
        </section>


        {/* 05 — DIGITAL DEVELOPMENT */}
        <section className="case-section">
          <p className="section-number">05</p>

          <h2>Digital Development</h2>

          <p>
            Mutram was developed as a functional website rather than
            only a visual prototype. The platform includes product
            categories, a product catalogue, testimonials, contact
            functionality and an administrative backend connected
            to a database.
          </p>

          <div className="tech-row">
            <span>PHP</span>
            <span>MySQL</span>
            <span>Apache</span>
            <span>Docker</span>
            <span>phpMyAdmin</span>
          </div>
        </section>


        {/* 06 — DESIGN BEYOND INTERFACE */}
        <section className="case-section">
          <p className="section-number">06</p>

          <h2>Designing Beyond the Interface</h2>

          <p>
            The project connects cultural storytelling with practical
            commercial information. The objective was to make the
            heritage product easier to understand, discover and
            position for a contemporary audience.
          </p>

          <p className="case-note">
            Tradition becomes more valuable when it can be understood
            in a contemporary context.
          </p>
        </section>



      </section>
    </InnerLayout>
  )
}

export default Mutram