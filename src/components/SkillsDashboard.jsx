import { motion } from "framer-motion";
import { skills } from "../data/lectures";

function SkillsDashboard() {
  return (
    <section id="skills" className="section">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Skills Growth
        </p>
        <h2 className="text-5xl font-bold mb-4">
          Development Dashboard
        </h2>
      </div>

      <div className="glass rounded-3xl p-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-7">
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span className="text-cyan-400">{skill.value}%</span>
            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-full bg-cyan-400 rounded-full"
              />
            </div>
          </div>
        ))}

        <p className="text-gray-300 mt-8 leading-relaxed">
          Throughout the module, I observed improvement in my communication,
          confidence, professionalism, interview readiness, ethical awareness and
          ability to reflect on my personal development.
        </p>
      </div>
    </section>
  );
}

export default SkillsDashboard;