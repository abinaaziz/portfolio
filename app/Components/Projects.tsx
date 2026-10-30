import { FaGithub } from "react-icons/fa";
import "./Projects.css";
export default function Projets() {
  return (
    <div>
      <section id="projects" className="container-fluid bg-black py-5">
        <div className="container">
          <div className="fs-5 text-secondary">Projects</div>
          <h1 className="text-white"> Things I've built end to end. </h1>
          <div className="fs-xs" style={{ color: "gray" }}>
            Scroll to move through each build.
          </div>
          {/* first project */}
          <div className="pro mt-3 p-3">
            <h4 className="mt-3 text-white">
              Customer Relationship Management(CRM)
            </h4>

            <div className="d-flex gap-2">
              <span className="protools">React.js</span>
              <span className="protools">Django</span>
              <span className="protools">REST Framework</span>
              <span className="protools">Python</span>
              <span className="protools">PostgreSQL</span>
            </div>

            <div>
              Developed a full-stack Customer Relationship Management (CRM)
              application using React.js, Django REST Framework, and PostgreSQL.
              Implemented core modules for lead management, contact ownership,
              company and product management, and activity tracking. Integrated
              REST APIs to enable seamless frontend–backend communication and
              developed interactive interfaces for creating, updating, and
              managing customer data and business workflows.
            </div>
               
               <a
  href="https://github.com/abinaaziz"
  target="_blank"
  rel="noopener noreferrer"
  className="protools"
>
  <FaGithub size={20} />
   View Code
</a>
             

          </div>

          {/* second project */}

          <div className="pro mt-3 p-3">
            <h4 className="mt-3 text-white">E-Commerce Website (eSHOPZ.co)</h4>

            <div className="d-flex gap-2">
              <span className="protools">React.js</span>
              <span className="protools">Django</span>
               <span className="protools">Redux Toolkit</span>
                <span className="protools">JWT</span>
              <span className="protools">REST Framework</span>
              <span className="protools">Python</span>
              <span className="protools">PostgreSQL</span>
            </div>

            <div>
              Developed a full-stack e-commerce web application using React.js,
              Django REST Framework, and PostgreSQL. Implemented user
              authentication, product browsing, shopping cart management, and
              checkout functionality. Integrated REST APIs for frontend–backend
              communication and database operations, creating a responsive and
              user-friendly online shopping experience.
            </div>
             <a
  href="https://github.com/abinaaziz"
  target="_blank"
  rel="noopener noreferrer"
  className="protools"
>
  <FaGithub size={20} />
   View Code
</a>
          </div>

          {/* ======== */}
        </div>
      </section>
    </div>
  );
}
