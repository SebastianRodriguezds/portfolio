import {
  FaJsSquare,
  FaReact,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import { SiCsharp, SiGit, SiJest, SiMongodb } from "react-icons/si";

export default function Technologies() {
  return (
    <>
      <div id="technologies" className="tech_container">
        <h2 className="tech_container-title">Technologies</h2>
        <div className="tech_container-items">
          <ul>
            <li className="tech_container-item">
              <FaJsSquare size={38} color="#F7DF1E" />
              <span>JavaScript</span>
            </li>

            <li className="tech_container-item">
              <FaReact size={38} color="#61DBFB" />
              <span>React</span>
            </li>

            <li className="tech_container-item">
              <FaPython size={38} color="#3776AB" />
              <span>Python</span>
            </li>

            <li className="tech_container-item">
              <FaDatabase size={38} color="#336791" />
              <span>SQL</span>
            </li>

            <li className="tech_container-item">
              <SiCsharp size={38} color="#239120" />
              <span>C#</span>
            </li>

            <li className="tech_container-item">
              <FaPhp size={38} color="#777BB4" />
              <span>PHP</span>
            </li>

            <li className="tech_container-item">
              <FaHtml5 size={38} color="#E34F26" />
              <span>HTML</span>
            </li>

            <li className="tech_container-item">
              <FaCss3Alt size={38} color="#1572B6" />
              <span>CSS</span>
            </li>

            <li className="tech_container-item">
              <SiJest size={38} color="#C2133B" />
              <span>Jest</span>
            </li>

            <li className="tech_container-item">
              <SiGit size={38} color="#F05032" />
              <span>Git</span>
            </li>

            <li className="tech_container-item">
              <SiMongodb size={38} color="#47A248" />
              <span>MongoDB</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
