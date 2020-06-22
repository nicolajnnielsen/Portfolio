import React, { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import projectState from '../projectState'
import PageVariant, {PageTransition} from '../PageTransitionVariant';
import { useParams } from 'react-router-dom';
import ReactImageGallery from 'react-image-gallery';
import ErrorImg from '../images/logo.svg';


const PortfolioItem = (props) => {
	const {id} = useParams();
	const [project, setProject] = useState(projectState.projects[id]);
	const [showThumb, setShowThumb] = useState(true);

	useEffect(() => {
		console.log('hook running')
		const pageWrapper = document.getElementById('route-wrapper');
		pageWrapper.classList.add('page-portfolio-item');
		document.title = `${project.title} - Nicolaj N. Nielsen Portfolio`;

		return () => {
			pageWrapper.classList.remove('page-portfolio-item');
		}
	}, [project.title]);

	const images = project.images;

	const screenModeChange = (full) => {
		setShowThumb(prevState => !prevState);
		if (full) document.body.classList.add('fullScreen');
		else document.body.classList.remove('fullScreen');
	}

	return (
		<Fragment>
			<motion.div className="portfolio-gallery content-area__1and2 skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={PageTransition}>
				<ReactImageGallery items={images} showPlayButton={false} lazyLoad={true} useBrowserFullscreen={false} showIndex={true} showThumbnails={showThumb} onErrorImageURL={ErrorImg} onScreenChange={screenModeChange} />
			</motion.div>
			<motion.main className="portfolio-content content-area__3 skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={PageTransition}>
				<h1>{project.title} </h1>
				<aside className="project-info">
					<div>
						<h3>Built with:</h3>
						<ul className="info__list">
							{project.skillsUsed.map((skill) => (
								<li>{skill}</li>
							))}
						</ul>
						{project.link && <a href={project.link}>Live Demo</a>}
						{project.gitLink && <a href={project.gitLink}>View Code</a>}
					</div>
				</aside>
				<div className="project__text">
					{project.fullDesc.map((object, index) => {
						if (object.element === 'p') return <p key={index}>{object.text}</p>
						if (object.element === 'h') return <h3 key={index}>{object.text}</h3>
						return null;
					})}
				</div>
			</motion.main>
		</Fragment>
	);
} 

export default PortfolioItem;