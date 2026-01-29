import { useLayoutEffect, useRef } from "react";
import "./Preloader.scss";
import gsap from "gsap";
import PreloaderAnimation from "./PreloaderAnimation";
import { preloaderData } from "../../Data/Preloader";
import sun from "/sun.png";
import year from "/year.png";
import elephant from "/elephant.png";
import flower from "/flower.png";
import evil from "/circle.png";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      PreloaderAnimation(preloaderRef, pathRef, onComplete);
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="loading" ref={preloaderRef}>
      {/* SVG SHAPE */}
      <svg
        className="loader-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="loaderGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A1A1A" />
            <stop offset="100%" stopColor="#C40C0C" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          d="M0 0 H100 V80 C80 98 20 98 0 80 Z"
          fill="url(#loaderGradient)"
        />
      </svg>

      {/* STICKERS */}
      <span className="sticker sun">
        <img src={sun} alt="sun-img" />
      </span>
      <span className="sticker elephant">
        <img src={elephant} alt="elephant-img" />
      </span>
      <span className="sticker evil-eye">
        <img src={evil} alt="evil-img" />
      </span>
      <span className="sticker flower">
        <img src={flower} alt="flower-img" />
      </span>
      <span className="sticker year">
        <img src={year} alt="year-img" />
      </span>

      {/* TEXT */}
      <div className="text">
        {preloaderData.map((text, i) => (
          <div className="welcome-text" key={i}>
            <h2>{text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
