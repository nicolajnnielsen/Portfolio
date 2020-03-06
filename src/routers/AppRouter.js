import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Header from '../components/Header';
import FrontPage from '../components/FrontPage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import PortfolioItem from '../components/PortfolioItem';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
	<BrowserRouter >
		<Fragment>
			<Header />
			<Switch>
				<Route path="/" component={FrontPage} exact={true} />
				<Route path="/portfolio" component={PortfolioPage} exact={true} />
				<Route path="/portfolio/:id" component={PortfolioItem} />
				<Route path="/contact" component={ContactPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</Fragment>
	</BrowserRouter>
);

export default AppRouter;