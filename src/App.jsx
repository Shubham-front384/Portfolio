import Home from "./section/Home"
import About from "./section/About"
import Project from "./section/Project"

import { Routes, Route } from "react-router"
import AllProject from "./section/AllProject"
import Contact from "./section/Contact"
import Nav from "./components/Nav"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Nav />
          
          <main className="main-section">
            <Home />
            <About />
            <Project />
            <Contact />
          </main>
        </>
      } />

      <Route path="/projects" element={<AllProject />} />
    </Routes>
  )
}

export default App
