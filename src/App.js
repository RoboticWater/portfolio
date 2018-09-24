import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import './App.css';

import MainLinks from './components/MainLinks';

class App extends Component {
	render() {
		return (
			<Router className="App">
				<Route render={({ location }) => (
					<div className="fill">
						<div className="name">
							<span className="john">John</span>
							<span className="britti">Britti</span>
							<span className="blurb">Code. Art. Web. Games.</span>
						</div>
						<MainLinks/>

						<div style={styles.content}>
							<TransitionGroup>
								<CSSTransition
									key={location.key}
									classNames="fade"
									timeout={300}>
									<Switch location={location}>
										<Route exact path="/work" component={Work} />
										<Route exact path="/work/:artifact" component={Work} />
										<Route exact path="/about" component={About} />
										<Route exact path="/contact" component={Contact} />
										<Route render={() => <div>Not Found</div>} />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						</div>
					</div>
				)}/>
			</Router>
		);
	}
}

export default App;
