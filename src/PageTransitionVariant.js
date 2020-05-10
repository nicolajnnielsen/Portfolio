export const PageTransition = {
	duration: 0.3,
	ease: "anticipate",
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const articleVar = {
	initial: { scale: 0.9, opacity: 0 },
	enter: { scale: 1, opacity: 1, transition },
	exit: {
	  scale: 0.5,
	  opacity: 0,
	  transition: { duration: 1.5, ...transition }
	}
}

export default articleVar;