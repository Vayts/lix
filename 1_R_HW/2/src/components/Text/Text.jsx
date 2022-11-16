import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({name}) => {
	return (
		<p>Привіт, {name}</p>
	);
};

Text.propTypes = {
	name: PropTypes.string,
};
