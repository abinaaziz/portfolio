import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.css";
export default function Contact() {
  return (
    <div>
      <section id="contact" className="container-fluid bg-black py-5">
        <div className="container">
          <div className="contact">
            <div className="fs-5 text-secondary">Contact</div>

            <h1 className="text-white"> Let's build something together.</h1>

            {/* link */}
            <div className="social-links mt-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abinaaziz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  borderRadius: "25px",
                  color: "gray",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaEnvelope size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/abina-aziz-89ab2b231/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  borderRadius: "25px",
                }}
              >
                <FaLinkedin size={25} />
              </a>

              <a
                href="https://github.com/abinaaziz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  borderRadius: "25px",
                }}
              >
                <FaGithub size={25} />
              </a>
            </div>

            {/* details */}

            <div className="container detail">
              <div className="contact-form">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows={5}
                      placeholder="Write your message..."
                      required
                    />
                  </div>

                  <button type="submit" className="contact-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
