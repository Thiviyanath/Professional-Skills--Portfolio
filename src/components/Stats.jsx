import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "11", label: "Sessions Reflected" },
    { number: "5", label: "Academic Contributors" },
    { number: "8", label: "Skills Developed" },
    { number: "100%", label: "Portfolio Completion" }
  ];

  return (
    <section className="section">
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass rounded-3xl p-8 text-center"
          >
            <h3 className="text-5xl font-bold gradient-text mb-3">
              {item.number}
            </h3>

            <p className="text-gray-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;