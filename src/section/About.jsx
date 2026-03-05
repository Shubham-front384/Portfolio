import './style.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import github from '../assets/Img/github.png';
import code from '../assets/Img/code.png';
import reactSticker from '../assets/Img/react-sticker.png';
import nodeSticker from '../assets/Img/node-sticker.png';
import gitSticker from '../assets/Img/git-sticker.png';
import gitHubSticker from '../assets/Img/github-sticker.png';
import jsSticker from '../assets/Img/js-sticker.png';
import htmlSticker from '../assets/Img/html-sticker.png';
import cssSticker from '../assets/Img/css-sticker.png';
import mongoSticker from '../assets/Img/mongo-sticker.png';
import gokuCloud from '../assets/Img/goku-cloud.png';
import profileImg from '../assets/Img/power-ranger.png';

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section className="about-section" ref={sectionRef}>
      <h2>about me</h2>
      <div className="about-container" ref={wrapperRef}>
        <div className="about-panel">
          <div className="profile-info">
            <h3 className="profile-heading">
              I am
              <br />
              <span>Full Stack</span> Developer
              <div className="profile-icon">
                <img className="github" src={github} alt="github-icon" />
                <img className="code" src={code} alt="code-icon" />
              </div>
            </h3>
          </div>

          <p className="profile-para">
            I thrive on solving real-world problems, turning ideas into clean,
            maintainable code, and learning through experimentation. You’ll find
            me building side projects, diving into new tech stacks, or simply
            exploring what’s next in the world of web development.
          </p>
        </div>
        <div className="about-panel">
          <div className="profile-img">
            <img src={profileImg} alt="profile-image" />
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
                <span>5</span>+
              </li>
              <li>award project</li>
            </ul>
            <ul className="backend">
              <li>
                <span>5</span>+
              </li>
              <li>backend project</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
