import React from 'react';

const PortfolioItem = (props) => (
	<div>
		This is PortfolioItem {props.match.params.id} 
	</div>
);

export default PortfolioItem;