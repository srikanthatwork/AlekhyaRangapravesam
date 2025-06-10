import React, { useEffect, useRef } from "react";
import Alekhya from "../../Public/assets/images/Alekhya.png";
const Biography = () => {
  const bioRef = useRef<HTMLDivElement>(null);

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
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (bioRef.current) {
      observer.observe(bioRef.current);
    }

    return () => {
      if (bioRef.current) {
        observer.unobserve(bioRef.current);
      }
    };
  }, []);

  return (
    <section id="biography" className="py-20 bg-white">
      <div
        ref={bioRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-6xl mx-auto  mt-24">
          <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
            Biography
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src={Alekhya}
                alt="Alekhya Alapati performing Kuchipudi"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
              <p className="mb-6">
                Alekhya began her Kuchipudi journey at the age of 4 under the
                guidance of Guru Neelima Gaddamanugu. After 2 years, she
                continued her training with Guru Smt. Revathi Komanduri, where
                she built a strong foundation in the classical art form. In
                2017, after moving to Dallas, Alekhya resumed her tutelage under
                Guru Smt. Manju Hema Malini Chavali, with whom she continues to
                learn and grow as a dancer.
              </p>

              <p className="mb-6">
                Under her guru's mentorship, Alekhya has progressed from
                learning basic pieces to more complex choreographies and has
                developed a deep appreciation for the cultural and spiritual
                richness of Kuchipudi. As a passionate and disciplined student,
                Alekhya has performed in various prestigious cultural programs
                and dance festivals across the DFW area. Outside of dance,
                Alekhya plays the piano and is an active volunteer in her
                community.
              </p>

              <blockquote className="italic border-l-4 border-amber-600 pl-4 py-2 my-8 bg-amber-50">
                "Kuchipudi isn't just a dance form to me; it's a way of
                connecting with our cultural heritage and expressing emotions
                that words alone cannot convey."
                <footer className="text-right mt-2">- Alekhya Alapati</footer>
              </blockquote>

              <p className="mb-6">
                Alekhya will be attending Case Western Reserve University, where
                she plans to study Biomedical Engineering to pursue her
                aspirations in the medical field. She also intends to continue
                her dance journey alongside her academic pursuits, keeping her
                connection to Kuchipudi alive and thriving.
              </p>

              <p>
                She seeks the blessings of her gurus, elders, and well-wishers
                as she embarks on this new chapter, both as a student and an
                artist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
