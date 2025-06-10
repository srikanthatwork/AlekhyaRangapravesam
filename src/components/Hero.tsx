import React, { useEffect, useRef } from "react";
import backgroundImage from "../../Public/assets/images/2.png"; // Make sure this path is correct

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[5vh] sm:min-h-screen flex items-center justify-center   opacity-0 transition-all duration-500 ease-out mx-auto"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat ">
        <img src={backgroundImage} alt="" style={{ marginTop: "64px" }} />
      </div>
    </section>
    // style={{
    //   // backgroundImage: `url(${backgroundImage})`,
    //   backgroundPosition: "center center",
    //   backgroundAttachment: "fixed",
    //   backgroundSize: "contain",
    //   objectFit: "contain",
    //   // Instead of margin-top for absolute positioning
    //   height: "150vh",
    //   width: "100%", // Adjust height to account for the top offset
    //   // Add padding for smaller screens
    // }}
  );
};

export default Hero;
