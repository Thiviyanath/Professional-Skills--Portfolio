import { useState } from "react";
import { vivaNotes } from "../data/lectures";

function VivaNotes() {
  const [open, setOpen] = useState(null);

  return (
    <section id="viva" className="section">
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Viva Preparation
        </p>
        <h2 className="text-5xl font-bold mb-4">Quick Revision Notes</h2>
        <p className="text-gray-400">
          Short answers prepared from the Professional Skills lectures.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {vivaNotes.map((item, index) => (
          <div key={index} className="glass rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left p-5 flex justify-between items-center"
            >
              <span className="font-semibold">{item.q}</span>
              <span className="text-cyan-400">
                {open === index ? "-" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="px-5 pb-5 text-gray-300">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default VivaNotes;