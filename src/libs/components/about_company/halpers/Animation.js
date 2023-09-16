"use client";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

const Animation = ({ animationData, playOnScroll }) => {
  const animationContainer = useRef(null);
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        animationData,
        loop: false,
        autoplay: false,
      });
      setAnimation(anim);
    }
  }, [animationData]);

  useEffect(() => {
    if (animation && playOnScroll && animationContainer.current) {
      const scrollHandler = () => {
        const rect = animationContainer.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animation.play();
          window.removeEventListener("scroll", scrollHandler);
        }
      };
      window.addEventListener("scroll", scrollHandler);
      scrollHandler();
    }
  }, [animation, playOnScroll]);

  return <div ref={animationContainer} />;
};

export default Animation;
