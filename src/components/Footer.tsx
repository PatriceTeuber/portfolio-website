import { Linkedin, Github } from "lucide-react";
import { styles } from "../styles";

export default function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col items-center bg-transparent">
      {/* Navigation */}
      <a href="#hero" className="text-gray-200 text-4xl mt-2 mb-6 hover:opacity-70 transition">Patrice Teuber</a>

      <ul className="flex gap-10 mb-6 text-base font-medium">
        <li>
          <a href="#about" className="hover:opacity-70 transition">
            About
          </a>
        </li>
        <li>
          <a href="#experiences" className="hover:opacity-70 transition">
            Experience
          </a>
        </li>
        {/* Navigation 
        <li>
          <a href="#projects" className="hover:opacity-70 transition">
            My Projects
          </a>
        </li>*/}
      </ul>

      <div className="flex gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/patrice-teuber-84814b373"
          target="_blank"
          className={`p-3 bg-[#1d2746] rounded-xl shadow-md hover:scale-105 transition-transform border-1 ${styles.mainAccentColorBorder}`}
        >
          <Linkedin className="w-6 h-6 text-white" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/PatriceTeuber"
          target="_blank"
          className={`p-3 bg-[#1d2746] rounded-xl shadow-md hover:scale-105 transition-transform border-1 ${styles.mainAccentColorBorder}`}
        >
          <Github className="w-6 h-6 text-white" />
        </a>
      </div>

      <p className="text-gray-700 text-sm mt-4">
        © {new Date().getFullYear()} Patrice Teuber — All Rights Reserved
      </p>
    </footer>
  );
}
