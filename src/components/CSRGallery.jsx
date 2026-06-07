import csr1 from "../assets/csr/csr1.jpeg";
import csr2 from "../assets/csr/csr2.jpeg";
import csr3 from "../assets/csr/csr3.jpeg";
import csr4 from "../assets/csr/csr4.jpeg";

function CSRGallery() {
  const photos = [
    {
      image: csr1,
      title: "CSR Programme Introduction"
    },
    {
      image: csr2,
      title: "Snake Plant Distribution Activity"
    },
    {
      image: csr3,
      title: "Student Participation & Engagement"
    },
    {
      image: csr4,
      title: "Lecturers and Students Supporting Sustainability"
    }
  ];

  return (
    <section className="section">

      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Community Impact Project
        </p>

        <h2 className="text-5xl font-bold mb-4">
          CSR Sustainability Initiative
        </h2>

        <p className="text-cyan-300 text-xl font-medium mb-4">
          Snake Plant Distribution Programme
        </p>

        <p className="text-gray-400 max-w-3xl mx-auto">
          A community-driven CSR initiative organized through the Professional
          Skills module to promote environmental awareness, sustainability and
          student engagement within the university community.
        </p>
      </div>

      {/* Photo Gallery */}

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {photos.map((photo, index) => (
          <div
            key={index}
            className="glass rounded-3xl overflow-hidden hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition-all duration-500"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-[350px] object-cover transition duration-700 hover:scale-110"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}

      </div>

      {/* Skills & Impact */}

      <div className="grid md:grid-cols-4 gap-5 max-w-6xl mx-auto mt-10 mb-10">

        <div className="glass rounded-2xl p-5 text-center">
          <h3 className="text-4xl mb-3">🌱</h3>
          <p className="font-medium">
            Environmental Awareness
          </p>
        </div>

        <div className="glass rounded-2xl p-5 text-center">
          <h3 className="text-4xl mb-3">🤝</h3>
          <p className="font-medium">
            Team Collaboration
          </p>
        </div>

        <div className="glass rounded-2xl p-5 text-center">
          <h3 className="text-4xl mb-3">💬</h3>
          <p className="font-medium">
            Communication Skills
          </p>
        </div>

        <div className="glass rounded-2xl p-5 text-center">
          <h3 className="text-4xl mb-3">🌍</h3>
          <p className="font-medium">
            Community Impact
          </p>
        </div>

      </div>

      {/* Reflection */}

      <div className="glass rounded-3xl p-8 max-w-6xl mx-auto mt-10">

        <h3 className="text-3xl font-bold mb-5">
          Personal Reflection & Learning Outcome
        </h3>

        <p className="text-gray-300 leading-relaxed">
          As part of the Professional Skills CSR programme, students
          collaboratively collected funds and organized a Snake Plant
          distribution initiative. Snake Plants are widely recognized for
          their ability to improve indoor air quality, absorb pollutants
          and contribute to a healthier environment.

          Through this initiative, I actively participated in planning,
          coordination and engagement activities alongside fellow students
          and lecturers. The programme provided an opportunity to apply
          communication, teamwork and organizational skills in a real-world
          setting while contributing to a meaningful environmental cause.

          This experience strengthened my understanding of social
          responsibility and demonstrated how small community-focused
          initiatives can create positive and lasting impacts.
        </p>

        <p className="text-cyan-400 mt-5 italic text-center">
          "Small actions can create meaningful change within a community."
        </p>

      </div>

    </section>
  );
}

export default CSRGallery;