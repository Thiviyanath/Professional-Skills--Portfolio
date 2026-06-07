function CSRShowcase() {
  const impact = [
    { number: "4+", label: "Event Photos" },
    { number: "50+", label: "Participants" },
    { number: "100%", label: "Student Collaboration" },
    { number: "1", label: "Environmental Initiative" },
  ];

  const skills = [
    "Teamwork",
    "Communication",
    "Social Responsibility",
    "Event Coordination",
    "Environmental Awareness",
  ];

  return (
    <section className="section">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          CSR Initiative
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Snake Plant Distribution Project
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          A Professional Skills CSR activity where students collected funds and
          distributed Snake Plants to lecturers and students to promote
          environmental awareness and indoor air quality.
        </p>
      </div>

      <div className="glass rounded-3xl p-8 max-w-6xl mx-auto mb-10">
        <h3 className="text-3xl font-bold mb-5">
          Project Overview
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          As part of the Professional Skills CSR programme, our student group
          collected money from students and used it to provide Snake Plants for
          free. Lecturers and students participated in the event and collected
          plants. The activity created awareness about sustainability, teamwork
          and the value of contributing to the university community.
        </p>

        <div className="grid md:grid-cols-5 gap-4">
          {skills.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-4 text-center border border-white/10"
            >
              <p className="text-cyan-400 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
        {impact.map((item, index) => (
          <div key={index} className="glass rounded-3xl p-7 text-center">
            <h3 className="text-4xl font-bold gradient-text mb-2">
              {item.number}
            </h3>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-5">
          Personal Reflection
        </h3>

        <p className="text-gray-300 leading-relaxed">
          This CSR programme helped me understand that professional skills are
          not only useful in interviews or workplaces, but also in community
          activities. Through this event, I experienced teamwork, communication,
          planning and responsibility. Giving Snake Plants to lecturers and
          students was a simple but meaningful way to promote environmental
          awareness while building collaboration among students.
        </p>
      </div>
    </section>
  );
}

export default CSRShowcase;