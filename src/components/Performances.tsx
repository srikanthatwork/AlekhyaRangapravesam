import React, { useEffect, useRef } from 'react';

const Performances = () => {
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

  const performances = [
    {
      title: "Annual Cultural Showcase",
      location: "Dallas Convention Center",
      description: "Performed a traditional Tarangam, balancing on a brass plate while portraying Lord Krishna."
    },
    {
      title: "Diwali Celebrations",
      location: "Plano Cultural Center",
      description: "Featured dancer for the classical segment, performing a solo Shabdam piece."
    },
    {
      title: "India Association Festival",
      location: "Fort Worth Community Theater",
      description: "Group performance showcasing various classical dance styles, representing Kuchipudi."
    },
    {
      title: "International Dance Day",
      location: "University of Texas at Dallas",
      description: "Collaborative performance with dancers from multiple cultural backgrounds."
    },
  ];

  return (
    <section 
      id="performances" 
      className="py-20 bg-white"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
            Performances &amp; Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {performances.map((performance, index) => (
              <div 
                key={index} 
                className="bg-amber-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl text-amber-800 font-semibold mb-2">{performance.title}</h3>
                <p className="text-amber-700 mb-3 text-sm">{performance.location}</p>
                <p className="text-stone-700">{performance.description}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-stone-700">
            <h3 className="text-2xl text-amber-800 font-semibold mb-4">Cultural Impact</h3>
            <p>
              Alekhya has been an active ambassador for Indian classical arts throughout the DFW area. Her performances have not only showcased the beauty and depth of Kuchipudi but have also helped educate diverse audiences about this traditional art form. Through her dedication, she has contributed to the preservation and promotion of cultural heritage within her community.
            </p>
            
            <p className="mt-4">
              Beyond formal performances, Alekhya has participated in cultural exchange programs and educational demonstrations at local schools, introducing younger generations to classical Indian dance forms and inspiring many to explore their own cultural roots.
            </p>

            <blockquote className="italic border-l-4 border-amber-600 pl-4 py-2 my-8 bg-amber-50">
              "Each performance is a chance to connect with both our traditions and our audience. When I see someone deeply moved by a piece that tells a story from our ancient texts, I feel I've succeeded as a cultural ambassador."
              <footer className="text-right mt-2">- Alekhya Alapati</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performances;