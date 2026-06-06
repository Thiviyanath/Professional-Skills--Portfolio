import { motion } from "framer-motion";
import { academicTeam } from "../data/lectures";

function GuestLecturers() {
  return (
    <section id="lecturers" className="section">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Academic Team
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Module Leader & Guest Lecturers
        </h2>

        <p className="text-gray-400">
          Academic contributors who guided my Professional Skills journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {academicTeam.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6"
          >
            <span className="text-cyan-400 text-sm">
              {person.type}
            </span>

            <h3 className="text-2xl font-bold mt-3 mb-2">
              {person.name}
            </h3>

            <p className="text-gray-400 mb-3">
              {person.role}
            </p>

            <p className="text-cyan-300 mb-4">
              {person.topic}
            </p>

            {person.highlights && (
              <div className="flex flex-wrap gap-2">
                {person.highlights.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default GuestLecturers;