function Achievements() {

  const badges = [
    "Emotional Intelligence Explorer",
    "Professional Communicator",
    "Interview Ready Candidate",
    "Ethical Professional",
    "Negotiation Explorer",
    "Portfolio Builder",
    "Career Ready Graduate"
  ];

  return (
    <section className="section">

      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Achievements
        </p>

        <h2 className="text-5xl font-bold">
          Skills Unlocked
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">

        {badges.map((badge, index) => (
          <div
            key={index}
            className="glass px-6 py-4 rounded-full text-cyan-400"
          >
            🏅 {badge}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Achievements;