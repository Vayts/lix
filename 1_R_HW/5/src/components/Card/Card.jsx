import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({item}) => {
	return (
		<li className='card'>
			<img className='card__avatar' src={`/${item.picture}`} alt='Avatar'/>
			<h1 className='card__name'>{item.name}</h1>
			<p className='card__info'>{item.age}</p>
			<p className='card__info'>{item.gender}</p>
			<h2 className='card__balance'>{`${item.balance}$`}</h2>
		</li>
	);
};

Card.propTypes = {
	item: PropTypes.shape({
		picture: PropTypes.string,
		name: PropTypes.string,
		age: PropTypes.number,
		gender: PropTypes.string,
		balance: PropTypes.number,
	})
};
