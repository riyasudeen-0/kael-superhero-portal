import DragonMark from './DragonMark.jsx'

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Stylized illustration of Kael Veyron wearing Wyrmforged armor">
      <div className="hero-orbit hero-orbit--one" />
      <div className="hero-orbit hero-orbit--two" />
      <div className="hero-aura" />
      <div className="hero-silhouette">
        <div className="hero-head" />
        <div className="hero-shoulders" />
        <div className="hero-body">
          <div className="armor-panel armor-panel--left" />
          <div className="armor-panel armor-panel--right" />
          <div className="armor-core" />
        </div>
        <div className="hero-arm hero-arm--left" />
        <div className="hero-arm hero-arm--right" />
        <div className="hero-cloak" />
        <div className="hero-scale-trace"><DragonMark small /></div>
      </div>
      <div className="sword-glow" />
      <div className="sword">
        <div className="sword-blade" />
        <div className="sword-crossguard" />
        <div className="sword-hilt" />
      </div>
      <div className="hero-caption">
        <span>WYRMFORGED</span>
        <strong>KAEL VEYRON</strong>
      </div>
    </div>
  )
}
