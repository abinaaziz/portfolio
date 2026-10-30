
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience"
import Projets from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

export default function Home(){
  return(
    <div>
      <Navbar/>

       <section id="home" className="container-fluid bg-black py-5">
        <div className="head-section">PYTHON FULL-STACK DEVELOPER</div>
        <div className=" head-content text-white">Abina Aziz</div>
          <p className="head-description">
            I build responsive web applications using modern
            frontend and backend technologies.
          </p>
          <div className="btn-outline">
          <a href="#contact" className="button">
             Get in touch
            </a>
            </div>
      </section>

      <About/>
      <Skills/>
      <Experience/>
      <Projets/>
      <Education/>
      <Contact/>
    </div>
  )
}