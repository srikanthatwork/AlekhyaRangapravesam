import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

import { Music2 } from "lucide-react";

const ProgramGuide = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      title: "Ganesha Pancharatnam",
      ragam: "Ragamalika",
      talam: "Tisragati",
      description:
        "'Ganesha Pancharatnam' is in praise of Lord Ganesha, composed by Jagadguru Sri Adi Sankaracharya. The killer of rakshasas, the protector of the devas, the salvation giver to the bhaktas, the all-merciful son of Sankara is invoked with folded hands by the dancers at the beginning of their performance.",
    },
    {
      title: "Koluvai Unnade",
      ragam: "Ragamalika",
      talam: "Adi",
      description:
        "In this dance, the dancers describes with their gestures and expression how Shiva, along with His wife Parvati, is placed in Kailasa Giri. the glory of the Lord is shown with grace, yet with a sense of power.",
    },
    {
      title: "Durga Tarangam",
      ragam: "Shanmukhapriya",
      talam: "Adi",
      description:
        "In this dance, the Goddess Durga is created to destroy the demon Mahishasura. By killing the demon, Durga spreads happiness and prosperity to all the people. The Tarangam is distinguished by the dancers' use of their plates to enhance their footwork.",
    },
    {
      title: "Alumelamanga",
      ragam: "Kalyani",
      talam: "Adi",
      description:
        "This song praises the goddess Alumelamanga, a consort of Lord Venkateswara. This keertana, composed by the famous Telugu poet Annamacharya, describes her beauty and how she passionately loves Lord Venkateswara.",
    },
    {
      title: "Tarana",
      ragam: "Natabhiravi",
      talam: "Teental",
      description:
        "In this dance, the dancer explains the beauty of the song through fast, rhythmic footwork. It is similar to the thillana, which is used in Carnatic music. The tarana is composed in Hindustani classical music.",
    },
    {
      title: "Keshava Narayana",
      ragam: "Ganbheera Nattai",
      talam: "Adi",
      description:
        "This dance shows you all 10 different forms, or 'Avataras,' that Lord Vishnu has possessed to destroy evil, to protect good, and to reestablish the kingdom of truth. The song praises Lord Vishnu and tells the stories of his various forms.",
    },
    {
      title: "Thillana",
      ragam: "Dhanashree",
      talam: "Adi",
      description:
        "Thillana is one of the most scintillating dances of Kuchipudi tradition. It reveals a delightful display of Swara and sweet ecstasy, making it a piece of artistic excellence. The performers exhibit a combination of hand and foot movements meticulously synchronized with the percussion beat. In one word, 'Thillana' means 'Moving Beauty.' This Thillana was composed by Swati Tirunal, who praises Lord Padhmanabha, the principal deity of the Travencore Royal House.",
    },
  ];

  return (
    <section id="programguide" className="py-20 bg-white" >
      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
            Program Guide
          </h2>

          <div className="space-y-6">
            {performances.map((performance, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl text-amber-800 font-semibold mb-3">
                        {performance.title}
                      </h3>
                      <div className="flex items-center gap-2 text-amber-700 mb-4 text-sm">
                        <Music2 size={16} />
                        <span>{performance.ragam}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
                        <span>{performance.talam}</span>
                      </div>
                    </div>
                    <div className="text-amber-800 font-display text-2xl">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                    {performance.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramGuide;
