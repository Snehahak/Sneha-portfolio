import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Download, Mail, ArrowDown, Search, Target, Lightbulb,
  Layers, FlaskConical, RefreshCw, ArrowUpRight, X
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const artPieces = [
  { id: 1, type: 'Illustration', name: 'Dancing Deity',  src: '/Dancing Deity.jpg' },
  { id: 2, type: 'Mandala',      name: 'Ink by Sneha',   src: '/Ink by Sneha.jpg' },
  { id: 3, type: 'Ink Art',      name: 'Pray Work Slay', src: '/Pray Work Slay.jpg' },
  { id: 4, type: 'Mandala',      name: 'Be Authentic',   src: '/Be Authentic.jpg' },
  { id: 5, type: 'Illustration', name: 'Sai Baba',       src: '/Sai Baba.JPG' },
  { id: 6, type: 'Watercolour',  name: 'Crimson Sky',    src: '/Crimson Sky.jpg' },
  { id: 7, type: 'Mandala',      name: 'Devi',           src: '/Devi.jpg' },
  { id: 8, type: 'Ink Art',      name: 'Mahadev',        src: '/Mahadev.jpg' },
]

const processSteps = [
  { num: 1, icon: <Search size={22} />,       title: 'Research',  desc: 'Understanding users, their needs, and the problem space through interviews and analysis.' },
  { num: 2, icon: <Target size={22} />,       title: 'Define',    desc: 'Synthesizing research insights to define clear problem statements and design goals.' },
  { num: 3, icon: <Lightbulb size={22} />,    title: 'Ideate',    desc: 'Brainstorming and exploring multiple creative solutions through sketches and concepts.' },
  { num: 4, icon: <Layers size={22} />,       title: 'Prototype', desc: 'Building interactive prototypes to visualize and test design concepts quickly.' },
  { num: 5, icon: <FlaskConical size={22} />, title: 'Test',      desc: 'Validating designs with real users through usability testing and feedback sessions.' },
  { num: 6, icon: <RefreshCw size={22} />,    title: 'Iterate',   desc: 'Refining designs based on insights and continuously improving the user experience.' },
]

