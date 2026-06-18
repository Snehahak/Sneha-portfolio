import { Link } from 'react-router-dom'

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav>
      <Link to="/" className="nav-logo">Sneha Khatiwada</Link>
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>About</a></li>
        <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('work') }}>Work</a></li>
        <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process') }}>Process</a></li>
        <li><a href="#art" onClick={(e) => { e.preventDefault(); scrollTo('art') }}>Art</a></li>
        <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills') }}>Skills</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Contact</a></li>
      </ul>
    </nav>
  )
}