
import "./Skills.css";

export default function Skills() {
    return (
        <>
        <section id="skills" className="container-fluid bg-black py-5">

            <div className="container">
                <div className="fs-5 text-secondary">Skills</div>

                <h1 className="text-white">
                    The stack I build with.
                </h1>

                <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">

                    {/* First div */}
                    <div className="skill">
                        <h5 className="text-white">
                            Tools & Technologies
                        </h5>

                        <div className="d-flex gap-2">
                            <span className="tools">REST API</span>
                            <span className="tools">Git</span>
                        </div>
                    </div>

                    {/* Second div */}
                    <div className="skill">
                        <h5 className="text-white">
                            Frameworks
                        </h5>

                        <div className="d-flex gap-2">
                            <span className="tools">Django</span>
                            <span className="tools">Flask</span>
                        </div>
                    </div>

                    {/* Third div */}
                    <div className="skill">
                        <h5 className="text-white">
                            Frontend 
                        </h5>

                        <div className="d-flex gap-2">
                            <span className="tools">HTML5</span>
                            <span className="tools">CSS</span>
                            <span className="tools">Bootstrap</span>
                            <span className="tools">MUI</span>

                        </div>
                    </div>

                    {/* Fourth div */}
                     <div className="skill">
                        <h5 className="text-white">
                           React.js
                        </h5>

                        <div className="d-flex gap-2">
                            <span className="tools">Components</span>
                            <span className="tools">Hooks</span>
                            <span className="tools">React Router</span>
                            <span className="tools">Axios</span>

                        </div>
                    </div>

                    {/* Fifth div */}
                     <div className="skill">
                        <h5 className="text-white">
                            Languages
                        </h5>

                        <div className="d-flex gap-2">
                            <span className="tools">Python</span>
                            <span className="tools">Javascript</span>
                            <span className="tools">Typescript</span>
                           

                        </div>
                    </div>

                    {/* Sixth div */}
                     <div className="skill">
                        <h5 className="text-white">
                           Databases 
                        </h5>

                        <div className="d-flex gap-2">
                            <span className="tools">MySQL</span>
                            <span className="tools">PostgreSQL</span>
                           
                        </div>
                    </div>








                </div>
            </div>

        </section>
        </>
    );
}
