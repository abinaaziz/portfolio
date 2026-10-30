import "./Education.css";
export default function Education() {
  return (
    <div>
      <section id="education" className="container-fluid bg-black py-5">
        <div className="container">
          <div className="fs-5 text-secondary">Education</div>

          <h1 className="text-white">Learning, credentials, and language.</h1>
          {/* mca */}

          <div className="container d-flex justify-content-between align-items-start">
            <div className="container">
              <div className="edu mt-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h5 className="mt-2 text-white">
                    Master Of Computer Application
                  </h5>

                  <span className="mt-2" style={{ color: "gray" }}>
                    2018-2021
                  </span>
                </div>
                <span style={{ color: "#7EF0E3" }}>
                  APJ Abdul Kalam Technological University
                </span>
                <span style={{ color: "gray" }}>Grade A</span>
              </div>

              {/* bca */}

              <div className="edu mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mt-2 text-white">
                    Bachelor Of Computer Application
                  </h5>

                  <span className="mt-2" style={{ color: "gray" }}>
                    2015-2018
                  </span>
                </div>
                <span style={{ color: "#7EF0E3" }}>
                  Mahathma Gandhi University
                </span>
                <span style={{ color: "gray" }}>CGPA:8.33</span>
              </div>
            </div>

            {/* certification */}
            <div className="container ">
              <h5 className="text-white">Cerification</h5>

              <div className="edu mt-3 ">
                <h5 className="mt-2 text-white">
                  Certificate of Intern - Python Full-Stack Developer
                </h5>
                <div className="d-flex  justify-content-between align-items-center">
                  <h6 style={{ color: "#7EF0E3" }}>
                    Upcode Software Labs, Malappuram
                  </h6>
                  <span className="fs-xs" style={{ color: "gray" }}>
                    Sep 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== */}
        </div>
      </section>
    </div>
  );
}
