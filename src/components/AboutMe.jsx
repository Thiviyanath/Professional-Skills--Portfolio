import profileImage from "../assets/profile.png";

function AboutMe() {
  return (
    <section id="about" className="section">
      <div className="glass rounded-3xl p-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
            About Me
          </p>

          <h2 className="text-4xl font-bold mb-5">Student Profile</h2>

          <p className="text-gray-300 leading-relaxed mb-5">
            I am Thiviyanath Maheswaran, a HND Information Technology student at
            SLIIT City Uni. This portfolio showcases my learning journey
            throughout the Professional Skills module.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Through this module, I developed my communication, professionalism,
            emotional intelligence, ethical awareness, interview readiness,
            negotiation and portfolio development skills.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 text-center">
          <img
            src={profileImage}
            alt="Thiviyanath Maheswaran"
            className="w-60 h-60 object-cover rounded-full mx-auto mb-5 border-4 border-cyan-400 shadow-xl"
          />

          <h3 className="text-2xl font-bold">Thiviyanath Maheswaran</h3>

          <p className="text-cyan-400 mt-2">
            HND Information Technology Student
          </p>

          <p className="text-gray-400 mt-2">
            Aspiring Software Engineer & AI Enthusiast
          </p>

          <div className="mt-6 grid gap-3 text-left">
            <div className="bg-white/5 rounded-xl p-4">
              <span className="text-gray-400 text-sm">Student ID</span>
              <h4 className="font-semibold">SA24610833</h4>
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              <span className="text-gray-400 text-sm">Institution</span>
              <h4 className="font-semibold">SLIIT City Uni</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;