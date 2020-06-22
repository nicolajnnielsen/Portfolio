import marsImg1 from './images/projects/mars/shortsonmars-desktop.jpg';
import marsImg2 from './images/projects/mars/shortsonmars-mobile.png';
import marsImg3 from './images/projects/mars/shortsonmars-mobile-week.png';
import marsImg4 from './images/projects/mars/shortsonmars-desktop-menu.png';

import portfolioImg1 from './images/projects/portfolio/Portfolio_Home_Desktop.png';
import portfolioImg2 from './images/projects/portfolio/Portfolio_Contact_Desktop.png';
import portfolioImg3 from './images/projects/portfolio/Portfolio_Project_Desktop.png';
import portfolioImg4 from './images/projects/portfolio/Portfolio_Contact_Mobile.png';
import portfolioImg5 from './images/projects/portfolio/Portfolio_Project_Mobile.png';
import portfolioImg6 from './images/projects/portfolio/Portfolio_About_Desktop.png';
import portfolioImg7 from './images/projects/portfolio/Portfolio_Projects_Mobile.png';

import igglesblitzImg1 from './images/projects/igglesblitz/IB_Home_Desktop-top.png';
import igglesblitzImg2 from './images/projects/igglesblitz/IB_Home_Desktop-bottom.png';
import igglesblitzImg3 from './images/projects/igglesblitz/IB_Home_Mobile.png';
import igglesblitzImg4 from './images/projects/igglesblitz/IB_Home_Mobile-menu.png';
import igglesblitzImg5 from './images/projects/igglesblitz/IB_Home_Desktop-mg.png';
import igglesblitzImg7 from './images/projects/igglesblitz/IB_Single_Mobile.png';

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
					original: marsImg4,
					originalAlt: 'Shorts On Mars - Mars Weather App',
					thumbnail: marsImg4,
					thumbnailAlt: 'Shorts On Mars - Mars Weather App thumbnail',
					description: 'Desktop version with modal and menu open',
				},
				{
					original: marsImg2,
					originalAlt: 'Shorts On Mars - Mars Weather App',
					thumbnail: marsImg2,
					thumbnailAlt: 'Shorts On Mars - Mars Weather App thumbnail',
					description: 'Weather info Mobile',
				},
				{
					original: marsImg3,
					originalAlt: 'Mobile version with week week view open',
					thumbnail: marsImg3,
					thumbnailAlt: 'Mobile version with week week view open',
					description: 'Week view of mobile version',
				},
			],
			shortDesc: 'A weather app displaying weather information from Mars using a NASA API',
			fullDesc: [
				{
					element: 'p',
					text: 'Shorts On Mars is a weather app displaying the weather conditions on Mars from the past 7 days. It’s using an API provided by NASA as part of their InSight Mission. The app is built using React, hooks and no third party libraries.',
				},
				{
					element: 'h',
					text: 'Goals'
				},
				{
					element: 'p',
					text: "My two primary goals in building this app were getting more practical experience with Hooks, especially useState and useEffect, and getting my introduction to working with API’s, fetching and displaying the relevant info. ",
				},
				{
					element: 'p',
					text: "From a design standpoint I wanted to try and create something very clean and without much use of colors. I’ve been wanting to create something with the frosted glass effect using backdrop-filters for a while, especially as support is starting to increase, while also providing a fallback. Using awe-inspiring photos from Mars as background images provided a great opportunity for that."
				},
				{
					element: 'h',
					text: 'Challenges and learning opportunities'
				},
				{
					element: 'p',
					text: "Considering I had little and no experience with Hooks and Fetch API respectively, it’s no surprise that those were the areas where I learned a lot."
				},
				{
					element: 'p',
					text: "Using the setState hook mostly came easy, it is not too different, so far, to the state object in classes, and I certainly saw the advantages in having separate self-contained pieces of state, though I am still getting the hang of what parts to bundle together, and when to separate."
				},
				{
					element: 'p',
					text: "useEffect on the other hand, had more of a learning curve. Dependencies, clean-up and when the hook would run, especially took some getting used to, but is quite intuitive once I had a better understanding of what’s happening. I’m still getting a better understanding of working with Hooks, and I’m looking forward to learning more about other ones, like useMem, but I’ve quickly seen the advantages of functional components."
				},
				{
					element: 'p',
					text: "As mentioned, a big part of making this app was learning the basics of working with an API in React and how to handle the process of fetching data. I used the Fetch API because I generally prefer learning native solutions before library ones, like Axios, to get a better understanding of the basics."
				},
				{
					element: 'p',
					text: "To guide me, I used a tutorial specific to the Mars weather API in vanilla and more general fetch and React tutorials. In the case of Mars specific one, the fetched data was immediately put in a new object with only the relevant pieces of data, as the API contained a lot of data that is not needed. I followed the same process, but it did cause some challenges, related to when the API data is updated, and some data would be missing. This situation would now need to be handled during the retrieval of data instead of potentially handling it at the render. I initially did this by checking the data with a ternary operator when mapping the new object. Later when implementing proper error handling, I changed it to a try catch, to better communicate what’s happening to the user."
				},
				{
					element: 'p',
					text: "Another interesting discovery was the need to both catch errors, for example from a network issue, and checking if the response is ok. Which differs from my previous work with something like AJAX in jQuery."
				},
				{
					element: 'p',
					text: "Late in the project I got the idea to include a modal with information about the project and NASA’s mission. Due to the limited use of the modal and my wish to keep module use to a minimum, I created one myself. Obviously it is not the hardest thing, but it did provide valuable knowledge about handling entry animations when mounting components, or rather to have an empty React component and then to conditionally render the contents when needed."
				},
				{
					element: 'p',
					text: ""
				},
			]
		},
		igglesblitz: {
			id: 1,
			title: 'IgglesBlitz', 
			skillsUsed: ['WordPress', 'CSS3', 'SCSS', 'JavaScript', 'Gulp'],
			gitLink: 'https://github.com/nicolajnnielsen/IgglesBlitz',
			images: [
				{
					original: igglesblitzImg1,
					originalAlt: 'Top part of the home page on desktop',
					thumbnail: igglesblitzImg1,
					thumbnailAlt: 'Thumbnail of top part of the home page on desktop',
					description: 'Top part of the home page on desktop',
				},
				{
					original: igglesblitzImg2,
					originalAlt: 'Bottom part of the home page on desktop',
					thumbnail: igglesblitzImg2,
					thumbnailAlt: 'Thumbnail of bottom part of the home page on desktop',
					description: 'Bottom part of the home page on desktop',
				},
				{
					original: igglesblitzImg3,
					originalAlt: 'Home page on mobile',
					thumbnail: igglesblitzImg3,
					thumbnailAlt: 'Thumbnail of home page on mobile',
					description: 'Home page on mobile',
				},
				{
					original: igglesblitzImg4,
					originalAlt: 'Home page on mobile with navigation menu open',
					thumbnail: igglesblitzImg4,
					thumbnailAlt: 'Thumbnail of home page on mobile with navigation menu open',
					description: 'Home page on mobile with navigation menu open',
				},
				{
					original: igglesblitzImg5,
					originalAlt: 'Home page with alternative Midnight green design',
					thumbnail: igglesblitzImg5,
					thumbnailAlt: 'Thumbnail of Home page with alternative Midnight green design',
					description: 'Home page with alternative Midnight green design',
				},
				{
					original: igglesblitzImg7,
					originalAlt: 'Post page mobile',
					thumbnail: igglesblitzImg7,
					thumbnailAlt: 'Thumbnail of post page mobile',
					description: 'Post page on mobile',
				},
			],
			shortDesc: 'Wordpress Theme for the eagles blog IgglesBlitz',
			fullDesc: [
				{
					element: 'p',
					text: 'A WordPress theme using the Underscores starter, for a Philadelphia Eagles focused blog I\'ve been reading for many years.',
				},
				// {
				// 	element: 'h',
				// 	text: 'User focused'
				// },
				// {
				// 	element: 'p',
				// 	text: "As a long-time reader of the blog I have a decent understanding of what brings people there, and the community it has built. While Tommy great writing is the main draw there is also a wise community and people read and participate in. Therefor I focused on supporting both of those, making readability better and giving easier access to the comment section.",
				// },
			]
		},
		portfolio: {
			id: 2,
			title: 'Portfolio', 
			skillsUsed: ['JS', 'React', 'CSS3', 'SCSS', 'Framer Motion', 'Skeumorphism'],
			link: 'https://nicolajnielsen.dev/',
			gitLink: 'https://github.com/nicolajnnielsen/Portfolio',
			images: [
				{
					original: portfolioImg1,
					originalAlt: 'Front-page on desktop',
					thumbnail: portfolioImg1,
					thumbnailAlt: 'Thumbnail of front-page on desktop',
					description: 'Front-page on desktop',
				},
				{
					original: portfolioImg6,
					originalAlt: 'About page on desktop',
					thumbnail: portfolioImg6,
					thumbnailAlt: 'Thumbnail of about page on desktop',
					description: 'About page on desktop',
				},
				{
					original: portfolioImg2,
					originalAlt: 'Contact page on desktop',
					thumbnail: portfolioImg2,
					thumbnailAlt: 'Thumbnail of contact page on desktop',
					description: 'Contact page on desktop',
				},
				{
					original: portfolioImg4,
					originalAlt: 'Contact page on mobile',
					thumbnail: portfolioImg4,
					thumbnailAlt: 'Thumbnail of contact page on mobile',
					description: 'Contact page on mobile',
				},
				{
					original: portfolioImg3,
					originalAlt: 'Project page on desktop',
					thumbnail: portfolioImg3,
					thumbnailAlt: 'Thumbnail of project page on desktop',
					description: 'Project page on desktop',
				},
				{
					original: portfolioImg7,
					originalAlt: 'Project page on mobile',
					thumbnail: portfolioImg5,
					thumbnailAlt: 'Thumbnail of project page on mobile',
					description: 'Project page on mobile',
				},
				{
					original: portfolioImg5,
					originalAlt: 'Portfolio page on mobile',
					thumbnail: portfolioImg7,
					thumbnailAlt: 'Thumbnail of portfolio page on mobile',
					description: 'Portfolio page on mobile',
				},
			],
			shortDesc: 'My Portfolio site made with React, containing information for getting to know me, and displays some of the projects I\'ve built.',
			fullDesc: [
				{
					element: 'p',
					text: 'My portfolio made suing Create-React-App, and a few third party components such as React-Router, Framer-Motion for the page transitions and React-Image-Gallery for the slideshows on project pages.',
				},
				{
					element: 'p',
					text: "Design isn't my strongest suit so I've tried to make a fairly simple and clear design. With a narrow color scheme. I really like the skeumorphic trend and have used that since it goes well with the simplicity.",
				},
				// {
				// 	element: 'h',
				// 	text: 'Challenges'
				// },
				// {
				// 	element: 'p',
				// 	text: "It was important to make good use of CSS Grid and avoid too much div-soup, it has however brought some challenges with routing and tansitions, for example React-Transition-Group didn't work well without pages having a parant container, whereas Framer-Motion was a better fit",
				// },
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