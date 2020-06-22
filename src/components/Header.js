import React from 'react';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from '../images/logo.svg';

const Header = () => (
	<header className="site-header">
		<Logo />
		<nav className="site-nav">
			<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
			<NavLink to="/about" activeClassName="is-active" >About Me</NavLink>
			<Logo />
			<NavLink to="/portfolio" activeClassName="is-active" >Portfolio</NavLink>
			<NavLink to="/contact" activeClassName="is-active" >Contact</NavLink>
		</nav>
	</header>
)

export default Header;