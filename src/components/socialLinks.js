import React from 'react';
import {ReactComponent as Github} from '../images/social/github.svg'
import {ReactComponent as LinkedIn} from '../images/social/linkedin.svg'
import {ReactComponent as Proton} from '../images/social/protonmail.svg'
import {ReactComponent as Resume} from '../images/resume-icon6.svg';



const SocialLinks = () => (
	<aside className="contactLinks">
		<a href="https://github.com/nicolajnnielsen"><Github /> </a>
		<a href="https://www.linkedin.com/in/nicolaj-norup-nielsen/"><LinkedIn /> </a>
		<a href="https://ln2.sync.com/dl/89c628b50/8y7e58a5-dv7cjzda-h8gf32j4-rbc69686" target="blank"><Resume /> </a>
	</aside>
);

export default SocialLinks;