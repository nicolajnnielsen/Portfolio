import React from 'react';

const Skill = (props) => (
	<section onClick={(e) => {props.toggleActive(props.id)}} onKeyDown={(e) => {if (e.key === 'Enter') props.toggleActive(props.id)}} tabIndex="0" className={`skill ${props.active ? 'cls-active' : ''} `}>
		<span className="skill__btn">{props.id} </span>
		<h2 className="skill__title">{props.title}</h2>
		<p className="skill__text">{props.text}</p>
	</section>

);

export default Skill;
