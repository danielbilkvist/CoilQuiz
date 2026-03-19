import './CoilLanding.css'
import heroImg from '../assets/hero.png'

export default function CoilLanding() {
  return (
    <div className="coil">
      <header className="coilHeader">
        <div className="coilBrand" aria-label="COIL">
          <span className="coilBrandMark" aria-hidden="true" />
          <span className="coilBrandName">COIL</span>
        </div>

        <nav className="coilNav" aria-label="Primary">
          <a className="coilNavLink" href="#how-it-works">
            How it works
          </a>
          <a className="coilNavLink" href="#quiz">
            Quiz
          </a>
          <a className="coilNavLink" href="#about">
            About
          </a>
        </nav>

        <div className="coilHeaderCtas">
          <a className="coilBtn coilBtnGhost" href="#quiz">
            Take quiz
          </a>
          <a className="coilBtn coilBtnPrimary" href="#quiz">
            Get started
          </a>
        </div>
      </header>

      <main className="coilMain">
        <section className="coilHero" aria-label="Intro">
          <div className="coilHeroCopy">
            <p className="coilKicker">High-voltage learning, simplified</p>
            <h1 className="coilTitle">CoilQuiz</h1>
            <p className="coilSubtitle">
              Study coil fundamentals with short, focused questions. Track your
              progress and build confidence fast.
            </p>
            <div className="coilHeroActions">
              <a className="coilBtn coilBtnPrimary" href="#quiz">
                Start a quiz
              </a>
              <a className="coilBtn coilBtnGhost" href="#how-it-works">
                See how it works
              </a>
            </div>

            <dl className="coilStats" aria-label="Highlights">
              <div className="coilStat">
                <dt>Fast</dt>
                <dd>2–5 min sessions</dd>
              </div>
              <div className="coilStat">
                <dt>Focused</dt>
                <dd>One concept at a time</dd>
              </div>
              <div className="coilStat">
                <dt>Clear</dt>
                <dd>Immediate feedback</dd>
              </div>
            </dl>
          </div>

          <div className="coilHeroArt" aria-hidden="true">
            <div className="coilGlow" />
            <img className="coilHeroImg" src={heroImg} alt="" />
          </div>
        </section>

        <section id="how-it-works" className="coilSection">
          <h2 className="coilSectionTitle">How it works</h2>
          <div className="coilGrid3">
            <article className="coilCard">
              <h3 className="coilCardTitle">Pick a topic</h3>
              <p className="coilCardBody">
                Choose fundamentals, safety, calculations, or troubleshooting.
              </p>
            </article>
            <article className="coilCard">
              <h3 className="coilCardTitle">Answer quickly</h3>
              <p className="coilCardBody">
                Short questions that reinforce the exact concept you’re learning.
              </p>
            </article>
            <article className="coilCard">
              <h3 className="coilCardTitle">Review & repeat</h3>
              <p className="coilCardBody">
                Spot weak areas and run another set until it sticks.
              </p>
            </article>
          </div>
        </section>

        <section id="quiz" className="coilSection coilQuizCta">
          <div className="coilQuizCtaInner">
            <div>
              <h2 className="coilSectionTitle">Ready to start?</h2>
              <p className="coilSectionSubtitle">
                This is a UI shell for now—wire up real quiz routes/state next.
              </p>
            </div>
            <div className="coilQuizCtas">
              <button className="coilBtn coilBtnPrimary" type="button">
                Start quiz
              </button>
              <button className="coilBtn coilBtnGhost" type="button">
                Practice mode
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer id="about" className="coilFooter">
        <p className="coilFooterText">© {new Date().getFullYear()} COIL</p>
      </footer>
    </div>
  )
}

