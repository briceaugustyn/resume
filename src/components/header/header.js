import React from 'react';

class Header extends React.Component{
    render() {
        let resumeData = this.props.resumeData;
      return (
  
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
              <h3>I'm a San Diego based <span>{resumeData.role}</span>,front-end <span></span> and <span>backend</span>{resumeData.roleDescription} 
                 Let's <a className="smoothscroll" href="#about">start scrolling </a>
                and discover more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                
                <li><a href="https://github.com/briceaugustyn"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.linkedin.com/in/brice-augustyn-292289107/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://stackoverflow.com/users/9248823/brice-augustyn"><i className="fa fa-stack-overflow" /></a></li>
                
              </ul>
            </div>
          </div>
          <div class="skype-button bubble" data-bot-id="baugustyn1000@gmail.com"></div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
          <script src="https://swc.cdn.skype.com/sdk/v1/sdk.min.js"></script>
        </header> 
        
      );
    }
  };
   export default Header;

