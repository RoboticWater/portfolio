import React, { Component } from 'react';
import classNames from 'classnames';
import './MainLinks.css';

class MainLinks extends Component {
  render() {
    return (
      <div className={classNames("MainLinks", {hide: this.props.hide})}>
        <div className="link-plane teal"></div>
        <div className="link top">
          <div className="link__mask">
          <div className="overlay"></div>
          <span className="link__content">Code</span>
          </div>
        </div>
        <div className="link-plane blue middle"></div>
        <div className="link front">
          <div className="link__mask">
          <div className="overlay"></div>
          <span className="link__content">AI</span>
          </div>
        </div>
        <div className="link-plane yellow middle"></div>
        <div className="link bottom">
          <div className="link__mask">
          <div className="overlay"></div>
          <span className="link__content">Design</span>
          </div>
        </div>
        <div className="link-plane red"></div>
      </div>
    );
  }
}

export default MainLinks;
