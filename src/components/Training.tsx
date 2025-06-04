import React, { useEffect, useRef } from 'react';

const Training = () => {
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
    <section 
      id="training" 
      className="py-20 bg-amber-50"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
            Training Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 border-amber-600">
              <h3 className="text-xl text-amber-800 font-semibold mb-3">Early Training</h3>
              <p className="text-stone-700">
                Alekhya began her Kuchipudi journey under the guidance of Guru Neelima Gaddamanugu, who introduced her to the fundamental concepts and movements of this classical dance form. These early lessons laid a strong foundation for her continued growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 border-amber-700">
              <h3 className="text-xl text-amber-800 font-semibold mb-3">Advanced Training</h3>
              <p className="text-stone-700">
                Her artistic journey continued under Guru Smt. Revathi Komanduri, who refined her technique and helped her develop a deeper understanding of the nuances and expressions essential to Kuchipudi. This mentorship elevated her artistry significantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 border-amber-800">
              <h3 className="text-xl text-amber-800 font-semibold mb-3">Current Guidance</h3>
              <p className="text-stone-700">
                Under the masterful guidance of Guru Smt. Manju Hema Malini Chavali, Alekhya has further perfected her craft, mastering complex choreographies and traditional pieces that showcase the full spectrum of Kuchipudi's expressive capabilities.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
            <p>
              Throughout her training, Alekhya has progressed from basic adavus (fundamental steps) to mastering intricate jathis (rhythmic sequences) and complex abhinaya (expressions). Her dedicated practice regimen includes daily riyaz (practice) focusing on both technical aspects and the subtle emotional expressions that make Kuchipudi such a rich storytelling medium.
            </p>
            
            <p className="mt-4">
              Her gurus have consistently acknowledged her exceptional dedication, quick learning ability, and genuine passion for preserving the authentic traditions of Kuchipudi while bringing her own artistic sensibilities to each performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;