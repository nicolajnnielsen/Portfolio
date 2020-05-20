import React from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';

const transition = {duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const articleVar = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: {
	  opacity: 0,
	  transition: { duration: 1.5, ...transition }
	}
}

const PortfolioCard = (props) => (
	<motion.article className="portfolio-card" data-project={props.keyName}  variants={articleVar}>
		<div className="portfolio-card__content">
			<h2 className="portfolio-card__title"><Link to={`/portfolio/${props.keyName}`}>{props.title}</Link></h2>
			<p className="portfolio-card__desc">{props.desc}</p>
			<Link to={`/portfolio/${props.keyName}`} className="portfolio-card__btn">More Info</Link>
		</div>
	</motion.article>
);

export default PortfolioCard;