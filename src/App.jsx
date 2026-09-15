import Chatbot from './components/Chatbot.jsx'
import HeroVisual from './components/HeroVisual.jsx'
import PowerSection from './components/PowerSection.jsx'
import StorySection from './components/StorySection.jsx'

function App() {
  return (
    <div className="site-shell">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Wyrmforged home">
          <span className="brand-mark">W</span>
          <span>WYRMFORGED</span>
        </a>
        <nav>
          <a href="#story">Origin</a>
          <a href="#powers">Powers</a>
          <a href="#contact">Ask for Help</a>
        </nav>
        <a className="nav-cta" href="#contact">ENTER PORTAL ↗</a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">A HERO FOR THE CALLING</span>
            <h1>When the world<br /><span>falls apart,</span><br />call Kael.</h1>
            <p className="hero-lede">Born into privilege. Marked as an outcast. Bound to the soul of a dragon. Kael Veyron listens when ordinary systems fail.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#contact">Tell him what happened <span>↗</span></a>
              <a className="button button--ghost" href="#story">Discover the legend</a>
            </div>
            <div className="hero-meta">
              <span><b>01</b> BLOODLINE</span>
              <span><b>06</b> ABILITIES</span>
              <span><b>24/7</b> PORTAL</span>
            </div>
          </div>
          <HeroVisual />
        </section>

        <section className="quote-strip">
          <div className="quote-mark">“</div>
          <p>I don't promise to fix everything. I promise I will listen — and I will not look away.</p>
          <span>— KAEL VEYRON</span>
        </section>

        <StorySection />
        <PowerSection />

        <section className="portal-section section-pad" id="ask">
          <div className="portal-heading">
            <span className="eyebrow">THE HELP PORTAL</span>
            <h2>Your problem doesn't need to look <em>super.</em></h2>
            <p>Tell Kael what is going on. The conversation collects only the details needed to understand your request, then sends the completed case to his desk.</p>
          </div>
          <Chatbot />
        </section>
      </main>

      <footer className="site-footer">
        <div><span className="brand-mark">W</span><strong>WYRMFORGED</strong></div>
        <p>Fictional character &amp; concept created for the TechAscent machine test.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
