import React, {Fragment, Component} from 'react';
import Skill from './Skills';
import { motion } from 'framer-motion';
import PageVariant, {PageTransition} from '../PageTransitionVariant';

class AboutPage extends Component {
	state = {
		skills: {
			html: {id: 'html', title: 'HTML5', text: 'Strong HTML skills with a large focus on clean and semantic markup to avoid confusing structure. I am also trying to put a greater emphasis on accessibility.', active: false},
			css: {id: 'css', title: 'CSS3', text: 'Strong, well-rounded skills and knowledge of the various properties. It’s been a goal to learn the newest layout properties like Grid and Flexbox, as a result I work well with them, and know how to implement fallback for Grid where not supported. Additionally I am familiar with a few frameworks and how to work in that way. Experienced with SCSS, and familiar with BEM and CSS Modules', active: false},
			js: {id: 'js', title: 'JavaScript', text: 'I have good working knowledge, enabling me to work effectively with creating more interactivity on sites. I have been focusing more on my JS programming skills lately, and honing my knowledge of various ES6 methods.', active: false},
			react: {id: 'react', title: 'React', text: 'I haven’t been using React for very long, but have a good understanding of the fundamentals, working with JSX and both functional- and class components. Building interactable interfaces using state, though I still need to get better at working with more complex state objects, and using tools like Redux or Context API.', active: false},
			wordpress: {id: 'wordpress', title: 'WordPres', text: 'I have a good understanding of working with WordPres, its file structure and admin tools. I have basic experience with theme development, where I have developed a couple of themes using Underscores.', active: false},
			php: {id: 'php', title: 'PHP', text: 'Most of my PHP experience has been for templating in conjunction with Magento and WordPress. Though I also have a little experience troubleshooting and programming in a more back-end oriented context. ', active: false},
			sql: {id: 'sql', title: 'T-SQL / mySql', text: 'I know basic querying, and how to accomplish tasks with both queries and GUI\'s like phpmyadmin. Additionally I have basic knowledge of designing simple relational databases.', active: false},
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
						<h1 className="object-header">whoisnicolaj: {"{"}</h1>
						<p className="indent"><span className="object-key">name:</span> <span className="object-value">'Nicolaj N. Nielsen'</span>,</p>
						<p className="indent"><span className="object-key">age:</span> <span className="object-value">29</span>,</p>
						<p className="indent"><span className="object-key">education:</span> <span className="object-value">'Multimedia Design and Communication - University College Nordjylland'</span>,</p>
						<p className="indent"><span className="object-key">lastJob:</span> <span className="object-value">'Front-End Devloper, MXAgency'</span>,</p>
						<p className="indent last"><span className="object-key">interests:</span> [<span className="object-value">'Video Game', 'Music', 'Podcasting',</span>],</p>
						<p>{"}"}</p>
					</div>
				</motion.main>
				<motion.section aria-label="My skills" className="skills skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={{...PageTransition, delay: 0}}>
					{Object.entries(this.state.skills).map(([key, value]) => (
						<Skill key={key} id={value.id} title={value.title} text={value.text} active={value.active} toggleActive={this.toggleActive} />
					))}
				</motion.section>
				<motion.article className="about-text skeuMorphBg" initial="initial" animate="enter" exit="exit" variants={PageVariant} transition={PageTransition} >
					<p>
						As a developer, I am on a never-ending quest of learning, my natural curiosity makes me seek out new skills, ways of accomplishing things and stuff to build. I am a quick learner who picks up on the basics of new systems, frameworks or languages without too many issues.
					</p>
					<p>
						Working in web development never seemed to be in the cards for me. Despite having an interest in computers and the web, I never imagined being able to work with code or programming. 
						I have always had a hard time figuring out what to do with my life, and what kind of work I wanted to do. An interest in language took me on a trip to the university, where I was introduced to the world of web design. 
						My interest was piqued, and I enrolled in Multimedia Design and Communication. It was here that I got hands on with my first bits of code. At the risk of sounding dramatic, it changed everything. 
						I was hooked, and it was suddenly much clearer what kind of work I wanted to spend my time doing. Making cool, pretty, informative and intuitive UI’s.
					</p>
					<p>
						I have two drivers that motivate and propel me forward. They’re aspects of development that have particularly caught my interest. 
						One is the seemingly unending opportunities to learn and discover. There is always a new tool, property or technique to learn, and I get immense satisfaction from acquiring new knowledge. 
						The second thing that I have come to appreciate a great deal in working on web pages or apps, is the 'aha' moments, when the light-bulb goes on as I find a solution to a bug or figure out a way to accomplish an arduous task. 
						It is a rewarding feeling of accomplishment, and extremely fulfilling.
					</p>
					<p>
					My educational background has been more focused on styling, design and ensuring a strong connection between those and the message being communicated. 
					My strengths in that regard are around making highly user-friendly solutions. Since graduating I have put a greater emphasis on the more programming heavy aspects of development, and have specifically focused on improving my JavaScript skills. 
					</p>
				</motion.article>
			</Fragment>
		)
	};
}

export default AboutPage;