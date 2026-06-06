import { motion } from "framer-motion";
import { lectures } from "../data/lectures";

function Reflection() {
  return (
    <section id="reflections" className="section">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Reflection Journal
        </p>
        <h2 className="text-5xl font-bold mb-4">
          What I Did & What I Learned
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Each reflection explains the session overview, activities conducted,
          personal learning and future application.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {lectures.map((lecture, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7"
          >
            <span className="text-cyan-400 text-sm">Reflection {index + 1}</span>

            <h3 className="text-2xl font-bold mt-2 mb-3">
              {lecture.title}
            </h3>

            <p className="text-gray-400 mb-5">
              Lecturer: {lecture.lecturer}
            </p>

            <h4 className="text-cyan-400 font-semibold mb-2">Session Overview</h4>
            <p className="text-gray-300 mb-5">{lecture.overview}</p>

            <h4 className="text-cyan-400 font-semibold mb-2">
              Activities Conducted
            </h4>
            <ul className="text-gray-300 mb-5 space-y-1">
              {lecture.activities.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            <h4 className="text-cyan-400 font-semibold mb-2">What I Learned</h4>
            <p className="text-gray-300 mb-5">{lecture.learned}</p>

            <h4 className="text-cyan-400 font-semibold mb-2">
              How I Will Apply It
            </h4>
            <p className="text-gray-300 mb-5">{lecture.apply}</p>

            <h4 className="text-cyan-400 font-semibold mb-2">Key Takeaways</h4>
            <div className="flex flex-wrap gap-2">
              {lecture.takeaways.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Reflection;