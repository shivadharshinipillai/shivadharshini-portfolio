import InnerLayout from '../components/InnerLayout'

function Contact() {
  return (
    <InnerLayout
      eyebrow=""
      title="Open to opportunities."
    >
      <div className="contact-editorial">
        <p className="contact-intro">
          Currently developing my skills across fashion, technology
          and business, and looking forward to learning through
          meaningful industry experience.
        </p>

        <div className="contact-list">

          <a href="mailto:shivadharshini89@gmail.com" className="contact-row">
            <span className="contact-label">EMAIL</span>
            <span className="contact-value">
              shivadharshini89@gmail.com
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a href="tel:+918637663931" className="contact-row">
            <span className="contact-label">PHONE</span>
            <span className="contact-value">
              +91 86376 63931
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/shivadharshini-r-a-905a04381/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row"
          >
            <span className="contact-label">LINKEDIN</span>
            <span className="contact-value">
              LinkedIn Profile
            </span>
            <span className="contact-arrow">↗</span>
          </a>

        </div>

        <div className="contact-footer">
          <span>FASHION TECHNOLOGY</span>
          <span>INDIA · 2026</span>
        </div>
      </div>
    </InnerLayout>
  )
}

export default Contact
