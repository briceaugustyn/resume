import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (

      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">

            <h1>From Web Components and UI/UX animations to React.JS, and Node.JS. Check out my latest web software development portfolio projects.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src="images/portfolio/krypto1.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>KryptoFire</h5>
                        <p>Bitcoin</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/portfolio/iphone7s_large2.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>The Black List</h5>
                        <p>Self Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src="images/portfolio/ADQMS.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ADQMS Website</h5>
                        <p>Aerospace Consultant Website</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt src="images/portfolio/SD-Discount Nutrition.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>SD Discount Nutrition</h5>
                        <p>Store Website</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}


              {/* item end */}
              {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt src="images/portfolio/judah.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Judah</h5>
                          <p>Webdesign</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> item end */}
              {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt src="images/portfolio/into-the-light.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Into The Light</h5>
                          <p>Photography</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> item end */}
              {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt src="images/portfolio/farmerboy.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Farmer Boy</h5>
                          <p>Branding</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> item end */}
              {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt src="images/portfolio/girl.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Girl</h5>
                          <p>Photography</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> item end */}
              {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title>
                      <img alt src="images/portfolio/origami.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Origami</h5>
                          <p>Illustrration</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> item end */}
              {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" title>
                      <img alt src="images/portfolio/retrocam.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Retrocam</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>  item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
            --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/krypto2.png" alt />
            <img className="scale-with-grid" src="images/portfolio/krypto3.png" alt />

            <div className="description-box">
              <h4>Krypto Fire</h4>
              <p>KyrptoFire is cryptocurrency mobile web application: one stop shop for all altcoin information, market exchange data and viral news.</p>

              <h4>Technologies</h4>
              <p>HTML, CSS, Bootstrap, JQuery, API, Firebase </p>
              <span className="categories"><i className="fa fa-tag" />Krypto Fire App</span>
            </div>
            <div className="link-box">
              <a href="https://locolucco209.github.io/CryptoRiderz/">Tryout</a>
              <a href="https://github.com/locolucco209/CryptoRiderz">GitHub</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">

            <img className="scale-with-grid" src="images/portfolio/iphone7s_large2.png" alt />

            <div className="description-box">
              <h4>The Black List</h4>
              <p>The Blacklist is a self development mobile web application:Best tool to help you to become more productive than before.</p>

              <h4>Technologies</h4>
              <p>ReactJS, OAuth, Bootstrap, Node, MySQL, Heroku</p>
              <span className="categories"><i className="fa fa-tag" />The Black List App</span>
            </div>
            <div className="link-box">
              <a href="https://blacklist-final.herokuapp.com/">Tryout</a>
              <a href="https://github.com/AnthonyWilson1/BlackList">GitHub</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}

       
        <div id="modal-03" className="popup-modal mfp-hide">

          <img className="scale-with-grid" src="images/portfolio/ADQMS.jpg" alt />

          <div className="description-box">
            <h4>ADQMS</h4>
            <p>Web Site in Progress built in React</p>

            <h4>Technologies</h4>
            <p>ReactJS, Netlify</p>
            <span className="categories"><i className="fa fa-tag" />Web Site</span>
          </div>
          <div className="link-box">
            <a href="https://adaptivequalitysystems.netlify.com/">Tryout</a>
            <a href="https://github.com/briceaugustyn/sddiscountnutrition">GitHub</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-03 End */}


        



        <div id="modal-04" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/SD-Discount Nutrition.jpg" alt />
          <div className="description-box">
            <h4>SD Discount Nutrition</h4>
            <p>Web Site in Progress built in HTML, CSS</p>
            <span className="categories"><i className="fa fa-tag" />Website</span>
          </div>
          <div className="link-box">
          <a href="http://www.augustynbrice.com/test/">Tryout</a>
            <a href="https://github.com/briceaugustyn/sddiscountnutrition">GitHub</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-03 End */}
       
          </div> {/* row End */ }
        </section > 
      );
  }
};
export default Portfolio;