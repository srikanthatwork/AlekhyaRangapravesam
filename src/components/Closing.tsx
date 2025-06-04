import React, { useEffect, useRef } from 'react';

const Closing = () => {
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
      id="closing" 
      className="py-20 bg-amber-50"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-amber-800 text-amber-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">A Request for Blessings</h3>
            <p className="mb-6">
              As Alekhya steps into this new chapter of her life, she humbly seeks the blessings and good wishes of her esteemed gurus, respected elders, family members, and well-wishers. Your support and encouragement have been instrumental in her journey so far, and she hopes to continue making you proud as she balances her academic pursuits with her passion for Kuchipudi.
            </p>
            <p>
              With gratitude and dedication, she pledges to uphold the values and traditions she has learned through dance while embracing new knowledge and experiences in her academic field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;