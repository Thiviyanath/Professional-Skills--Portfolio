import { useState } from "react";

import cvThumb from "../assets/evidence/cv.png";
import coverThumb from "../assets/evidence/coverletter.png";
import linkedinThumb from "../assets/evidence/linkedin.png";
import emailThumb from "../assets/evidence/email.png";
import interview from "../assets/evidence/interview.png";
import dining from "../assets/evidence/dining.png";
import grooming from "../assets/evidence/grooming.png";
import portfolio from "../assets/evidence/portfolio.png";

function EvidenceGallery() {
  const [preview, setPreview] = useState(null);

  const evidence = [
   {
      title: "CV Preparation",
      image: cvThumb,
      type: "pdf",
      file: "/evidence/cv.pdf",
      description: "My professional CV prepared for internship applications."
    },
    {
      title: "Cover Letter Writing",
      image: coverThumb,
      type: "pdf",
      file: "/evidence/coverletter.pdf",
      description: "Cover letter prepared using professional writing structure."
    },

    {
      title: "Professional Email Writing",
      image: "/evidence/email.png",
      type: "image",
      file: "/evidence/email.png",
    },

    {
      title: "LinkedIn Development",
      image: "/evidence/linkedin.png",
      type: "image",
      file: "/evidence/linkedin.png",
    },
    {
      title: "Interview Practice",
      image: "/evidence/interview.png",
      type: "image",
      file: "/evidence/interview.png",
      description: "Interview preparation and confidence development activity."
    },
    {
      title: "Dining Etiquette",
      image: dining,
      type: "image",
      file: dining,
      description: "Dining etiquette and professional behaviour learning evidence."
    },
    {
      title: "Grooming & Etiquette",
      image: grooming,
      type: "image",
      file: grooming,
      description: "Professional grooming and personal branding evidence."
    },
    {
      title: "Portfolio Development",
      image: portfolio,
      type: "image",
      file: portfolio,
      description: "Digital portfolio development as final learning output."
    }
  ];

  const openPreview = (item) => {
    if (item.type === "pdf") {
      window.open(item.file, "_blank");
    } else {
      setPreview(item);
    }
  };

  return (
    <section id="evidence" className="section">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Evidence Gallery
        </p>

        <h2 className="comic-heading text-5xl mb-4">
          Evidence of Learning
        </h2>

        <p className="text-gray-400">
          Activities, documents and practical outputs completed throughout the
          Professional Skills module.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {evidence.map((item, index) => (
          <div
            key={index}
            className="glass rounded-3xl overflow-hidden hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover transition duration-700 hover:scale-110"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {item.description}
              </p>

              <button
                onClick={() => openPreview(item)}
                className="w-full py-2 rounded-full bg-yellow-300 text-black font-bold border-2 border-black shadow-[4px_4px_0_#ff4d4d] hover:translate-y-1 transition"
              >
                {item.type === "pdf" ? "Open PDF" : "Preview Evidence"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="glass rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative p-6">
            <button
              onClick={() => setPreview(null)}
              className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full font-bold"
            >
              ×
            </button>

            <h3 className="text-3xl font-bold mb-2">
              {preview.title}
            </h3>

            <p className="text-gray-400 mb-5">
              {preview.description}
            </p>

            <img
              src={preview.file}
              alt={preview.title}
              className="w-full rounded-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default EvidenceGallery; 