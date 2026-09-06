import { useNavigate } from 'react-router-dom'
import InnerLayout from '../components/InnerLayout'

const projects = [
  {
    number: '01',
    category: 'E-COMMERCE · UI/UX · DEVELOPMENT',
    title: 'Good Maiden',
    description:
      'Luxury women’s fashion e-commerce experience developed from architecture and user flows through UI and web development.',
    status: 'IN DEVELOPMENT',
    path: '/work/good-maiden',
  },
  {
    number: '02',
    category: 'RESEARCH · DIGITAL DEVELOPMENT',
    title: 'Mutram',
    description:
      'Digital development and research around Athangudi tiles, craft, premium positioning and international opportunity.',
    status: 'PROJECT',
    path: '/work/mutram',
  },
  {
    number: '03',
    category: 'SOURCING · COSTING · ANALYSIS',
    title: 'Turkey × Morocco',
    description:
      'Comparative sourcing research examining markets, costing and production considerations.',
    status: 'PROJECT',
    path: '/work/turkey-morocco',
  },
]

function Work() {
  const navigate = useNavigate()

  return (
    <InnerLayout
      eyebrow="SELECTED WORK"
      title="Projects"
    >
      <p className="page-intro">
        A selection of work across fashion, e-commerce, sourcing,
        research and digital development.
      </p>

      <section className="project-grid">
        {projects.map((project) => (
          <button
            key={project.number}
            className="project-card"
            onClick={() => navigate(project.path)}
          >
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-content">
              <p className="project-category">
                {project.category}
              </p>

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-footer">
                <span>{project.status}</span>
                <span className="project-arrow">↗</span>
              </div>
            </div>
          </button>
        ))}
      </section>
    </InnerLayout>
  )
}

export default Work
