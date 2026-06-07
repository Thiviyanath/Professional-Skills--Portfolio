import { motion } from "framer-motion";

function TransformationJourney() {
  const journey = [
    {
      title: "Professional Skills",
      skill: "Self Awareness",
      icon: "🌱"
    },
    {
      title: "Emotional Intelligence",
      skill: "Emotional Growth",
      icon: "🧠"
    },
    {
      title: "Code of Ethics",
      skill: "Professional Responsibility",
      icon: "⚖️"
    },
    {
      title: "Business Ethics",
      skill: "Integrity",
      icon: "🤝"
    },
    {
      title: "Grooming & Etiquette",
      skill: "Professional Image",
      icon: "👔"
    },
    {
      title: "Dining Etiquette",
      skill: "Professional Behaviour",
      icon: "🍽️"
    },
    {
      title: "Email Etiquette",
      skill: "Communication",
      icon: "📧"
    },
    {
      title: "Interview Skills",
      skill: "Confidence",
      icon: "🎤"
    },
    {
      title: "CV & Cover Letter",
      skill: "Career Readiness",
      icon: "📄"
    },
    {
      title: "Negotiation Skills",
      skill: "Problem Solving",
      icon: "🤝"
    },
    {
      title: "Portfolio Development",
      skill: "Industry Ready",
      icon: "🏆"
    }
  ];

  return (
    <section id="growth" className="section">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Transformation Journey
        </p>

        <h2 className="text-5xl font-bold mb-4">
          My Professional Growth Journey
        </h2>

        <p className="text-gray-400">
          How each lecture contributed to my development as a future IT professional.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -10
            }}
            className="glass rounded-3xl p-6 text-center"
          >

            <div className="text-5xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-cyan-400">
              + {item.skill}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default TransformationJourney;