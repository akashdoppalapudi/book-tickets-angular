"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookings = exports.getShowById = exports.getShows = void 0;
const fs_1 = __importDefault(require("fs"));
const getShows = (req, res) => {
    const { theatreId, movieId } = req.params;
    let shows = [];
    try {
        shows = JSON.parse(fs_1.default.readFileSync('src/data/shows.json', 'utf8'));
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('Problem in reading Data');
    }
    const shortlistedShowIds = [];
    for (let show of shows) {
        if (show.theatreId == parseInt(theatreId) &&
            show.movieId == parseInt(movieId) &&
            !shortlistedShowIds.includes(show.id)) {
            shortlistedShowIds.push(show.id);
        }
    }
    const shortlistedShow = shows.filter((s) => shortlistedShowIds.includes(s.id));
    return res.status(200).json(shortlistedShow);
};
exports.getShows = getShows;
const getShowById = (req, res) => {
    const { id } = req.params;
    fs_1.default.readFile('src/data/shows.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err.message);
        }
        else {
            const shows = JSON.parse(data);
            try {
                const show = shows.find((s) => s.id == parseInt(id));
                return res.status(200).json(show);
            }
            catch (error) {
                console.log(error);
                return res.status(404).send('No show found with given ID');
            }
        }
    });
};
exports.getShowById = getShowById;
const updateBookings = (req, res) => {
    const { id } = req.params;
    const newBookings = req.body;
    let shows = [];
    try {
        shows = JSON.parse(fs_1.default.readFileSync('src/data/shows.json', 'utf8'));
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('Problem in reading Data');
    }
    shows.map((show) => {
        if (show.id == parseInt(id)) {
            show.bookings.push(...newBookings);
        }
    });
    try {
        fs_1.default.writeFileSync('src/data/shows.json', JSON.stringify(shows, null, 2));
        res.status(200).json(shows.find((s) => s.id == parseInt(id)));
    }
    catch (err) {
        res.status(500).send('Problem Updating bookings');
    }
};
exports.updateBookings = updateBookings;
