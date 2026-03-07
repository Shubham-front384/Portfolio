import { useEffect, useState } from "react"
import "./style.scss"
import sticker from "../assets/Img/goku.png"
import { ArrowUp, ChevronsDown } from "lucide-react"

const Home = () => {

  const [showTop, setShowTop] = useState(false)

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true)
      } else {
        setShowTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <section className="home-section">
      <div className="home-container">

        <div className="open-work">
          <div className="circle"></div>

          <div className="text-wrapper">
            <div className="open-work-text">
              <span>shubham pal</span>
              <span>open to work</span>
            </div>
          </div>
        </div>

        <h1 className="home-heading">
          port<br />folio
          <img src={sticker} alt="smile sticker" />
        </h1>

        <div className="reveal-wrapper">
          <p className="reveal-text">

            <span className="line">
              <span className="text">
                I build scalable, performance-focused
              </span>
            </span>

            <br />

            <span className="line">
              <span className="text">
                web applications using React and Node.js
              </span>
            </span>

          </p>
        </div>

        <ul className="social-links">
          <li>
            <a href="https://github.com/" target="_blank">
              github
            </a>
          </li>

          <li>
            <a href="#">
              resume
            </a>
          </li>
        </ul>

        <div className="scroll-down">
          <ChevronsDown className="down-arrow" />
          <span className="scroll-text">
            scroll down
          </span>
        </div>

        {showTop && (
          <div className="top-btn" onClick={scrollTop}>
            <ArrowUp size={22} />
          </div>
        )}

      </div>
    </section>
  )
}

export default Home
