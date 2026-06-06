import { useState } from "react";
import { lectures } from "../data/lectures";

function LectureHighlights() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="highlights" className="section">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Lecture Highlights
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Skills Unlocked Through Each Lecture
        </h2>

        <p className="text-gray-400">
          A quick view of the most important outcomes from all 11 Professional Skills sessions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="space-y-3">
          {lectures.map((lecture, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`w-full text-left p-4 rounded-2xl transition ${
                selected === index
                  ? "bg-cyan-400 text-black"
                  : "glass text-gray-300 hover:text-cyan-400"
              }`}
            >
              <span className="text-sm opacity-70">Lecture {index + 1}</span>
              <h3 className="font-semibold">{lecture.title}</h3>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2 glass rounded-3xl p-8">
          <span className="text-cyan-400 text-sm">
            Lecture {selected + 1}
          </span>

          <h3 className="text-4xl font-bold mt-2 mb-3">
            {lectures[selected].title}
          </h3>

          <p className="text-gray-400 mb-6">
            Lecturer: {lectures[selected].lecturer}
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="bg-white/5 rounded-2xl p-5">
              <h4 className="text-cyan-400 font-semibold mb-2">
                Session Overview
              </h4>
              <p className="text-gray-300">
                {lectures[selected].overview}
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
              <h4 className="text-cyan-400 font-semibold mb-2">
                What I Learned
              </h4>
              <p className="text-gray-300">
                {lectures[selected].learned}
              </p>
            </div>
          </div>

          <h4 className="text-cyan-400 font-semibold mb-3">
            Key Highlights
          </h4>

          <div className="flex flex-wrap gap-3 mb-8">
            {lectures[selected].takeaways.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
              >
                ✦ {item}
              </span>
            ))}
          </div>

          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-5">
            <h4 className="text-cyan-400 font-semibold mb-2">
              How I Will Apply It
            </h4>
            <p className="text-gray-300">
              {lectures[selected].apply}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LectureHighlights;