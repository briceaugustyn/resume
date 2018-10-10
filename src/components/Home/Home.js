import React from "react";
import Header from '../header/header';
import About from '../about/about';
import Resume from '../resume/resume';
import Portfolio from '../portfolio/portfolio';
import Testimonials from  '../testimonials/testimonials';
import ContactUs from '../contactus/contactus';
import Footer from '../footer/footer';
import resumeData from '../../resumeData';


const Home =()=>{
    return (
        
       <div className="Home">
        <Header resumeData={resumeData}/>
        <About />
        <Portfolio />
        <Resume/>
        <Testimonials />
        <ContactUs />
        <Footer />
      </div> 
    );

};
export default Home;