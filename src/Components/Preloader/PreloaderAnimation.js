import gsap from "gsap";

const PreloaderAnimation = (containerRef, pathRef, onComplete) => {
  const texts = gsap.utils.toArray(".welcome-text");
  const stickers = gsap.utils.toArray(".sticker");

  // floating animation (independent)
  stickers.forEach((sticker, i) => {
    gsap.to(sticker, {
      y: 10,
      duration: 2 + i * 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete,
  });

  // -----------------------------
  // TEXT SEQUENCE
  // -----------------------------
  texts.forEach((text, index) => {
    const isFirst = index === 0;
    const isLast = index === texts.length - 1;
    const holdTime = isFirst ? 0.6 : isLast ? 0.6 : 0.12;

    if (isFirst) {
      tl.to(text, {
        opacity: 1,
        duration: 0.6,
        delay: 0.8,
      });
    } else {
      tl.set(text, { opacity: 1 });
    }

    if (!isLast) {
      tl.set(text, { opacity: 0 }, `+=${holdTime}`);
    }
  });

  // text exit
  tl.to(".text", {
    y: -50,
    opacity: 0,
    duration: 0.4,
  });

  // stickers fade out
  tl.to(
    stickers,
    {
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
    },
    "-=0.3"
  );

  // -----------------------------
  // LOADER LIFTS UP
  // -----------------------------
  tl.to(containerRef.current, {
    y: "-100%",
    duration: 1,
    ease: "expo.inOut",
  });

  return tl;
};

export default PreloaderAnimation;
