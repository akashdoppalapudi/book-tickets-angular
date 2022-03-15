"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheatreById = exports.getTheatres = void 0;
const fs_1 = __importDefault(require("fs"));
const getTheatres = (req, res) => {
    const { cityId, movieId } = req.params;
    let shows = [];
    let theatres = [];
    try {
        shows = JSON.parse(fs_1.default.readFileSync('src/data/shows.json', 'utf8'));
        theatres = JSON.parse(fs_1.default.readFileSync('src/data/theatres.json', 'utf8'));
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('Problem in reading Data');
    }
    const shortlistedTheatreIds = [];
    for (let show of shows) {
        const theatre = theatres.find((t) => t.id == show.theatreId);
        if (theatre.cityId == parseInt(cityId) &&
            show.movieId == parseInt(movieId) &&
            !shortlistedTheatreIds.includes(show.theatreId)) {
            shortlistedTheatreIds.push(show.theatreId);
        }
    }
    const shortlistedTheatre = theatres.filter((t) => shortlistedTheatreIds.includes(t.id));
    return res.status(200).json(shortlistedTheatre);
};
exports.getTheatres = getTheatres;
const getTheatreById = (req, res) => {
    const { id } = req.params;
    fs_1.default.readFile('src/data/theatres.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err.message);
        }
        else {
            const theatres = JSON.parse(data);
            try {
                const theatre = theatres.find((t) => t.id == parseInt(id));
                return res.status(200).json(theatre);
            }
            catch (error) {
                console.log(error);
                return res.status(404).send('No theatre found with given ID');
            }
        }
    });
};
exports.getTheatreById = getTheatreById;
