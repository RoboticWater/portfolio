import React, { Component } from 'react';
import classNames from 'classnames';
import './MainLinks.css';

class App extends Component {
  render() {
    return (
      <div className={classNames("MainLinks", {hide: this.props.hide})}>
        <div className="link-plane teal"></div>
        <div className="link top">
          <div className="link__mask">
          <div className="overlay"></div>
          <span className="link__content">Contact</span>
          </div>
        </div>
        <div className="link-plane blue middle"></div>
        <div className="link front">
          <div className="link__mask">
          <div className="overlay"></div>
          <span className="link__content">Works</span>
          </div>
        </div>
        <div className="link-plane yellow middle"></div>
        <div className="link bottom">
          <div className="link__mask">
          <div className="overlay"></div>
          <span className="link__content">About</span>
          </div>
        </div>
        <div className="link-plane red"></div>
      </div>
    );
  }
}

export default App;
