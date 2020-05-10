import React from 'react';
import {ReactComponent as Github} from '../images/social/github.svg'
import {ReactComponent as LinkedIn} from '../images/social/linkedin.svg'
import {ReactComponent as Proton} from '../images/social/protonmail.svg'



const SocialLinks = () => (
	<aside className="socialLinks">
		<a href="https://github.com/nicolajnnielsen"><Github /> </a>
		<a href="https://www.linkedin.com/in/nicolaj-norup-nielsen/"><LinkedIn /> </a>
		<a href="nicolajnielsen@protonmail.ch"><Proton /> </a>
	</aside>
);

export default SocialLinks;