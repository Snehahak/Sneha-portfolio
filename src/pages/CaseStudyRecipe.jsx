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
          <span className="work-tag">Community & Local Discovery</span>
          <h1>Lian</h1>
          <p>
            A Yelp-like local discovery app designed to help users find, review, and connect with
            local businesses, restaurants, and services — built with a focus on authentic community
            voices and meaningful local experiences.
          </p>
        </div>

        <div className="case-body">
          <h2>The Problem</h2>
          <p>
            Existing local discovery platforms like Yelp are often cluttered, filled with fake reviews,
            and overwhelming to navigate. Users want a cleaner, more trustworthy way to discover local
            gems — places recommended by real people in their community, not algorithms.
          </p>

          <h2>Research</h2>
          <p>
            We interviewed 20 participants who regularly use local discovery apps. The most common
            frustrations were fake or incentivized reviews, poor search filtering, and no sense of
            community or personal connection. Users wanted to follow people with similar tastes and
            trust their recommendations.
          </p>
          <div className="insights-grid">
            {[
              'Users distrust anonymous or incentivized reviews',
              'Discovery should feel personal, not algorithmic',
              'People want to follow trusted local reviewers',
              'Filtering and search need to be fast and intuitive',
            ].map((ins, i) => (
              <div className="insight-card" key={i}>
                <div className="insight-num">{i + 1}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-mid)' }}>{ins}</p>
              </div>
            ))}
          </div>

          <h2>Design Process</h2>
          <div className="process-steps">
            {[
              { title: 'Empathize', desc: 'Competitive analysis of Yelp, Google Maps, and Foursquare plus user interviews' },
              { title: 'Define',    desc: 'Identified trust and community as the core north stars for Lian' },
              { title: 'Ideate',   desc: 'Explored social graph features, verified reviewer badges, and community lists' },
              { title: 'Prototype', desc: 'High-fidelity Figma prototype with search, business profiles, and review flows' },
              { title: 'Test',     desc: 'Usability sessions with 10 participants focused on discovery and trust signals' },
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
              'Community-verified reviews and trusted reviewer badges',
              'Follow local reviewers with similar tastes',
              'Smart filtering by cuisine, price, rating, distance',
              'Personal lists and saved collections',
              'Business owner response and engagement tools',
              'Map-first discovery experience',
            ].map((f, i) => (
              <div className="feature-card" key={i}>{f}</div>
            ))}
          </div>

          <div className="outcome-block">
            <h2 style={{ fontSize: '1.4rem', marginBottom: 16, marginTop: 0 }}>Outcome</h2>
            <p>
              Lian's community-first approach resonated strongly with testers. 88% said they trusted
              Lian's reviews more than Yelp's, and users spent 40% more time exploring businesses
              compared to baseline testing on competitor apps. The "follow a reviewer" feature was
              rated the most innovative and desirable addition.
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