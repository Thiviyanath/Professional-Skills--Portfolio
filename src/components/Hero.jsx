import { motion } from "framer-motion";

function Hero() {
  const stats = [
    { number: "11", label: "Lectures Completed" },
    { number: "8", label: "Evidence Items" },
    { number: "7", label: "Skills Unlocked" },
    { number: "95%", label: "Industry Ready" }
  ];

  const skills = [
    "Communication",
    "Professionalism",
    "Ethics",
    "Emotional Intelligence",
    "Interview Skills",
    "Negotiation",
    "Portfolio Development"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-28"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="comic-tag mb-6">
            SPECIAL EDITION 2026
          </p>

          <p className="text-cyan-400 uppercase tracking-[0.35em] mb-5 text-sm">
            Professional Skills Module
          </p>

          <h1 className="comic-title text-6xl lg:text-8xl leading-tight mb-4">
            PROFESSIONAL SKILLS
          </h1>

          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
            <span className="gradient-text">
              DEVELOPMENT PORTFOLIO
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            From student to industry-ready professional — a reflective digital
            portfolio showcasing my growth, learning outcomes, lecture
            reflections, Professional Skills activities and evidence.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#overview">
              <button className="px-8 py-3 rounded-full bg-yellow-300 text-black font-bold border-2 border-black shadow-[5px_5px_0_#ff4d4d] hover:translate-y-1 transition">
                Explore Portfolio
              </button>
            </a>

            <a href="#highlights">
              <button className="px-8 py-3 rounded-full bg-cyan-400 text-black font-bold border-2 border-black shadow-[5px_5px_0_#000] hover:translate-y-1 transition">
                View Highlights
              </button>
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-4 py-2 rounded-full bg-white/8 border border-white/15 text-gray-200"
              >
                ✓ {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="glass rounded-[2rem] p-8"
        >
          <div className="mb-8">
            <p className="comic-tag mb-5">
              PORTFOLIO PROFILE
            </p>

            <h2 className="text-3xl font-bold">
              Thiviyanath Maheswaran
            </h2>

            <p className="text-gray-400 mt-2">
              SA24610833 | HND Information Technology
            </p>

            <p className="text-gray-400">
              SLIIT City Uni
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-3">
              <span className="text-gray-300">Industry Readiness</span>
              <span className="text-yellow-300 font-bold">95%</span>
            </div>

            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden border border-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "95%" }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="h-full bg-yellow-300 rounded-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.15 }}
                className="bg-white/5 rounded-2xl p-5 text-center border border-white/10"
              >
                <h3 className="text-4xl font-extrabold gradient-text">
                  {item.number}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-300/10 border border-yellow-300/30 rounded-2xl p-5">
            <p className="text-gray-300">
              Module Leader:
              <span className="text-yellow-300 font-bold">
                {" "}Ishara Raviharee Weerasinghe
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;