import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ── PASTE YOUR MIRO LINKS HERE ──────────────────────────────
// 1. Open your Miro board
// 2. Click Share (top right) → Embed → copy the embed URL
// 3. Paste it below replacing the placeholder

const MIRO_EMBED_URL = 'https://miro.com/welcomeonboard/Tjh2K0p1ZUZvUzR1M2FYZVp5YkpkcEFvU2dBSDBkZ3hsYm9QNG1ndW9LZDZjS29IS0FWMTVWYithdDcrOC9LaGo4R3BTYXUzdXQwTkJ0TXp5QzBlRmkvMlBVUSswWjVnd0ZIdFFpU0VSZFBYOEIrYkc2OTNkWm5pcEs4T2lSSk5zVXVvMm53MW9OWFg5bkJoVXZxdFhRPT0hdjE=?share_link_id=688967143824'
const MIRO_BOARD_URL = 'https://miro.com/welcomeonboard/Tjh2K0p1ZUZvUzR1M2FYZVp5YkpkcEFvU2dBSDBkZ3hsYm9QNG1ndW9LZDZjS29IS0FWMTVWYithdDcrOC9LaGo4R3BTYXUzdXQwTkJ0TXp5QzBlRmkvMlBVUSswWjVnd0ZIdFFpU0VSZFBYOEIrYkc2OTNkWm5pcEs4T2lSSk5zVXVvMm53MW9OWFg5bkJoVXZxdFhRPT0hdjE=?share_link_id=688967143824'

export default function CaseStudyMiro() {
  const hasEmbed = MIRO_EMBED_URL !== 'https://miro.com/welcomeonboard/Tjh2K0p1ZUZvUzR1M2FYZVp5YkpkcEFvU2dBSDBkZ3hsYm9QNG1ndW9LZDZjS29IS0FWMTVWYithdDcrOC9LaGo4R3BTYXUzdXQwTkJ0TXp5QzBlRmkvMlBVUSswWjVnd0ZIdFFpU0VSZFBYOEIrYkc2OTNkWm5pcEs4T2lSSk5zVXVvMm53MW9OWFg5bkJoVXZxdFhRPT0hdjE=?share_link_id=688967143824'
  const hasLink  = MIRO_BOARD_URL !== 'https://miro.com/welcomeonboard/Tjh2K0p1ZUZvUzR1M2FYZVp5YkpkcEFvU2dBSDBkZ3hsYm9QNG1ndW9LZDZjS29IS0FWMTVWYithdDcrOC9LaGo4R3BTYXUzdXQwTkJ0TXp5QzBlRmkvMlBVUSswWjVnd0ZIdFFpU0VSZFBYOEIrYkc2OTNkWm5pcEs4T2lSSk5zVXVvMm53MW9OWFg5bkJoVXZxdFhRPT0hdjE=?share_link_id=688967143824'

  return (
    <>
      <Navbar />
      <div className="case-study-page">
        <div className="case-hero">
        <div className="case-hero-top">
  <Link to="/" className="case-back"><ArrowLeft size={16} /> Back to Work</Link>
  <span className="work-tag" style={{ background: '#fff3e8', color: '#d4834a' }}>Design Thinking</span>
</div>
          <h1>Miro Design Board</h1>
          <p>An interactive Miro board capturing the full design thinking process — user research, affinity mapping, journey maps, and ideation sessions visualized in one collaborative space.</p>
        </div>
        <div className="case-body">
          <h2>About This Board</h2>
          <p>This Miro board documents the end-to-end design thinking process for my UX projects. It includes raw user research notes, affinity diagrams, user journey maps, sketches, and collaborative brainstorming artifacts.</p>

          {hasEmbed ? (
            <div className="miro-embed-wrap">
              <iframe src={MIRO_EMBED_URL} title="Miro Design Board" allow="fullscreen; clipboard-read; clipboard-write" allowFullScreen />
            </div>
          ) : (
            <div style={{ border: '2px dashed var(--border)', borderRadius: 'var(--radius-lg)', padding: '60px 40px', textAlign: 'center', margin: '32px 0', background: 'var(--white)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>📋</div>
              <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1.1rem', marginBottom: 8 }}>Miro Board Embed</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', maxWidth: 400, margin: '0 auto' }}>
                Open <code>src/pages/CaseStudyMiro.jsx</code> and replace <code>MIRO_EMBED_URL</code> with your board's embed link.
              </p>
            </div>
          )}

          {hasLink && (
            <a href={MIRO_BOARD_URL} target="_blank" rel="noreferrer" className="miro-link-btn">
              <ExternalLink size={16} /> Open Full Board in Miro
            </a>
          )}

          <h2>What's Inside</h2>
          <div className="insights-grid">
            {['User research synthesis & affinity mapping','User personas and empathy maps','Customer journey maps','HMW questions and ideation clusters','Feature prioritization matrix','Wireframe sketches and concept exploration'].map((item, i) => (
              <div className="insight-card" key={i}>
                <div className="insight-num">{i + 1}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-mid)' }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="outcome-block">
            <h2 style={{ fontSize: '1.4rem', marginBottom: 16, marginTop: 0 }}>Process Over Product</h2>
            <p>Great design isn't just about the final artifact — it's about the rigorous, empathetic process that leads there. This board is an open window into that process.</p>
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