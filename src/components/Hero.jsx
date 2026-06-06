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
          <p className="text-cyan-400 uppercase tracking-[0.35em] mb-5 text-sm">
            Professional Skills Module
          </p>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            From Student to
            <span className="gradient-text block">
              Industry-Ready Professional
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            A reflective digital portfolio showcasing my growth, learning
            outcomes, professional skills, lecture reflections, and evidence
            developed throughout the Professional Skills module.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#overview">
              <button className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
                Explore Portfolio
              </button>
            </a>

            <a href="#highlights">
              <button className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
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
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300"
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
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-2">
              Portfolio Profile
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
              <span className="text-cyan-400 font-semibold">95%</span>
            </div>

            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "95%" }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="h-full bg-cyan-400 rounded-full"
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

          <div className="mt-8 bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-5">
            <p className="text-gray-300">
              Module Leader:
              <span className="text-cyan-400 font-semibold">
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