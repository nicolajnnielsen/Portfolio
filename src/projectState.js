import marsImg1 from './images/projects/mars/shortsonmars-desktop.jpg';
import marsImg2 from './images/projects/mars/shortsonmars-mobile.png';
import igglesblitzImg1 from './images/projects/Blitz.png';

const projectsState = {
	projects: {
		marsweather: {
			id: 0,
			title: 'Shorts On Mars', 
			skillsUsed: ['JS', 'React', 'CSS3', 'Fetch'],
			link: 'https://shortsonmars.netlify.app/',
			gitLink: 'https://github.com/nicolajnnielsen/ShortsOnMars',
			images: [
				{
					original: marsImg1,
					originalAlt: 'Shorts On Mars - Mars Weather App',
					thumbnail: marsImg1,
					thumbnailAlt: 'Shorts On Mars - Mars Weather App thumbnail',
					description: 'Weather info Desktop',
				},
				{
					original: marsImg2,
					originalAlt: 'Shorts On Mars - Mars Weather App',
					thumbnail: marsImg2,
					thumbnailAlt: 'Shorts On Mars - Mars Weather App thumbnail',
					description: 'Weather info Mobile',
				},
			],
			shortDesc: 'Weather app displaying weather information from Mars using a NASA API',
			fullDesc: [
				{
					element: 'p',
					text: 'Weather app displaying weather information from Mars using a NASA API. Built with React. Large focus on modern CSS properties such as backdrop filter and fallbacks in unsupported browsers.',
				},
				{
					element: 'p',
					text: "My largest goal with the project was getting familiar with working with API's, especially retrieving information and handling the request and error handling.",
				},
			]
		},
		igglesblitz: {
			id: 1,
			title: 'IgglesBlitz', 
			skillsUsed: ['WordPress', 'CSS3', 'SCSS', 'JavaScript', 'Gulp'],
			link: 'lintoproject',
			gitLink: 'linktoGithub',
			images: [
				{
					original: igglesblitzImg1,
					originalAlt: 'Cake',
					thumbnail: igglesblitzImg1,
					thumbnailAlt: 'Thumbcake',
					description: 'Cake',
				},
				{
					original: '/images/projects/todo.png',
					originalAlt: 'Cake',
					thumbnail: '/images/projects/todo.png',
					description: 'Bla bla',
				},
			],
			shortDesc: 'Wordpress Theme for the eagles blog IgglesBlitz',
			fullDesc: [
				{
					element: 'p',
					text: 'A WordPress theme for a Philadelphia Eagles focused blog I\'ve been reading for many years',
				},
				{
					element: 'h',
					text: 'User focused'
				},
				{
					element: 'p',
					text: "As a long-time reader of the blog I have a decent understanding of what brings people there, and the community it has built. While Tommy great writing is the main draw there is also a wise community and people read and participate in. Therefor I focused on supporting both of those, making readability better and giving easier access to the comment section.",
				},
			]
		},
		portfolio: {
			id: 2,
			title: 'My Portfolio', 
			skillsUsed: ['JS', 'React', 'CSS3', 'SCSS', 'Framer Motion', 'Skeumorphism'],
			link: 'lintoproject',
			gitLink: 'linktoGithub',
			images: [
				{
					original: '/images/projects/todo.png',
					originalAlt: 'Cake',
					thumbnail: '/images/projects/todo.png',
					thumbnailAlt: 'Thumbcake',
					description: 'Bla bla',
				},
				{
					original: '/images/projects/Blitz.png',
					originalAlt: 'Cake',
					thumbnail: '/images/projects/Blitz.png',
					thumbnailAlt: 'Thumbcake',
					description: 'Cake',
				},
			],
			shortDesc: 'My Portfolio',
			fullDesc: [
				{
					element: 'p',
					text: 'My portfolio made suing Create-React-App, and a few third party components such as React-Router, Framer-Motion for the page transitions and React-Image-Gallery for the slideshows on project pages.',
				},
				{
					element: 'p',
					text: "Design isn't my strongest suit so I've tried to make a fairly simple and clear design. With a narrow color scheme. I really like the skeumorphic trend and have used that since it goes well with the simplicity.",
				},
				{
					element: 'h',
					text: 'Challenges'
				},
				{
					element: 'p',
					text: "It was important to make good use of CSS Grid and avoid too much div-soup, it has however brought some challenges with routing and tansitions, for example React-Transition-Group didn't work well without pages having a parant container, whereas Framer-Motion was a better fit",
				},
			]
		},
		// todoapp: {
		// 	id: 3,
		// 	title: 'Weekly Todo App', 
		// 	skillsUsed: ['JS', 'React', 'CSS3', 'SCSS'],
		// 	link: 'lintoproject',
		// 	gitLink: 'linktoGithub',
		// 	images: [
		// 		{
		// 			original: '/images/projects/todo.png',
		// 			originalAlt: 'Cake',
		// 			thumbnail: '/images/projects/todo.png',
		// 			thumbnailAlt: 'Thumbcake',
		// 			description: 'Bla bla',
		// 		},
		// 		{
		// 			original: '/images/projects/Blitz.png',
		// 			originalAlt: 'Cake',
		// 			thumbnail: '/images/projects/Blitz.png',
		// 			thumbnailAlt: 'Thumbcake',
		// 			description: 'Cake',
		// 		},
		// 	],
		// 	shortDesc: 'App to keep a rolling todo lists for each day of the week',
		// 	fullDesc: [
		// 		{
		// 			element: 'p',
		// 			text: 'A todo app with multiple rolling and custom lists to help me put more of a system into my everyday life',
		// 		},
		// 		{
		// 			element: 'p',
		// 			text: "A learning experience where I've gotten a better understanding of complex state management, and working with a drag and drop library.",
		// 		},
		// 	]
		// },
		// indecision: {
		// 	id: 4,
		// 	title: 'Indecision', 
		// 	skillsUsed: ['React', 'SCSS'],
		// 	link: 'lintoproject',
		// 	gitLink: 'linktoGithub',
		// 	images: [
		// 		{
		// 			original: '/images/projects/NNPortfolio.png',
		// 			originalAlt: 'Cake',
		// 			originalTitle: 'Woooo',
		// 			thumbnail: '/images/projects/NNPortfolio.png',
		// 			thumbnailAlt: 'Thumbcake',
		// 			thumbnailLabel: 'Waaaa',
		// 			description: 'Cake',
		// 		},
		// 	],
		// 	shortDesc: 'Indecision app make choice react stuff',
		// 	fullDesc: [
		// 		{
		// 			element: 'p',
		// 			text: 'My first proper react app, made through the React Udemy course by Andrew Mead',
		// 		},
		// 		{
		// 			element: 'p',
		// 			text: "I was familiar before with the React and JSX basics, but making this helped me get a better grip on state and the different way to create components. I also got better practical training with some ES6 techniques.",
		// 		},
		// 	]
		// },
	}
}

export default projectsState;