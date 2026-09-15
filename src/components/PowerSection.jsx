const powers = [
  ['01', 'Wyrmforged Strength', 'A dragon-bound body capable of extraordinary force and endurance.'],
  ['02', 'Aerial Control', 'Kael can decelerate, hover and fly — even when the fall should be fatal.'],
  ['03', 'Infernal Command', 'He can summon and shape fire as an extension of his will.'],
  ['04', 'The Living Blade', 'His sword answers his call and reshapes itself into the weapon the moment demands.'],
  ['05', 'Dragon Armor', 'When the power fully awakens, scales and armor rise over his body like a second skin.'],
  ['06', 'Unbroken', 'The dragon soul makes Kael extraordinarily difficult to injure or stop.'],
]

export default function PowerSection() {
  return (
    <section className="power-section section-pad" id="powers">
      <div className="section-heading section-heading--split">
        <div>
          <span className="eyebrow">THE ARSENAL</span>
          <h2>The power chose <em>the bloodline.</em></h2>
        </div>
        <p>Kael is not a billionaire with a suit. The suit is the surface expression of something much older.</p>
      </div>
      <div className="power-grid">
        {powers.map(([number, title, description]) => (
          <article className="power-card" key={number}>
            <span className="power-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
