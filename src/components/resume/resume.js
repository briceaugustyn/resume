import React from 'react';

class Resume extends React.Component {
  render() {
    return (
      <div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>FRONTEND DEVELOPMENT
              </p>
            <p>Getting things on the web is hard. Getting them to look great is even harder.
               A combination of design and technical expertise are both required to get the job done right.
                I have perfected my skills to deliver the best experience, where it be on a desktop computer or a smartphone. These are my arsenal.
              </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand HTML" /><em>HTML</em></li>
                <li><span className="bar-expand CSS" /><em>CSS</em></li>
                <li><span className="bar-expand JQuery" /><em>JQuery</em></li>
                <li><span className="bar-expand Node" /><em>Node</em></li>
                <li><span className="bar-expand Bootstrap" /><em>Bootstrap</em></li>
                <li><span className="bar-expand ReactJS" /><em>ReactJS</em></li>
              </ul>
            </div>{/* end skill-bars */}

            {/* Education
        ----------------------------------------------- */}
            <div className="row education">
              <div className="three columns header-col">
                <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    
                  <h3>University of California San Diego</h3>
                  
                    <p href="https://blacklist-final.herokuapp.com/" className="info">Boot Camp in Full stack Web Development <span>•</span> <em className="date">August 2018</em></p>
                    <p>
                      HTML5, CSS3, JavaScript, Java, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, and Git.
                    </p>
                    <p>
                    Computer Science applied to JavaScript
                    Browser Based Technologies (HTML, CSS, JavaScript, jQuery)
                    Deployment (Heroku, Git)
                    Java
                    Databases (MySQL, MongoDB)
                    Server Side Development (Node.js, Express, MERN Stack)
                    Quality Assurance
                    Internet Marketing (Semantic HTML)
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>ESIGELEC</h3>
                    <p className="info">Master Of Computer Science<span>•</span> <em className="date">September 2005</em></p>
                    <p>
                    A school created more than 110 years ago (in 1901), having a long experience in higher education,
                    </p>
                    <p>
                    Mathematics, Physics, Foreign Language, Communication, Engineering courses (Automation, Computer Science and Electronics).
                  </p>
                  <p>
                    Broad-based courses in science and technology, economics and management, and advanced majors in twelve different streams of engineering.
                  </p>
                  <p>
                  Ranking 2014 of “L’Etudiant” and “L’express”:
                  4th for Industry Networks
                  4th for International Outlook
                  2nd for Employement in IT
                  </p>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
        ----------------------------------------------- */}
            <div className="row work">
              <div className="three columns header-col">
                <h1><span>Work</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Freelance Web Developer</h3>
                    <p className="info">Front-End Web Developer <span>•</span> <em className="date">August 2018 - Present</em></p>
                    <p>KryptoFire</p>
                    <p>The Black List</p>
                    <p>The league of Legend matcher</p>
                  
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Aerospace Engineer</h3>
                    <p className="info">Electrical Engineer (15 years)<span>•</span> <em className="date">August 2014 - Present</em></p>
                    <p>
                    General Atomics Aeronautical Systems, Inc. (GA-ASI), an affiliate of privately-held General Atomics, is a leading manufacturer of Remotely Piloted Aircraft (RPA) systems, radars, and electro-optic and related mission systems solutions.</p>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills
        ----------------------------------------------- */}

          </div> {/* main-col end */}
        </div> {/* End skills */}
        {/* Resume Section End*/}
      </div>
    );
  }
};
export default Resume;