import { motion } from "framer-motion";
import { lectures } from "../data/lectures";

function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="text-center mb-20">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Learning Journey
        </p>
        <h2 className="text-5xl font-bold mb-4">Lecture Timeline</h2>
        <p className="text-gray-400">
          The order of my Professional Skills learning journey.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 w-1 h-full bg-cyan-500/60 -translate-x-1/2"></div>

        {lectures.map((lecture, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-14 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="glass w-[45%] rounded-3xl p-6">
              <span className="text-sm text-cyan-400">Lecture {index + 1}</span>
              <h3 className="text-2xl font-bold mt-2 mb-2">{lecture.title}</h3>
              <p className="text-gray-400">{lecture.lecturer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;