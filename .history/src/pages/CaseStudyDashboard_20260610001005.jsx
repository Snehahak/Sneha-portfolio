import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CaseStudyDashboard() {
  return (
    <>
      <Navbar />
      <div className="case-study-page">
        <div className="case-hero">
          <Link to="/" className="case-back"><ArrowLeft size={16} /> Back to Work</Link>
          <span className="work-tag">Product Design</span>
          <h1>Personal Dashboard App</h1>
          <p>An all-in-one personal dashboard concept featuring to-do tracking, expense monitoring, mood tracking, gratitude journal, and AI-based suggestions for daily optimization.</p>
        </div>
        <div className="case-body">
          <h2>Overview</h2>
          <p>The Personal Dashboard App was designed to give users a single glanceable view of their daily life — tasks, spending, mood, and intentions — without the cognitive overhead of switching between multiple apps.</p>
          <h2>Research</h2>
          <p>Research highlighted that professionals spend an average of 23 minutes per day switching between apps. The dashboard concept was born from the insight that a unified view reduces decision fatigue.</p>
          <div className="insights-grid">
            {['App-switching costs significant cognitive load','Users want a "morning dashboard" ritual','Spending and mood data are rarely connected','Customization is key for long-term adoption'].map((ins, i) => (
              <div className="insight-card" key={i}>
                <div className="insight-num">{i + 1}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-mid)' }}>{ins}</p>
              </div>
            ))}
          </div>
          <h2>Design Process</h2>
          <div className="process-steps">
            {[{title:'Empathize',desc:'Diary studies and contextual inquiry with 12 users'},{title:'Define',desc:'Identified the "fragmented day" as core pain point'},{title:'Ideate',desc:'Sketched 20+ dashboard layouts; ran dot-voting session'},{title:'Prototype',desc:'Interactive Figma prototype with 4 widget modules'},{title:'Test',desc:'Guerrilla testing with 8 participants over 2 weeks'}].map((step, i) => (
              <div className="process-step" key={i}>
                <div className="step-dot">{i + 1}</div>
                <div className="step-text"><h4>{step.title}</h4><p>{step.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="outcome-block">
            <h2 style={{ fontSize: '1.4rem', marginBottom: 16, marginTop: 0 }}>Outcome</h2>
            <p>Prototype testing showed users completed their morning planning routine 40% faster compared to using multiple apps. 9 out of 10 testers said they would use this dashboard daily.</p>
          </div>
        </div>
        <div className="case-cta">
          <h2>Interested in working together?</h2>
          <div className="btn-group">
            <Link to="/#contact" className="btn-primary">Get in Touch</Link>
            <Link to="/" className="btn-secondary">View More Work</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}