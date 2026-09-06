import InnerLayout from '../components/InnerLayout'
import AnimatedOwl from '../components/skills/AnimatedOwl'
import PhotographyScene from '../components/skills/PhotographyScene'

const SKILLS = [
  {
    number: '01',
    type: 'photography',
    title: 'Creative',
    skills: ['Photography', 'Video Editing', 'Sketching', 'Visual Storytelling', 'AutoCAD'],
    action: 'CAPTURE · CREATE · TELL',
  },
  {
    number: '02',
    type: 'fashion-industry',
    title: 'Fashion & Industry',
    skills: ['Apparel Production', 'Sourcing & Costing', 'Merchandising', 'Fashion Retail', 'Supply Chain Fundamentals'],
    action: 'SKETCH · DEVELOP · BUILD',
  },
  {
    number: '03',
    type: 'analytics',
    title: 'Business & Analytical',
    skills: ['Market Research', 'Data Analysis', 'MS Excel', 'Problem Solving', 'Decision-Making'],
    action: 'ANALYSE · THINK · DECIDE',
  },
  {
    number: '04',
    type: 'digital',
    title: 'Digital & Web',
    skills: ['Web Development', 'UI/UX Design', 'Shopify', 'Figma', 'Advanced Excel', 'Power BI'],
    action: 'DESIGN · CODE · LAUNCH',
  },
]

function SkillCard({ number, type, title, skills, action }) {
  return (
    <article className={`owl-skill-card skill-card-${type}`}>
      <span className="owl-card-number">{number}</span>

      <div className="skill-animation">
        {type === 'photography' ? (
          <AnimatedOwl scene="photography" />
        ) : (
          <AnimatedOwl scene={type} />
        )}
      </div>

      <div className="owl-skill-info">
        <h2>{title}</h2>

        <div className="owl-divider" />

        <div className="owl-skill-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <p className="owl-action">{action}</p>
      </div>
    </article>
  )
}

function Skills() {
  return (
    <InnerLayout eyebrow="CAPABILITIES" title="Skills">
      <div className="skills-intro">
        <p>Different tools. One curious mind.</p>
        <span>Learning · Creating · Exploring · Always</span>
      </div>

      <section className="owl-skills-grid">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.number} {...skill} />
        ))}
      </section>
    </InnerLayout>
  )
}

export default Skills
