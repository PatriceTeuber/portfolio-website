import { motion } from "motion/react";
import { styles } from "../styles";

const items = [
  {
    title: "Projekt: Webportal für Kundenverwaltung",
    year: "2022",
    tech: "React, Tailwind, Node.js, MongoDB",
  },
  {
    title: "Projekt: Mobile App für interne Logistik",
    year: "2023",
    tech: "React Native, TypeScript, Firebase",
  },
  {
    title: "Projekt: Dashboard für Datenanalyse",
    year: "2024",
    tech: "Next.js, PostgreSQL, Prisma, Chart Libraries",
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
        <p className={styles.sectionSubText}>My Journey</p>
        <h2 className={styles.sectionHeadText}>Experiences</h2>
      </motion.div>

      {/* Frontend + Backend Tiles */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className={styles.cards}
        >
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>React / TypeScript</li>
            <li>React Native</li>
            <li>Tailwind CSS</li>
            <li>UI/UX Prototyping</li>
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
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Node.js / Express</li>
            <li>Java / Spring Boot</li>
            <li>REST / GraphQL APIs</li>
            <li>SQL & NoSQL Databases</li>
          </ul>
        </motion.div>
      </div>

      {/* Wrapper zentriert die Timeline */}
      <div className="mt-20 w-full flex justify-center">
        {/* Actual timeline block */}
        <div className="relative border-l border-gray-700 pl-8 max-w-4xl w-full">
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
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.year}</p>
              <p className="text-gray-300 text-sm mt-1">
                Technologies: {item.tech}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
