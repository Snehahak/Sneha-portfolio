import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CaseStudyLifeLog() {
  return (
    <>
      <Navbar />
      <div className="case-study-page">
        <div className="case-hero">
          <Link to="/" className="case-back"><ArrowLeft size={16} /> Back to Work</Link>
          <span className="work-tag">Productivity &amp; Wellbeing</span>
          <h1>LifeLog Mobile App</h1>
          <p>A comprehensive productivity and wellbeing tracking mobile application that integrates task management, expense tracking, mood logging, gratitude journaling, and AI-powered insights into one seamless experience.</p>
        </div>
        <div className="case-body">
          <h2>The Problem</h2>
          <p>Users struggle to maintain consistency across multiple productivity and wellbeing apps. The fragmented experience leads to app fatigue, inconsistent tracking, and missed opportunities for insights that could improve daily life.</p>
          <h2>Research</h2>
          <p>I conducted user interviews with 15 participants aged 22–35 who regularly use productivity apps. Key findings revealed that 80% use 3+ apps for different tracking purposes, 65% abandon apps within the first month, and 90% wished for AI-powered insights.</p>
          <div className="insights-grid">
            {['Users want consolidation without complexity','Privacy concerns around mood and financial data','Desire for actionable insights, not just data visualization','Need for quick daily check-ins under 2 minutes'].map((ins, i) => (
              <div className="insight-card" key={i}>
                <div className="insight-num">{i + 1}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-mid)' }}>{ins}</p>
              </div>
            ))}
          </div>
          <h2>Design Process</h2>
          <div className="process-steps">
            {[{title:'Empathize',desc:'User interviews, surveys, and competitive analysis'},{title:'Define',desc:'Created user personas and journey maps'},{title:'Ideate',desc:'Brainstorming sessions and feature prioritization'},{title:'Prototype',desc:'Low-fi wireframes to high-fidelity prototypes'},{title:'Test',desc:'Usability testing with 10 participants'}].map((step, i) => (
              <div className="process-step" key={i}>
                <div className="step-dot">{i + 1}</div>
                <div className="step-text"><h4>{step.title}</h4><p>{step.desc}</p></div>
              </div>
            ))}
          </div>
          <h2>Key Features</h2>
          <div className="features-grid">
            {['Task Management with smart prioritization','Expense tracking with budget insights','Mood logging with pattern recognition','Gratitude journaling prompts','AI-powered weekly insights and suggestions'].map((f, i) => (
              <div className="feature-card" key={i}>{f}</div>
            ))}
          </div>
          <div className="outcome-block">
            <h2 style={{ fontSize: '1.4rem', marginBottom: 16, marginTop: 0 }}>Outcome</h2>
            <p>The final design achieved a 92% task completion rate in usability testing. Users reported feeling more in control of their daily routines and appreciated the non-judgmental approach to wellbeing tracking.</p>
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