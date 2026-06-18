import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudyLifeLog from './pages/CaseStudyLifeLog'
import CaseStudyDashboard from './pages/CaseStudyDashboard'
import CaseStudyRecipe from './pages/CaseStudyRecipe'
import CaseStudyMiro from './pages/CaseStudyMiro'
import './index.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/lifelog" element={<CaseStudyLifeLog />} />
        <Route path="/work/dashboard" element={<CaseStudyDashboard />} />
        <Route path="/work/recipe" element={<CaseStudyRecipe />} />
        <Route path="/work/miro" element={<CaseStudyMiro />} />
      </Routes>
    </Router>
  )
}