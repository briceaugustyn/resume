import React from 'react';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }


  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
      const { name, email, message } = this.state;
      return (
  
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">LET'S GET IN TOUCH Tell me about yourself and what I can do for you.
              </p>
              <p className="lead">Feel free to contact me via email at: 
              </p>
              <p className="lead">
              <a href="mailto:baugustyn1000@gmail.com?subject=Hello&body=We+want+to+hire+you">baugustyn1000@gmail.com</a>
              </p>
              <p className="lead">or drop a line in the form at the contact page
              </p>
               
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
             
             
              <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  {/* You still need to add the hidden input with the form name to your JSX form */}
  <input type="hidden" name="form-name" value="contact" />

</form>


              <form onSubmit={this.handleSubmit}>
              <p>
                <label>
                  Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message" value={message} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>


              <form action method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input type="text" defaultValue size={35} id="contactName" name="contactName" />
                  </div>
                  <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
                  </div>
                  <div>
                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                  </div>
                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form> {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning"> Error boy</div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />Your message was sent, thank you!<br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  Brice Augustyn<br />
                  606 Third Avenue <br />
                  San Diego, CA 92101 US<br />
                  <span>(707) 292 4556</span>
                </p>
              </div>
              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets </h4>
                <ul id="twitter">
                  <li>
                    <span>
                      just building my new portfolio in reaasact fun #reactjs #hacking
                      <a href="#"> http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b><a href="#">1 Days Ago</a></b>
                  </li>
                  <li>
                    <span>
                      I just went to this Python meet up and learn about data analysis so cool #python 
                      <a href="#"> http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b><a href="#">3 Days Ago</a></b>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section> 
      );
    }
  };
  export default ContactUs;