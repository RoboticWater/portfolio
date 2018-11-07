import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectEntry.css';

class ProjectEntry extends Component {
  render() {
    return (
      <div className="ProjectEntry">
        <div className="project-container">
          <h1 className="name">{this.props.name}</h1>
          <div className="highlight" style={{background: this.props.color}}><h1>{this.props.name}</h1></div>
        </div>
      </div>
    );
  }
}

export default ProjectEntry;
