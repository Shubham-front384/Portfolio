import { useEffect, useState } from "react";
import "../section/style.scss";

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`navbar ${showNav ? "show" : "hide"}`}>
      <div className="nav-container">

        <div className="nav-links">
          <a href="#about">About me</a>
          <a href="#project">Project</a>
        </div>

        <button className="nav-btn">
          Let's Connect
        </button>

      </div>
    </nav>
  );
};

export default Nav;
