import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div>
        <span className="footer-logo">Sneha Khatiwada</span>
        <span style={{ color: 'var(--text-light)', margin: '0 10px' }}>•</span>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>UI/UX Designer</span>
      </div>
      <div style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Designed with ❤️ © 2026</div>
      <ul className="footer-links">
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#work">Work</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </footer>
  )
}