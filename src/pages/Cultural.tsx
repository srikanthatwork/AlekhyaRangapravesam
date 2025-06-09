import React, { useEffect, useRef } from 'react';

const Cultural = () => {
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
      id="cultural" 
      className="py-20 bg-white"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
            Cultural Context
          </h2>

          <div className="bg-amber-50 rounded-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl text-amber-800 font-semibold mb-4">About Kuchipudi</h3>
                <p className="mb-4 text-stone-700">
                  Kuchipudi is one of the eight major classical dance forms of India, originating from the village of Kuchipudi in Andhra Pradesh. This dance form combines graceful movements with powerful expressions to narrate stories, often from Hindu mythology.
                </p>
                <p className="text-stone-700">
                  Distinguished by its quicksilver movements, dramatic character portrayals, and intricate footwork, Kuchipudi is known for its theatrical elements and the unique technique of dancing on a brass plate, showcasing both balance and rhythmic precision.
                </p>
              </div>
              <div className="md:w-1/2 bg-amber-800 text-amber-50 p-8">
                <h3 className="text-2xl font-semibold mb-4">Rangapravesam: A Milestone</h3>
                <p className="mb-4">
                  In classical Indian dance traditions, the Rangapravesam (or Arangetram in some forms) marks a dancer's formal debut performance after years of rigorous training. It signifies that the dancer has mastered the fundamentals and is now ready to perform before an audience.
                </p>
                <p>
                  For Alekhya, this significant milestone represents not just the culmination of years of dedicated practice but also the beginning of a new phase in her artistic journey—one where she continues to grow and evolve as a performer while upholding the rich traditions of Kuchipudi.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-stone-700">
            <h3 className="text-2xl text-amber-800 font-semibold mb-4">The Art of Storytelling</h3>
            <p>
              At its heart, Kuchipudi is a storytelling art form. Dancers use a combination of hand gestures (mudras), facial expressions (abhinaya), and body movements to convey complex narratives. These stories often carry moral or philosophical messages, making Kuchipudi not just an entertainment form but also a medium for cultural education and spiritual connection.
            </p>
            
            <p className="mt-4">
              Alekhya has developed a particular affinity for abhinaya, the expressive aspect of Kuchipudi. Her performances are noted for their emotive depth, bringing ancient characters and stories to life with authenticity and nuance. This storytelling aspect of Kuchipudi resonates deeply with her desire to preserve and share cultural narratives.
            </p>

            <p className="mt-4">
              Through her continued practice and performances, Alekhya hopes to contribute to keeping this ancient art form vibrant and relevant, connecting new generations to the timeless beauty and wisdom embedded in classical dance traditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cultural;