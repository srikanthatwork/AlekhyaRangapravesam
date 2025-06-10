import React, { useEffect, useRef } from 'react';
import AlekhyaGuru from '../../Public/assets/images/AlekhyaGuru.png'; 

const ExpertGuidance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="expert-guidance" className="py-20 bg-amber-50" >
      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-6xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
            Expert Guidance
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={AlekhyaGuru}
                alt="Guru Smt. Manju Hema Malini Chavali"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none text-stone-700">
              <h3 className="text-2xl text-amber-800 font-semibold mb-6">
                Guru Smt. Manju Hema Malini Chavali
              </h3>
              <p>
                The Artistic Director of the Guru Parampara School of Arts, is a
                distinguished Kuchipudi teacher dedicated to this classical
                dance form. She began her training at age 5 in Andhra Pradesh
                and became a resident student of the renowned Guru Padmabhushan
                Dr. Vempati Chinna Satyam at 13.
              </p>
              <p>
                After advancing her skills in Chennai, she took on the role of
                resident instructor at 18 and built a successful career in
                teaching, performing, and choreography, creating over 30
                original pieces and numerous dance ballets. She holds a Master's
                in Performing Arts and is recognized as a Grade A Doordarshan
                artist.
              </p>
              <p style={{ marginTop: "1rem" }}>
                {" "}
                In 2011, she established the Guru Parampara School of Arts in
                the Dallas Fort Worth area, committed to sharing the authentic
                spirit of Kuchipudi with rasikas. Guru Hema frequently
                collaborates with masters of other Indian dance forms, fostering
                innovation and promoting kindness through art. Her recent
                performances abroad reflect her commitment to cultural exchange
                and artistic collaboration. She also offers her students
                opportunities to showcase their talent on international stages,
                including Indonesia, Greece, Sri Lanka, and India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertGuidance;