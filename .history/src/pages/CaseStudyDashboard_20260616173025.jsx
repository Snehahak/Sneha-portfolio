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
          <span className="work-tag">AI & Student Experience</span>
          <h1>Clarkie</h1>
          <p>
            An AI-powered chatbot designed for Clark University — helping students navigate campus life,
            find resources, and get answers instantly, while also welcoming prospective students exploring Clark.
          </p>
        </div>

        <div className="case-body">
          <h2>The Problem</h2>
          <p>
            Clark University students often struggle to find the right resources quickly — whether it's
            locating a building, understanding a policy, or dealing with academic stress. Meanwhile,
            prospective students have no easy way to explore Clark beyond static web pages.
            There was a need for a single, intelligent point of contact that could serve both audiences.
          </p>

          <h2>What is Clarkie?</h2>
          <p>
            Clarkie is an AI-powered conversational assistant for Clark University. Current students can
            log in using their Clark credentials to access personalized resources — from academic help
            to mental wellness support. Prospective students and the public can also use Clarkie to
            learn about Clark's programs, campus, and admissions process through natural conversation.
          </p>
          <div className="insights-grid">
            {[
              'Students can log in with Clark credentials for personalized help',
              'Ask anything — academics, events, policies, mental health',
              'Interactive campus map with directions to any location',
              'Public access for prospective students exploring Clark',
              'Write down frustrations — Clarkie helps find solutions',
              'Some resources are exclusive to verified Clark students',
            ].map((ins, i) => (
              <div className="insight-card" key={i}>
                <div className="insight-num">{i + 1}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-mid)' }}>{ins}</p>
              </div>
            ))}
          </div>

          <h2>Research</h2>
          <p>
            We conducted surveys and interviews with 25 Clark students across different years and
            departments. Key pain points included difficulty finding offices and buildings, not knowing
            who to contact for specific problems, and feeling overwhelmed during stressful periods
            with no easy outlet or guidance.
          </p>
          <p>
            We also interviewed 10 prospective students who said the Clark website felt hard to
            navigate and they wished they could just "ask someone" rather than dig through pages.
          </p>

          <h2>Design Process</h2>
          <div className="process-steps">
            {[
              { title: 'Empathize', desc: 'Student interviews, surveys, and shadowing campus help desk interactions' },
              { title: 'Define',    desc: 'Identified two primary users: current students and prospective students' },
              { title: 'Ideate',   desc: 'Explored chatbot flows, map integration, and tiered access concepts' },
              { title: 'Prototype', desc: 'Designed conversational UI, login flow, and interactive campus map in Figma' },
              { title: 'Test',     desc: 'Usability testing with 12 Clark students and 5 prospective students' },
            ].map((step, i) => (
              <div className="process-step" key={i}>
                <div className="step-dot">{i + 1}</div>
                <div className="step-text"><h4>{step.title}</h4><p>{step.desc}</p></div>
              </div>
            ))}
          </div>

          <h2>Key Features</h2>
          <div className="features-grid">
            {[
              'Clark SSO login for personalized student access',
              'AI chat for any question — academic, campus, wellness',
              'Interactive map with real-time directions',
              'Frustration journaling with solution suggestions',
              'Public mode for prospective student exploration',
              'Restricted resources only for verified Clark students',
            ].map((f, i) => (
              <div className="feature-card" key={i}>{f}</div>
            ))}
          </div>

          <div className="outcome-block">
            <h2 style={{ fontSize: '1.4rem', marginBottom: 16, marginTop: 0 }}>Outcome</h2>
            <p>
              Clarkie was well-received in testing, with students saying it felt like having a knowledgeable
              friend on campus. 91% of testers said they would use it regularly, and prospective students
              said the conversational experience made Clark feel more welcoming and accessible than any
              other university website they had explored.
            </p>
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