import React from 'react';
import Download from '../Download/Download';

class About extends React.Component {
    render() {
      return (
  
       
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>My primarily focus is to design web applications, both mobile and desktop.
              As a former aerospace engineer and as a web developer, I have never stopped engaging my passion to help others and solve complex problems. I enjoy leveraging my education, research, and customer service background to bring leadership, obsessive attention to detail, and mission-driven work ethic to projects.
              I am a complete full-stack developer with a dedication to deliver products that exceed the customers expectation, rich interface, fast response and thoughtful UI/UX design.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Brice Augustyn</span><br />
                    <span>San Diego, CA
                    </span><br />
                    <span><a href="tel:7072924556">1 (707) 292 4556</a></span><br />
                    <span>baugustyn1000@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <Download />
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section> 
      );
    }
  };
  export default About;