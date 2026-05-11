import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.tsx'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section id="about" className="relative min-h-screen flex items-center justify-center px-4 mt-16 pt-6 pb-8">
        <h2>About</h2>
      </section>
      <section id="skills" className="relative flex items-center justify-center mt-16 px-4 pt-6 pb-8">
        <h2>Skills</h2>
      </section>
    </>
  )
}

export default App
