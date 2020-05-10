import React from 'react';

const Skill = (props) => (
	<article onClick={(e) => {props.toggleActive(props.id)}} className={`skill ${props.active ? 'cls-active' : ''} `}>
		<span className="skill__btn">{props.id} </span>
		<h3 className="skill__title">{props.title}</h3>
		<p className="skill__text">{props.text}</p>
	</article>

);

export default Skill;
