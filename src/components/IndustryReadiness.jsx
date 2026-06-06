import { motion } from "framer-motion";

function IndustryReadiness() {
  return (
    <section className="section">

      <div className="glass rounded-3xl p-10 max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-5">
          Industry Readiness
        </h2>

        <p className="text-gray-400 mb-8">
          Growth achieved through the Professional Skills module.
        </p>

        <div className="w-full h-8 bg-white/10 rounded-full overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "95%" }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="h-full bg-cyan-400"
          />

        </div>

        <h3 className="text-4xl font-bold mt-6 text-cyan-400">
          95%
        </h3>

        <p className="text-gray-300 mt-3">
          Industry Ready Professional
        </p>

      </div>

    </section>
  );
}

export default IndustryReadiness;