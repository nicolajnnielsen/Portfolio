import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import PageVariant, {PageTransition} from '../PageTransitionVariant';

const NotFoundPage = () => {
	useEffect(() => {
		const pageWrapper = document.getElementById('route-wrapper');
		pageWrapper.classList.add('page-404');
		document.title = '404 Not Found - Nicolaj N. Nielsen Portfolio'

		return () => {
			pageWrapper.classList.remove('page-404');
		}
	}, []);

	return (
		<motion.div className="content-area__1and2 skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={PageTransition}>
			404! <Link to="/" >Go Home</Link>
		</motion.div>
	)
};

export default NotFoundPage;