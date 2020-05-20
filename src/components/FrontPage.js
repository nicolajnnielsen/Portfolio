import React, { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PageVariant, {PageTransition} from '../PageTransitionVariant';
import projectsState from '../projectState';
import PortfolioCard from './PortfolioCard';

const FrontPage = () => {
	const [projects, setProjects] = useState(projectsState.projects);
	useEffect(() => {
		const pageWrapper = document.getElementById('route-wrapper');
		pageWrapper.classList.add('page-front');
		document.title = 'Nicolaj N. Nielsen Portfolio'

		return () => {
			pageWrapper.classList.remove('page-front');
		}
	}, []);

	return (
		<Fragment>
			<motion.main className="frontpage-intro content-area__1and2" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={PageTransition}>
				<h1>Nicolaj N. Nielsen</h1>
				<h2>Front-end Developer with a hunger for learning, a focus on straightforward code and userfriendly</h2>
			</motion.main>
			<motion.section aria-labelledby="header-projectHighlights" className="portfolio frontpage-portfolio content-area__3 skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={{...PageTransition, delay: 0}} >
				<h2 id="header-projectHighlights" className="frontpage-portfolio__header">Project Highlights</h2>
				{Object.entries(projects).map(([key, values], index) => {
					if (index < 3) {
						return <PortfolioCard key={key} keyName={key} image={values.images[1]} title={values.title} desc={values.shortDesc} />
					}
					return null;
				})}
			</motion.section>
		</Fragment>

	)
};

export default FrontPage;