import React from 'react';

export const SearchBar = ({onSearchChange}) => {
	return (
		<input type="text" placeholder="search..." onChange={onSearchChange}/>
	);
};
