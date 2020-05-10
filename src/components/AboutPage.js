import React, {Fragment, Component} from 'react';
import Skill from './Skills';
import { motion } from 'framer-motion';
import PageVariant, {PageTransition} from '../PageTransitionVariant';

class AboutPage extends Component {
	state = {
		skills: {
			html: {id: 'html', title: 'HTML5', text: 'I can do stuff, not much, but some. I\'m kind of dumb', active: false},
			css: {id: 'css', title: 'CSS3', text: 'I can do stuff, not much, but some. I\'m kind of dumb', active: false},
			scss: {id: 'scss', title: 'SCSS', text: 'I can do stuff, not much, but some. I\'m kind of dumb', active: false},
			js: {id: 'js', title: 'JavaScript', text: 'I can do stuff, not much, but some. I\'m kind of dumb', active: false},
			react: {id: 'react', title: 'React', text: 'I can do stuff, not much, but some. I\'m kind of dumb', active: false},
			wordpress: {id: 'wordpress', title: 'WordPres', text: 'I can do stuff, not much, but some. I\'m kind of dumb', active: false},
			php: {id: 'php', title: 'PHP', text: 'I can do stuff, not much, but some. I\'m kind of dumb', active: false},
			// strapi: {id: 'strapi', title: 'Strapi', text: 'New but learning, it\' very cool', active: false},
			magento: {id: 'magento', title: 'Magento', text: 'Worked with it for a year, primarily Magento 1', active: false},
			// gatsby: {id: 'gatsby', title: 'Gatsby', text: 'I know nothing', active: false},
		}
	}

	toggleActive = (id) => {
		this.setState((prevState) => {
			return {
				skills: {
					...prevState.skills,
					[id]: {
						...prevState.skills[id],
						active: !prevState.skills[id].active
					// need to set all other to false as well
					}
				}
			}	
		})
	} 

	componentDidMount() {
		const pageWrapper = document.getElementById('route-wrapper');
		pageWrapper.classList.add('page-about');
		document.title = 'About - Nicolaj N. Nielsen Portfolio'
	}

	componentWillUnmount() {
		const pageWrapper = document.getElementById('route-wrapper');
		pageWrapper.classList.remove('page-about');
	}


	render() {
		return (
			<Fragment>
				<motion.main className="about-info content-area__1 skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={PageTransition}>
					<div className="about-info__object">
						<p>whoisnicolaj: {"{"}</p>
						<p className="indent"><span className="object-key">name:</span> <span className="object-value">'Nicolaj N. Nielsen'</span>,</p>
						<p className="indent"><span className="object-key">age:</span> <span className="object-value">29</span>,</p>
						<p className="indent"><span className="object-key">education:</span> <span className="object-value">'Multimedia Design and Communication - University College Nordjylland'</span>,</p>
						<p className="indent"><span className="object-key">lastJob:</span> <span className="object-value">'Front-End Devloper, MXAgency'</span>,</p>
						<p className="indent last"><span className="object-key">interests:</span> [<span className="object-value">'Video Game', 'Music', 'Podcasting',</span>],</p>
						<p>{"}"}</p>
					</div>
				</motion.main>
				<motion.section className="about-text content-area__2 skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={PageTransition} >
					<p>
						Working in web development never seemed to be in the cards for me, despite having an interest in computers and the web I did not imagine me being able to work with code or programming. 
						I have always had a hard time figuring out what to do with my life and what kind of work I wanted to do.
						An interest in language and communication brought me on a trip to university where I was introduced to the world of web design. 
						It grabbed my interest, but it wasn't until I enrolled in Multimedia Design and Communication that I got my hands on the first bits of code. At the risk of sounding dramatic, it changed everything. 
						I was hooked, and it was suddenly clear what I wanted to work with and do in life.
					</p>
					<p>
						There are two things that have primarily caught my interest and drives me
					</p>
					<p>
						There are many interesting aspects of web development, but what drives me is the unending oppotunities to learn and discover new things, as well as the light-bulb moments that occur as I troubleshoot bugs or try to figure out how to acomplish a task.
					</p>
				</motion.section>
				<motion.section className="skills content-area__3 skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={{...PageTransition, delay: 0}}>
					{Object.entries(this.state.skills).map(([key, value]) => (
						<Skill key={key} id={value.id} title={value.title} text={value.text} active={value.active} toggleActive={this.toggleActive} />
					))}
				</motion.section>
			</Fragment>
		)
	};
}

export default AboutPage;