import { motion } from "framer-motion";

function ModuleOverview() {
  const outcomes = [
    "Communication Skills",
    "Professional Ethics",
    "Emotional Intelligence",
    "Interview Readiness",
    "Negotiation Skills",
    "Portfolio Development"
  ];

  return (
    <section id="overview" className="section">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-10 max-w-6xl mx-auto"
      >
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Module Overview
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Professional Skills Development
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg mb-8">
          The Professional Skills module helped me develop employability,
          communication, ethical awareness, emotional intelligence, interview
          readiness, negotiation ability and portfolio development skills. This
          digital portfolio presents what happened in each lecture, what I
          learned and how I will apply those lessons in my future career.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
            >
              <h3 className="text-cyan-400 font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ModuleOverview;