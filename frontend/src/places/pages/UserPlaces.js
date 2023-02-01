import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Taj Mahal',
        description: 'One of the seven world wonders!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1280px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
        address: 'Agra, Uttar Pradesh, India',
        location: {
            lat: 27.1751,
            lng: 78.0421
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Sigiriya',
        description: 'Ancient city of sigiriya!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Beauty_of_Sigiriya_by_Binuka.jpg',
        address: 'Central Province, Sri Lanka',
        location: {
            lat: 7.9570,
            lng: 80.7603
        },
        creator: 'u2'
    },
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);   

    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;