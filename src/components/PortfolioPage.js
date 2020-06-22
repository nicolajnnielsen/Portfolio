import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import projectState from '../projectState';
import PortfolioCard from './PortfolioCard';

const PortfolioPage = () => {
	const [projects] = useState(projectState.projects);
	useEffect(() => {
		const pageWrapper = document.getElementById('route-wrapper');
		pageWrapper.classList.add('page-portfolio');
		document.title = 'Projects - Nicolaj N. Nielsen Portfolio'

		return () => {
			pageWrapper.classList.remove('page-portfolio');
		}
	}, []);

	return (
			<motion.main className="portfolio content-area__1and2 skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={{enter: {transition: {staggerChildren: 0.2}}}} >
				{Object.entries(projects).map(([key, values], index) => (
					<PortfolioCard key={key} keyName={key} image={values.images[1]} title={values.title} desc={values.shortDesc} />
				))}
			</motion.main>
	);
}

export default PortfolioPage;