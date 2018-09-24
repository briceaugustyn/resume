import React, { Component } from 'react';
import Pdf from '../Document/resume-Brice-Augustyn-9-14-18.pdf';

class Download extends Component {

  render() {

    return (
      <div className = "Download">
      
        <a href = {Pdf} target="_blank" className="button"><i className="fa fa-download" />Download Resume</a>
      </div>
    );
  }
}

export default Download;