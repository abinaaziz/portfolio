import Image from "next/image";
import "./About.css";

export default function About() {
  return (
    <div>
      <section id="about" className="container-fluid bg-black py-5">
        <div className="container d-flex justify-content-between">
          <div className="container  d-flex justify-content-center align-item-center ">
            <Image
              src="/pic2.png"
              alt="Abina Aziz"
              width={350}
              height={350}
              className="pic"
            />
          </div>

          <div className="container">
            <div className="about-content">
              <div className="fs-5" style={{ color: "gray" }}>
                About
              </div>

              <h1 style={{ color: "white" }}>
                I turn complex ideas into scalable, production-ready web
                applications.
              </h1>

              <p className="fs-lg mt-4" style={{ color: "gray" }}>
                I am a Python Full-Stack Developer specializing in building
                robust Django REST APIs paired with modern React and Next.js
                frontends. With a strong foundation in web development and
                problem-solving, I focus on building user-friendly interfaces,
                writing clean and maintainable code, and developing functional
                web applications while continuously learning and improving my
                skills. Recent work spans full-stack web applications, including
                CRM and e-commerce projects, with a focus on responsive UI,
                backend integration, and database-driven functionality. I build
                fast, write clean code, and focus on delivering end-to-end
                solutions that solve real-world problems.
              </p>

              <div className="mt-3 p-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 style={{ color: "white" }}>Based in</h6>
                    <h6 style={{ color: "gray" }}>Sharjah</h6>

                    <h6 className="mt-4" style={{ color: "white" }}>
                      Education
                    </h6>
                    <h6 style={{ color: "gray" }}>MCA</h6>
                  </div>

                  <div className="text-start">
                    <h6 style={{ color: "white" }}>Focus</h6>
                    <h6 style={{ color: "gray" }}>Python, React</h6>

                    <h6 className="mt-4" style={{ color: "white" }}>
                      Languages
                    </h6>
                    <h6 style={{ color: "gray" }}>English, Malayalam, Hindi</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================== */}
          </div>
        </div>
      </section>
    </div>
  );
}