export default function Home() {
  const [modal, setModal] = useState(null)

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero" style={{ paddingLeft: 60, paddingRight: 60 }}>
        <p className="hero-eyebrow">UI Designer | UX Res • MSCS Student at Clark University</p>
        <h1>
          Sneha<br />
          <span className="accent">Khatiwada</span>
        </h1>
        <p className="hero-quote">
          "I design thoughtful digital experiences that combine usability,
          creativity, and human-centered thinking."
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.getElementById('work').scrollIntoView({ behavior: 'smooth' }) }}>
            View My Work
          </a>
          <a href="/resume.pdf" download className="btn-secondary">
            <Download size={16} /> Download Resume
          </a>
          <a href="#contact" className="btn-secondary" style={{ border: 'none' }}
            onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>
            <Mail size={16} /> Contact Me
          </a>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <ArrowDown size={14} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ paddingTop: 80 }}>
        <div className="about-grid">
          <div className="about-img-wrap">
            <img
              src="/photo.jpg"
              alt="Sneha Khatiwada"
              style={{ width: '100%', aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', objectFit: 'cover', display: 'block' }}
            />
            <div className="about-img-deco" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am a UI/UX designer currently pursuing a Master's degree in Computer Science
              at Clark University. My work focuses on designing intuitive and meaningful digital
              experiences that improve everyday productivity and wellbeing.
            </p>
            <p>
              I enjoy combining research, interaction design, and visual storytelling to create
              thoughtful user-centered products. My approach is grounded in empathy and driven
              by the desire to solve real problems for real people.
            </p>
            <p>
              I am especially interested in UX research, product design, and designing systems
              that support users' daily decision-making. When I'm not designing interfaces,
              I explore creativity through ink art, mandala illustration, and watercolour painting.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="num">3+</div>
                <div className="label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="num">15+</div>
                <div className="label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="num">100%</div>
                <div className="label">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="full-width">
        <div className="inner">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Explore selected case studies showcasing my design process, from research
            and ideation to final prototypes and outcomes.
          </p>
          <div className="work-list">

            <div className="work-item">
              <div className="work-img"><div className="img-placeholder">LifeLog App Mockup</div></div>
              <div className="work-info">
                <span className="work-tag">Productivity &amp; Wellbeing</span>
                <h3>LifeLog Mobile App</h3>
                <p>A comprehensive productivity and wellbeing tracking mobile application
                  integrating task management, expense tracking, mood logging, gratitude
                  journaling, and AI-powered insights.</p>
                <Link to="/work/lifelog" className="work-link">View Case Study <ArrowUpRight size={16} /></Link>
              </div>
            </div>

            <div className="work-item reverse">
              <div className="work-img"><div className="img-placeholder">Dashboard App Mockup</div></div>
              <div className="work-info">
                <span className="work-tag">Product Design</span>
                <h3>Personal Dashboard App</h3>
                <p>An all-in-one personal dashboard concept featuring to-do tracking,
                  expense monitoring, mood tracking, gratitude journal, and AI-based
                  suggestions for daily optimization.</p>
                <Link to="/work/dashboard" className="work-link">View Case Study <ArrowUpRight size={16} /></Link>
              </div>
            </div>

            <div className="work-item">
              <div className="work-img"><div className="img-placeholder">Recipe App Mockup</div></div>
              <div className="work-info">
                <span className="work-tag">Community &amp; Culture</span>
                <h3>Cultural Recipe Storytelling</h3>
                <p>A recipe app celebrating global cuisines through cultural storytelling,
                  community contributions, and recognition badges that honor culinary heritage.</p>
                <Link to="/work/recipe" className="work-link">View Case Study <ArrowUpRight size={16} /></Link>
              </div>
            </div>

            <div className="work-item reverse">
              <div className="work-img" style={{ background: 'linear-gradient(135deg, #fff8f0 0%, #ffe8cc 100%)' }}>
                <div style={{ textAlign: 'center', color: '#d4834a', fontFamily: 'var(--serif)', fontSize: '1.1rem', fontStyle: 'italic' }}>
                  Miro Board Preview
                </div>
              </div>
              <div className="work-info">
                <span className="work-tag" style={{ background: '#fff3e8', color: '#d4834a' }}>Design Thinking</span>
                <h3>Miro Design Board</h3>
                <p>An interactive Miro board capturing the full design thinking process —
                  user research, affinity mapping, journey maps, and ideation sessions
                  visualized in one collaborative space.</p>
                <Link to="/work/miro" className="work-link">View Board <ArrowUpRight size={16} /></Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section id="process">
        <h2 className="section-title">My Design Process</h2>
        <p className="section-subtitle">
          A human-centered approach to creating meaningful digital experiences
          through research, iteration, and continuous improvement.
        </p>
        <div className="process-grid">
          {processSteps.map((s) => (
            <div className="process-card" key={s.num}>
              <div className="process-icon-wrap">
                <div className="process-icon-bg">{s.icon}</div>
                <div className="process-num">{s.num}</div>
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ART */}
      <section id="art" className="full-width">
        <div className="inner">
          <h2 className="section-title">Beyond Interfaces</h2>
          <p className="section-subtitle">
            Ink by Sneha — my creative practice in mandala art, devotional illustration,
            and watercolour painting.
          </p>
          <div className="art-grid">
            {artPieces.map((art) => (
              <div className="art-card" key={art.id} onClick={() => setModal(art)}>
                <img src={art.src} alt={art.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div className="art-overlay">
                  <div className="art-type">{art.type}</div>
                  <div className="art-name">{art.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="section-subtitle">
          A combination of design tools proficiency and core UX skills that I bring to every project.
        </p>
        <div className="skills-grid">
          <div>
            <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1.1rem', marginBottom: 24 }}>Design Tools</h3>
            {[
              { name: 'Figma', pct: 95 },
              { name: 'Adobe XD', pct: 85 },
              { name: 'Miro', pct: 90 },
              { name: 'Prototyping Tools', pct: 88 },
            ].map((s) => (
              <div className="skill-bar-wrap" key={s.name}>
                <div className="skill-bar-header"><span>{s.name}</span><span>{s.pct}%</span></div>
                <div className="skill-bar-track"><div className="skill-bar-fill" style={{ width: `${s.pct}%` }} /></div>
              </div>
            ))}
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1.1rem', marginBottom: 24 }}>Core Skills</h3>
            <div className="core-skills-wrap">
              {['User Research','Wireframing','Interaction Design','Information Architecture','Usability Testing','Visual Storytelling','Design Systems Thinking','Prototyping'].map((sk) => (
                <div className="skill-tag" key={sk}>{sk}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="resume-card">
          <h3>Want to know more?</h3>
          <p>Download my full resume for a complete overview of my experience.</p>
          <a href="/resume.pdf" download className="btn-primary"><Download size={16} /> Download Resume</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="full-width">
        <div className="inner">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">"Let's collaborate on meaningful user experiences."</p>
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                I'm always excited to connect with fellow designers, researchers,
                and anyone passionate about creating meaningful digital experiences.
                Feel free to reach out!
              </p>
              <a href="mailto:snehakhatiwadap@gmail.com" className="contact-link-card">
                <div className="contact-link-icon"><Mail size={20} /></div>
                <div className="contact-link-text">
                  <div className="label">Email</div>
                  <div className="value">snehakhatiwadap@gmail.com</div>
                </div>
                <ArrowUpRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-light)' }} />
              </a>
              <a href="https://www.linkedin.com/in/snehaha-k/" target="_blank" rel="noreferrer" className="contact-link-card">
              <div className="contact-link-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>
                <div className="contact-link-text">
                  <div className="label">Linkedin</div>
                  <div className="value">https://www.linkedin.com/in/snehaha-k/</div>
                </div>
                <ArrowUpRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-light)' }} />
              </a>
            </div>
            <div className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Tell me about your project or just say hello..." />
              </div>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Mail size={16} /> Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ART MODAL */}
      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)}><X size={18} /></button>
            <img src={modal.src} alt={modal.name} style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', background: '#111' }} />
            <div className="modal-caption">
              <div className="art-type">{modal.type}</div>
              <div className="art-name">{modal.name}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}