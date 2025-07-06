import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Web Development Intern",
    company: "God Particles",
    period: "May 2024 - July 2024",
    description: "Worked with CodeIgniter, OpenCart, and AngularJS, and managed cPanel deployment workflows."
  },
  {
    title: "Technical Design Head",
    company: "Students Association and Arts Society(SAAS)",
    period: "2024 - 2025",
    description: "Led technical development team for college fests and websites like agni.saasceg.in and techofes.saasceg.in."
  },
  {
    title: "Student Coordinator",
    company: "Math Computing Society (MCS)",
    period: "2024 - Present",
    description: "Coordinated technical sessions and contributed to event planning and software development."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="pt-30 pb-5 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 border-b border-purple-500 w-fit mx-auto pb-2 px-6">
          Work Experience
        </h2>

        <div className="overflow-x-auto hide-scrollbar">
          <motion.div
            className="flex space-x-6 px-2 snap-x snap-mandatory"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="min-w-[300px] max-w-sm bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300 snap-center"
              >
                <div className="text-left mb-4">
                  <h3 className="text-xl font-semibold text-white leading-snug">{exp.title}</h3>
                  <p className="text-sm text-purple-300 font-medium leading-tight">{exp.company}</p>
                </div>
                <p className="text-sm italic text-gray-300 mb-1">{exp.period}</p>
                <p className="text-base text-gray-200 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
