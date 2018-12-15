import React from 'react';

class Testimonials extends React.Component {
    render() {
      return (
  
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>I would strongly recommend Brice. He is a brilliant Engineer / Developer and has a track record of delivering on time high quality work and apps. 
                        So if you need to get things done within your time and budget constraints, Brice is most likely a person to go to.
                        </p>
                        <cite>Kevin Talbot, CFA Digital Assets and Cryptocurrencies</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>It’s been few years since my website was down and I had not done anything with it. Brice approached me and offering his services. I was skeptical as I did not see any use for my website. He was encouraging and educating me with the possibilities that I’ve never thought about. During the web development process, I was enlighten by some of his ideas. Now I see some opportunity to do more with the website. The development process was easy and was done fast. The price came just under what was originally quoted. I am very happy with the result. Brice is open and honest person. I will be continuining our business relationship with additional projects.
                        </p>
                        <cite>Jason Lee, Adaptive Quality Systems Management LLC</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                  </ul>
                </div> {/* div.flexslider ends */}
              </div> {/* div.flex-container ends */}
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section> 
      );
    }
  };
  export default Testimonials;