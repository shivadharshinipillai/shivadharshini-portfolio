export function SectionNav({ phase }) {
  const visible = phase === 'idle'

  return (
    <>
      <div className="landing-journey-mark" style={{ opacity: visible ? 0.85 : 0 }}>
        <span>A JOURNEY IN PROGRESS</span>
        <span className="landing-journey-diamond" aria-hidden="true" />
      </div>

      <div className="landing-select-hint" style={{ opacity: visible ? 0.75 : 0 }}>
        SELECT A DESTINATION
        <span className="landing-select-hint-line" aria-hidden="true" />
      </div>
    </>
  )
}
