export default function StorySection() {
  return (
    <section className="story-section section-pad" id="story">
      <div className="section-heading">
        <span className="eyebrow">THE BLOODLINE</span>
        <h2>A mark they mocked. <em>A power they feared.</em></h2>
      </div>
      <div className="story-grid">
        <article className="story-card story-card--large">
          <span className="story-number">01</span>
          <h3>The Outcast</h3>
          <p>Kael grew up surrounded by wealth, yet one strange scale-like mark across his back made him the family anomaly. He learned early that money can buy silence, not belonging.</p>
        </article>
        <article className="story-card">
          <span className="story-number">02</span>
          <h3>The Fall</h3>
          <p>Betrayed on a rooftop by the cousin he trusted most, Kael fell — and something inside his bloodline finally answered.</p>
        </article>
        <article className="story-card">
          <span className="story-number">03</span>
          <h3>The Wyrm</h3>
          <p>In a coma, Kael saw the first warrior shatter a dragon's gem. A fragment of the dragon's soul bonded to that warrior, creating a supernatural bloodline.</p>
        </article>
        <article className="story-card">
          <span className="story-number">04</span>
          <h3>The Calling</h3>
          <p>Strength. Flight. Fire. Invulnerability. A living sword. The old power is awake — and the people hunting the dragon have found its heir.</p>
        </article>
      </div>
    </section>
  )
}
