import { motion } from 'framer-motion';
import madrasmaniaImg from '../assets/img/madrasmania.webp';
import madelloImg from '../assets/img/madello.webp';
import saasImg from '../assets/img/logo.png';
import agniImg from '../assets/img/agni.jpg';
import techofesImg from '../assets/img/techofes.jpg';
import cegauImg from '../assets/img/cegau.jpg';
import mathrixImg from '../assets/img/mathrix.jpg';
import aiLearningImg from '../assets/img/ai-learning.jpg';
import aiImageImg from '../assets/img/ai-image.webp';
import { FaGithub, FaGlobe, FaLaptopCode } from 'react-icons/fa';

const workExperience = [
  {
    title: "Full Stack Developer Intern",
    company: "God Particles",
    period: "July 2024 - Dec 2024",
    icon: <FaLaptopCode className="text-2xl text-purple-400" />,
    description: [
      "Built Madrasmania.de – 89% user engagement boost.",
      "Optimized backend for Tambaram site – 39% faster.",
      "Launched madello.com – 60% conversion boost.",
      "Managed deployment (GoDaddy, cPanel).",
    ],
  },
  {
    title: "Technical Design Head",
    company: "SAAS, CEG",
    period: "Sep 2024 - May 2025",
    icon: <FaLaptopCode className="text-2xl text-purple-400" />,
    description: [
      "Built SAAS official site – +25% session time.",
      "Agni portal – 2K+ registrations.",
      "Techofes live updates – 1.5K+ users.",
    ],
  },
];

const projects = [
  {
    title: "Madrasmania",
    tech: "React, CodeIgniter",
    image: madrasmaniaImg,
    live: "http://madrasmania.de/",
  },
  {
    title: "Madello",
    tech: "React, REST APIs",
    image: madelloImg,
    live: "https://madello.com/",
  },
  {
    title: "SAAS CEG Website",
    tech: "ReactJS",
    image: saasImg,
    live: "https://saas-ceg-ten.vercel.app/",
  },
  {
    title: "Agni Fest Portal",
    tech: "React, Vite, Tailwind",
    image: agniImg,
    live: "https://agni24.vercel.app/",
  },
  {
    title: "Techofes Portal",
    tech: "ReactJS",
    image: techofesImg,
    live: "https://techofes.saasceg.in/",
  },
  {
    title: "CEGAU Website",
    tech: "ReactJS, Next.js, MySQL",
    image: cegauImg,
    live: "https://cegau-website-2025.vercel.app/",
  },
  {
    title: "Mathrix Portal",
    tech: "Next.js, Nodemailer",
    image: mathrixImg,
    live: "https://mathrix.in/",
  },
  {
    title: "AI-Assisted Learning Platform",
    tech: "ReactJS, FastAPI, PostgreSQL",
    image: aiLearningImg,
    live: "https://github.com/orgs/Creative-Innovative-Project/repositories",
  },
  {
    title: "AI Image Generator",
    tech: "ReactJS, OpenAI API",
    image: aiImageImg,
    live: "https://github.com/VimaleshCT/AI_image_generator",
  },
];

export const WorkAndProjects = () => {
  return (
    <section id="experience" className="pt-3 pb-5 mt-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* ===== Work Experience Section ===== */}
        <h2 className="text-4xl font-bold mb-16 border-b border-purple-500 w-fit mx-auto pb-2 px-6">
          Work Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {workExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-lg border border-white/10 hover:scale-[1.01] transition-transform duration-300 text-left"
            >
              <div className="flex items-center gap-3 mb-2">
                {exp.icon}
                <h3 className="text-xl font-semibold text-white leading-snug">{exp.title}</h3>
              </div>
              <p className="text-sm text-purple-300 font-medium">{exp.company}</p>
              <p className="text-sm italic text-gray-400 mb-3">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ===== Featured Projects Section ===== */}
        <h2 className="text-4xl font-bold mb-16 border-b border-purple-500 w-fit mx-auto pb-2 px-6">
          Featured Projects
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gray-800 p-5 rounded-xl border border-white/10 hover:scale-[1.01] transition"
            >
          <motion.img
                src={proj.image}
                alt={proj.title}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 object-cover rounded-md mb-4 mx-auto border border-purple-500 shadow"
                />

              <div className="text-center">
                <h4 className="text-lg font-bold mb1">{proj.title}</h4>
                <p className="text-sm text-gray-300 mb-2">{proj.tech}</p>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 text-purple-400 hover:underline text-sm"
                >
                  {proj.live.includes("github") ? (
                    <>
                      <FaGithub /> GitHub Repo
                    </>
                  ) : (
                    <>
                      <FaGlobe /> Live Demo
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
