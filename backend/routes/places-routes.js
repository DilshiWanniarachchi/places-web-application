const express = require('express');

const HttpError = require('../models/http-error');

const router = express.Router();

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
];

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    if (!place) {
        return next(
            new HttpError('Could not find a place for the provided place ID.', 404)
        );
    }
    res.json({place});
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    });
    if (!place) {
        return next(
            new HttpError('Could not find a place for the provided user ID.', 404)
        );
    }
    res.json({place});
});

module.exports = router;