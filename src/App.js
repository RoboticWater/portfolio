import React, { Component } from 'react';
import './App.css';

import MainLinks from './components/MainLinks';

const clamp = (val, min, max) => {
	return val > max ? max : (val < min ? min : val);
}

class App extends Component {
	constructor(props) {
    super(props);
    this.scrollContainer = React.createRef();
    this.state = {
    	scroll: 0
    }
  }

	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll.bind(this));
	}

	handleScroll(event) {
		this.setState({ scroll: event.srcElement.scrollingElement.scrollTop });
	}

	render() {
		return (
			<div className="App" ref={this.scrollContainer}>
				<div className="landing">
					<div className="fixed">
						<MainLinks/>
						<div className="about">
							<div className="main">
								<span className="name john">John</span>
								<span className="name britti">Britti</span>
								<span className="links"><a href="">resume</a> - <a href="">github</a></span>
							</div>
							<div className="blurb">
								<p>front-end developer in Atlanta, GA</p>
								<p>passionate about</p>
								<p>aesthetic experiences and</p>
								<p>adaptive technologies</p>
							</div>
						</div>
						<div className="scroll-prompt">Works</div>
					</div>
				</div>
				<div className="works">
					<div className="shadow" style={{opacity: clamp(this.state.scroll / 50, 0, 1) }}></div>
				</div>
			</div>
		);
	}
}

export default App;