import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CaseStudyRecipe() {
  return (
    <>
      <Navbar />
      <div className="case-study-page">
        <div className="case-hero">
          <Link to="/" className="case-back"><ArrowLeft size={16} /> Back to Work</Link>
          <span className="work-tag">Community &amp; Culture</span>
          <h1>Cultural Recipe Storytelling</h1>
          <p>A recipe app celebrating global cuisines through cultural storytelling, community contributions, and recognition badges that honor culinary heritage.</p>
        </div>
        <div className="case-body">
          <h2>The Problem</h2>
          <p>Mainstream recipe apps strip cultural context from dishes, reducing them to mere ingredient lists. This erases the stories, traditions, and communities behind food.</p>
          <h2>Research</h2>
          <p>Interviews with 20 participants from diverse cultural backgrounds revealed a shared frustration: their grandmother's recipes felt "wrong" when compared to algorithmic versions online.</p>
          <div className="insights-grid">
            {['Food is identity — recipes carry cultural memory','Users want to share, not just consume','Recognition and attribution matter deeply','Community moderation beats algorithmic curation'].map((ins, i) => (
              <div className="insight-card" key={i}>
                <div className="insight-num">{i + 1}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-mid)' }}>{ins}</p>
              </div>
            ))}
          </div>
          <h2>Design Process</h2>
          <div className="process-steps">
            {[{title:'Empathize',desc:'Cultural probes and in-home cooking observation sessions'},{title:'Define',desc:'Defined "culinary heritage preservation" as north star'},{title:'Ideate',desc:'Co-design workshops with community members'},{title:'Prototype',desc:'Story-first recipe cards with badge system'},{title:'Test',desc:'Longitudinal study over 3 weeks with 6 families'}].map((step, i) => (
              <div className="process-step" key={i}>
                <div className="step-dot">{i + 1}</div>
                <div className="step-text"><h4>{step.title}</h4><p>{step.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="outcome-block">
            <h2 style={{ fontSize: '1.4rem', marginBottom: 16, marginTop: 0 }}>Outcome</h2>
            <p>Testers uploaded 3x more recipes compared to a baseline recipe app, and 85% said the "cultural story" feature made them feel their heritage was respected.</p>
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