import React, {Fragment, Component} from 'react';
import Skill from './Skills';
import { motion } from 'framer-motion';
import PageVariant, {PageTransition} from '../PageTransitionVariant';

class AboutPage extends Component {
	state = {
		skills: {
			html: {id: 'html', title: 'HTML5', text: 'Strong HTML skills with a large focus on clean and sementic markup without too much div-soup.', active: false},
			css: {id: 'css', title: 'CSS3', text: 'I work excellently with CSS, I possess strong knowledge of the newest layout propeties like Grid and Flexbox and their use. I also have experience with SCSS.', active: false},
			js: {id: 'js', title: 'JavaScript', text: 'While JavaScript is not my forté, I can work with it effectively to create more interactivity on sites, though I do prefer to use HTML and CSS where possible. Lately I have been more on my JS programming skills and honing my knowledge of various methods from ES6.', active: false},
			react: {id: 'react', title: 'React', text: 'I have been learning React and started builing more apps with it lately. I have achieved a good understanding of working with both classes and functional components. I still need to get better at working with more complex states and using tools like Redux or Context API.', active: false},
			wordpress: {id: 'wordpress', title: 'WordPres', text: 'I have a good understanding of working with WordPress and it\'s file structure and admin tools. I have basic experience with theme development, where I have developed a couple of themes using Underscores.', active: false},
			php: {id: 'php', title: 'PHP', text: 'I have experience with PHP from working in Magento and WordPress, where I\'ve mostly worked with the template language side of things. But I also have a little experience with both OOP and know how to find answers for any challenges.', active: false},
			sql: {id: 'sql', title: 'T-SQL / mySql', text: 'I know basic querying, and how to accomplish tasks with both queries and GUI\'s like myphpadmin. Aditionally I have basic knowledge of designing simple relational databases.', active: false},
			// strapi: {id: 'strapi', title: 'Strapi', text: 'New but learning, it\' very cool', active: false},
			magento: {id: 'magento', title: 'Magento', text: 'Worked with it for a year, primarily Magento 1, but also some M2. Mostly front-end work, building new pages, editing templates and layout, as well as maintenance in the admin area.', active: false},
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
				<motion.section className="about-text skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={PageTransition} >
					<p>
						As a developer I am on a never-ending quest of learning, my natural curiosity make me seek out new skills and ways of doing things. I am a quick learner who picks up on the basics of new systems, frameworks or languages.
					</p>
					<p>
						Working in web development never seemed to be in the cards for me, despite having an interest in computers and the web I did not imagine me being able to work with code or programming. 
						I have always had a hard time figuring out what to do with my life and what kind of work I wanted to do.
						An interest in language and communication brought me on a trip to university where I was introduced to the world of web design. 
						It grabbed my interest, but it wasn't until I enrolled in Multimedia Design and Communication that I got my hands on the first bits of code. At the risk of sounding dramatic, it changed everything. 
						I was hooked, and it was suddenly clear what I wanted to work with and do in life.
					</p>
					<p>
						I have two primary drivers, and aspects that has caught my interest. One is the seemingly unending oppotunities to learn and discover. There is always a new tool, property or technique to learn, and I get an immense satisfaction from acquiring new knowledge. The second thing I have come to appreciate a great deal in working on web pages or apps, is the 'aha' moments, when the light-bulb goes on as I find a solution to a bug or figure out a better way to accomplish a task.
					</p>
					<p>
						My educational background has been more focused on styling. design and ensuring a strong connection between those and the message that will be communicated. My strengths in that regard are around making highly user-friendly solutions. After graduating I have put a greater emphasis on the more programming heavy aspects of development, and have specifically focused on improving my JavaScript skills. 
					</p>
				</motion.section>
				<motion.section className="skills skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={{...PageTransition, delay: 0}}>
					{Object.entries(this.state.skills).map(([key, value]) => (
						<Skill key={key} id={value.id} title={value.title} text={value.text} active={value.active} toggleActive={this.toggleActive} />
					))}
				</motion.section>
			</Fragment>
		)
	};
}

export default AboutPage;