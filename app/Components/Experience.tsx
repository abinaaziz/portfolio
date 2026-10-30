import "./Experience.css";

export default function Experience() {
  return (
    <>
    <section id="experience" className="container-fluid bg-black py-5">
      <div className="container">
        <div className="fs-5 text-secondary">Experience</div>

        <h1 className="text-white">Where I've worked and built.</h1>

        <div className="exp mt-3 p-3">
          {/* First line */}
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <h4 className="mt-3 text-white">
              Python Full-Stack Developer Intern
            </h4>

            <span className="mt-3">Oct 2025 - Sep 2026</span>
          </div>

          {/* Second line */}
          <h6 className="mt-1" style={{ color: "#7EF0E3" }}>
            Upcode Software Labs, Malappuram
          </h6>

          {/* paragrph */}

          <div>
             Developed full-stack web applications using Python, Django,
            React.js, and PostgreSQL, integrating REST APIs for seamless
            frontend–backend communication.Contributed to a CRM application
            by developing responsive frontend modules, implementing API
            integration, and connecting application components with the
            database.Built an e-commerce application with user
            authentication, product management, and shopping cart functionality
            using React.js, Django REST Framework, and PostgreSQL. Designed
            responsive user interfaces using HTML, CSS, JavaScript, Bootstrap,
            and Material UI, while using Git and GitHub for version control and
            project collaboration.
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
