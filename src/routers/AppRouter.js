import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import FrontPage from '../components/FrontPage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import PortfolioItem from '../components/PortfolioItem';
import NotFoundPage from '../components/NotFound';
import SocialLinks from '../components/socialLinks';
import AboutPage from '../components/AboutPage';
import { AnimatePresence } from 'framer-motion';

const AppRouter = () => (
	<BrowserRouter>
		<div id="route-wrapper" className="page-wrapper">
			<Header />
			<Route render={({location}) => (
				<AnimatePresence initial={false}>
					<Switch location={location} key={location.pathname}>
						<Route path="/" component={FrontPage} exact={true} />
						<Route path="/portfolio" component={PortfolioPage} exact={true} />
						<Route path="/portfolio/:id" component={PortfolioItem} />
						<Route path="/about" component={AboutPage} />
						<Route path="/contact" component={ContactPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</AnimatePresence>
			)} />
			<SocialLinks />
		</div>
	</BrowserRouter>
);

export default AppRouter;