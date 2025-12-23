import { motion } from "motion/react";
import { styles } from "../styles";
import { div } from "motion/react-client";
import { Github } from "lucide-react";

const items = [
  {
    title: "Company Project: Capacity Management web app",
    year: "2022",
    tech: "Angular, Java, Node.js, PostgreSQL, Spring",
  },
  {
    title: "Company Project: Vehicle release management web app",
    year: "2023 - 2024",
    tech: "Angular, Java, Node.js, Quarkus, Docker",
  },
  {
    title: "University Project: Mushroom Finder mobile app",
    year: "2024",
    tech: "Dart, Flutter, Sqflite, Flutter_map",
    link: "https://github.com/PatriceTeuber/Mushroom_Finder",
  },
  {
    title: "University Project: Canteen nutrition mobile app",
    year: "2024",
    tech: "Dart, Flutter, Amazon API Gateway, Lambda, DynamoDB",
  },
  {
    title: "University Project: Green Guardian mobile app",
    year: "2025",
    tech: "Dart, FlutterNative, Sqflite",
    link: "https://github.com/PatriceTeuber/GreenGuardian",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-start"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className={styles.sectionHeadText}>Experiences</h2>
      </motion.div>

      {/* Frontend + Backend Tiles */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl font-body">
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className={styles.cards}
        >
          <h3 className="text-xl mb-2 ">Frontend</h3>
          <ul className="text-secondary space-y-1">
            <li>Angular / React / TypeScript</li>
            <li>Three.js</li>
            <li>Tailwind CSS</li>
            <li>Single SPA / Mirco-Frontend Architectures</li>
            <li>Vite.js / Webpack</li>
            <li>Dart / Flutter</li>
          </ul>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className={styles.cards}
        >
          <h3 className="text-xl mb-2">Backend</h3>
          <ul className="text-secondary space-y-1">
            <li>Java / Spring</li>
            <li>Python / FastAPI</li>
            <li>REST APIs</li>
            <li>MySQL / PostgreSQL</li>
            <li>Dart / Flutter</li>
          </ul>
        </motion.div>
      </div>

      {/* Wrapper zentriert die Timeline */}
      <div className="mt-20 w-full flex justify-center">
        {/* Actual timeline block */}
        <div className="relative border-l border-gray-700 pl-8 max-w-4xl font-body">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative pl-3" // pl-3 damit Text weiter rechts ist
            >
              <div
                className={`absolute -left-4 top-1 w-3 h-3 rounded-full ${styles.mainAccentColor}`}
              />
              {item.link ? (
                <div>
                  <h4 className="mb-2 text-xl text-white">{item.title}</h4>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
    inline-flex items-center justify-center
    w-11 h-11
    rounded-lg
    bg-[#1d2746]
    border ${styles.mainAccentColorBorder}
    shadow-sm
    transition
    hover:scale-110 hover:shadow-md
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
  `}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              ) : (
                <h4 className="mb-2 text-xl text-white">{item.title}</h4>
              )}

              <p className="text-secondary mt-2">{item.year}</p>
              <p className="text-secondary mt-1">Technologies: {item.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
