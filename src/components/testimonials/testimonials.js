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
                        <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is
                          to do what you believe is great work. And the only way to do great work is to love what you do.
                          If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
                        </p>
                        <cite>Steve Jobs</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>React: Built and backed by Facebook, React is a favorite amongst developers for building and maintaining products, whether a quick POC or large enterprise software. It’s currently used by many leading companies like Instagram, Netflix, Walmart, Whatsapp, and more. React’s benefits include its component-based architecture, Virtual DOM for great performance, super fast learning curve, and popularity amongst developers with a huge community of support.
                        </p>
                        <cite>Medium.com</cite>
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