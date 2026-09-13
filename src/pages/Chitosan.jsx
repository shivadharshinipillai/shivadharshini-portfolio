import InnerLayout from '../components/InnerLayout'

function Chitosan() {
  return (
    <InnerLayout
      eyebrow="04 · SUSTAINABILITY · TEXTILE RESEARCH"
      title="Chitosan Fibre"
    >
      <section className="case-study">

        <div className="case-intro">
          <p className="case-lead">
            Exploring chitosan fibre as a sustainable textile material,
            with a focus on its composition, processing and potential
            applications.
          </p>

          <div className="case-meta">
            <div>
              <span>ROLE</span>
              <strong>
                Textile Research · Sustainability Research
              </strong>
            </div>

            <div>
              <span>SUBJECT</span>
              <strong>
                Sustainable Production
              </strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>
                Academic Research Article
              </strong>
            </div>
          </div>
        </div>

        <section className="case-section">
          <p className="section-number">01</p>

          <h2>The Research</h2>

          <p>
            Chitosan fibre is a bio-based fibre derived from chitin,
            a natural polysaccharide found in sources including
            crustacean shells, insect shells and fungi.
          </p>

          <p>
            The research examines the composition and processing of
            chitosan fibre while exploring its potential contribution
            to more sustainable textile production.
          </p>
        </section>

        <section className="case-section">
          <p className="section-number">02</p>

          <h2>Composition & Properties</h2>

          <p>
            Chitosan contains functional groups such as -NH2 and -OH,
            which contribute to properties including antibacterial
            behaviour and moisture absorption.
          </p>

          <p>
            These properties make chitosan particularly interesting
            for textile applications where functionality and
            material sustainability intersect.
          </p>
        </section>

        <section className="case-section">
          <p className="section-number">03</p>

          <h2>Processing</h2>

          <p>
            The production process begins with the recovery and
            preparation of shell waste before converting chitin
            into chitosan and subsequently forming the fibre.
          </p>

          <div className="process-grid">

            <div>
              <span>01</span>
              <h3>Collection</h3>
              <p>
                Crustacean shell waste is collected as the primary
                source material.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Preparation</h3>
              <p>
                The shells are cleaned and crushed before further
                chemical processing.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Conversion</h3>
              <p>
                Deproteinisation, demineralisation and deacetylation
                are used to obtain chitosan.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Fibre Formation</h3>
              <p>
                Chitosan is converted into fibre through wet spinning
                and coagulation.
              </p>
            </div>

          </div>
        </section>

        <section className="case-section">
          <p className="section-number">04</p>

          <h2>Sustainability Role</h2>

          <p>
            One of the key sustainability opportunities is the use
            of seafood-processing waste as a source for fibre
            production, giving value to material that would otherwise
            become waste.
          </p>

          <p>
            The research also considers wet-gel spinning as a
            comparatively lower-energy fibre-forming approach and
            highlights the antibacterial characteristics of chitosan
            as a potentially useful functional property.
          </p>

          <div className="case-list">
            <div>Utilisation of seafood waste</div>
            <div>Bio-based fibre development</div>
            <div>Lower-energy fibre formation potential</div>
            <div>Antibacterial functionality</div>
            <div>Potential reduction of additional chemical treatments</div>
          </div>
        </section>

        <section className="case-section">
          <p className="section-number">05</p>

          <h2>Applications & Limitations</h2>

          <p>
            The research identifies potential applications across
            functional textiles and other material uses, including
            odour-resistant textiles, sportswear and medical
            dressing.
          </p>

          <p>
            However, the material also presents challenges. Low wet
            mechanical strength and difficulties associated with
            large-scale production remain important considerations
            for wider adoption.
          </p>

          <div className="case-list">
            <div>Odour-resistant textiles</div>
            <div>Sportswear</div>
            <div>Medical dressing</div>
            <div>Food storage</div>
            <div>Water purification</div>
          </div>
        </section>

        <section className="case-section">
          <p className="section-number">06</p>

          <h2>Research Takeaway</h2>

          <p>
            Chitosan fibre demonstrates how waste-derived,
            bio-based materials can be explored beyond their
            conventional applications.
          </p>

          <p>
            The research highlights both the sustainability potential
            and the practical limitations of developing chitosan as
            a textile fibre.
          </p>

          <p className="case-note">
            Waste can become a starting point for material innovation.
          </p>
        </section>

      </section>
    </InnerLayout>
  )
}

export default Chitosan
