import React from 'react';
class Footer extends React.Component {
    render() {
      return (
  
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
              <li>
                <a href="https://github.com/briceaugustyn"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.linkedin.com/in/brice-augustyn-292289107/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://stackoverflow.com/users/9248823/brice-augustyn"><i className="fa fa-stack-overflow" /></a></li>

              </ul>
              <ul className="copyright">
                <li>© Copyright 2018 Brice.A</li>
                <li>Design by <a title="Styleshout" href="http://www.briceaugustyn.com/">Brice Augustyn</a></li>   
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer> 
      );
    }
  };
  export default Footer;