import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: 'ul', 
        name: 'max Schwarz', 
        image: 'https://unsplash.com/photos/W46sFyh2uzs',
        places: 3
    }];
    return <UsersList items={USERS}/>
};

export default Users;