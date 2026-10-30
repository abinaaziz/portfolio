

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav flex-row flex-wrap justify-content-center">
          <li className="nav-item">
            <a className="nav-link px-3" href="#home">
             
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-3" href="#about">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-3" href="#skills">Skills</a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-3" href="#experience">Experience</a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-3" href="#projects">Projects</a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-3" href="#education">Education</a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-3" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
