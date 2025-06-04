import React, { useEffect, useRef } from 'react';

const Academic = () => {
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
      id="academic" 
      className="py-20 bg-amber-50"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
            Academic &amp; Artistic Balance
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2 bg-amber-800 text-amber-50 p-8">
                <h3 className="text-2xl font-semibold mb-4">Academic Excellence</h3>
                <p className="mb-4">
                  Alekhya's passion for learning extends beyond the dance floor. She has maintained academic excellence throughout her educational journey, displaying the same dedication and discipline that defines her approach to dance.
                </p>
                <p>
                  Her interest in the sciences, particularly in how technology can improve healthcare outcomes, has led her to pursue Biomedical Engineering at Case Western Reserve University, where she will begin her studies in the fall.
                </p>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl text-amber-800 font-semibold mb-4">Artistic Continuity</h3>
                <p className="mb-4 text-stone-700">
                  Despite her academic commitments, Alekhya remains steadfast in her commitment to Kuchipudi. She intends to continue her dance practice while at university, finding balance between rigorous engineering studies and artistic expression.
                </p>
                <p className="text-stone-700">
                  This dual pursuit exemplifies her belief that the analytical thinking required for engineering and the creative expression of dance can complement each other, leading to a more holistic approach to both disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;