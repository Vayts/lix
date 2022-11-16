import React from 'react';
import PropTypes from 'prop-types';
import {Card} from "../Card/Card";
import './CardList.css';

export const CardList = ({userData}) => {
	return (
		<ul className='list'>
			{userData.map((item) => {
				return (
					<Card item={item}/>
				)
			})}
		</ul>
	);
};

CardList.propTypes = {
	userData: PropTypes.array,
};
