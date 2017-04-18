import React from 'react';

export const UserData = ({user}) => {
	return (
		<div>
			<img alt={user.name} src={`/images/${user.image}.svg`} />
			<div>{user.name}</div>
			<div>{user.age}</div>
			<div>{user.phrase}</div>
		</div>
	);
};
