import './style.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { languageImg } from '../data/projects'

import github from '../assets/Img/github.png';
import code from '../assets/Img/code.png';
import profileImg from '../assets/Img/profile.png';

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* -------------------------------
      HORIZONTAL SCROLL PANELS
      -------------------------------- */
      const panels = gsap.utils.toArray('.about-panel');

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => '+=' + wrapperRef.current.offsetWidth,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" ref={sectionRef} id="about">
      <h2>about me</h2>

      <div className="about-container" ref={wrapperRef}>
        {/* PANEL 1 */}
        <div className="about-panel">
          <div className="profile-info">
            <h3 className="profile-heading">
              I am
              <br />
              <span>Full Stack</span> Developer
              <div className="profile-icon">
                <img className="github" src={github} alt="" />
                <img className="code" src={code} alt="" />
              </div>
            </h3>
          </div>

          <p className="profile-para">
            I thrive on solving real-world problems, turning ideas into clean,
            maintainable code, and learning through experimentation.
          </p>
        </div>

        {/* PANEL 2 */}

        <div className="about-panel">
          <div className="profile-img">
            <img src={profileImg} alt="" />

            <div className="circles">
              <div className="circle-one"></div>
              <div className="circle-two"></div>
            </div>
          </div>

          <div className="profile-status">
            <ul className="project">
              <li>
                <span>5</span>+
              </li>
              <li>project created</li>
            </ul>

            <ul className="award">
              <li>
                <span>3</span>
              </li>
              <li>award project</li>
            </ul>

            <ul className="languages">
              {
                languageImg.map((item) => (
                  <li key={item.id}>
                    <img src={item.image} alt="sticker" />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
