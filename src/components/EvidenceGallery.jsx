import cv from "../assets/evidence/cv.png";
import coverletter from "../assets/evidence/coverletter.png";
import linkedin from "../assets/evidence/linkedin.png";
import email from "../assets/evidence/email.png";
import interview from "../assets/evidence/interview.png";
import dining from "../assets/evidence/dining.png";
import grooming from "../assets/evidence/grooming.png";
import portfolio from "../assets/evidence/portfolio.png";

function EvidenceGallery() {
  const evidence = [
    { title: "CV Preparation", image: cv },
    { title: "Cover Letter Writing", image: coverletter },
    { title: "LinkedIn Development", image: linkedin },
    { title: "Professional Email Writing", image: email },
    { title: "Interview Practice", image: interview },
    { title: "Dining Etiquette", image: dining },
    { title: "Grooming & Etiquette", image: grooming },
    { title: "Portfolio Development", image: portfolio },
  ];

  return (
    <section id="evidence" className="section">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Evidence Gallery
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Evidence of Learning
        </h2>

        <p className="text-gray-400">
          Activities, workshops and practical outputs completed throughout the
          Professional Skills module.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {evidence.map((item, index) => (
          <div
            key={index}
            className="glass rounded-3xl overflow-hidden hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover transition duration-500 hover:scale-110"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EvidenceGallery;