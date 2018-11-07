import React, { Component } from 'react';
import { Link } from 'react-scroll'
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';

import MainLinks from './components/MainLinks';
import ProjectEntry from './components/ProjectEntry';

import resume from './content/jb_resume_fall18.pdf';

const clamp = (val, min, max) => {
	return val > max ? max : (val < min ? min : val);
}

class App extends Component {
	constructor(props) {
    super(props);
    this.scrollContainer = React.createRef();
    this.state = {
    	scroll: 0,
    	project: false,
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

	showProject() {
		this.setState({ project: !this.state.project })
	}

	// <CSSTransitionGroup
 //          transitionName="example"
 //          transitionEnterTimeout={500}
 //          transitionLeaveTimeout={300}>
 //          {this.state.project && <div>hello</div>}
 //        </CSSTransitionGroup>

	render() {
		return (
			<div className="App" ref={this.scrollContainer}>
				<header className="header" style={{opacity: clamp((this.state.scroll - 30) / 200., 0, 1), display: (this.state.scroll > 30 ? 'block' : 'none') }}>
					<Link
						smooth={true}
						duration={360}
						easeInOutCubic
						to="home">Home</Link>
				</header>
				
				<div className="landing">
				
					<div id="home"></div>
					<div className="fixed">
						<div className="main-div left">
							<MainLinks/>
						</div>
						<div className="main-div right">
							<div className="about">
								<div className="main">
									<span className="name john">John</span>
									<span className="name britti">Britti</span>
									<span className="links">
										<a href={resume} target="_blank">resume</a>-
										<a href="https://github.com/RoboticWater" target="_blank">github</a>-
										<Link easeInOutCubic smooth={true} duration={360} to="works">works</Link></span>
								</div>
								<div className="blurb">
									<p>front-end developer in Atlanta, GA</p>
									<p>passionate about</p>
									<p>aesthetic interactions and</p>
									<p>adaptive technologies</p>
								</div>
							</div>
						</div>
						<Link
							className="scroll-prompt"
							smooth={true}
							duration={360}
							easeInOutCubic
							to="works">Works</Link>
					</div>
				</div>
				<div className="works">
					<div id="works"></div>
					<header className="works-header">
						<h1>Works</h1>
					</header>
					<div className="projects">
						<ProjectEntry name={"Percy's Travels"} color={"#FC4C5D"}/>
						<ProjectEntry name={"Lecture Code Live"} color={"#4040CC"}/>
						<ProjectEntry name={"Career Fair App"} color={"#FDDE69"}/>
					</div>
					<div className="shadow" style={{opacity: clamp(this.state.scroll / 200, 0, 1) }}></div>
				</div>
			</div>
		);
	}
}

export default App;