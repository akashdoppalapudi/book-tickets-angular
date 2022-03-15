"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieById = exports.getMovies = void 0;
const fs_1 = __importDefault(require("fs"));
const getMovies = (req, res) => {
    const { cityId } = req.params;
    let movies = [];
    let shows = [];
    let theatres = [];
    try {
        movies = JSON.parse(fs_1.default.readFileSync('src/data/movies.json', 'utf8'));
        shows = JSON.parse(fs_1.default.readFileSync('src/data/shows.json', 'utf8'));
        theatres = JSON.parse(fs_1.default.readFileSync('src/data/theatres.json', 'utf8'));
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('Problem in reading Data');
    }
    const shortlistedMovieIds = [];
    for (let show of shows) {
        const theatre = theatres.find((t) => t.id == show.theatreId);
        if (theatre.cityId == parseInt(cityId) &&
            !shortlistedMovieIds.includes(show.movieId)) {
            shortlistedMovieIds.push(show.movieId);
        }
    }
    const shortlistedMovies = movies.filter((m) => shortlistedMovieIds.includes(m.id));
    return res.status(200).json(shortlistedMovies);
};
exports.getMovies = getMovies;
const getMovieById = (req, res) => {
    const { id } = req.params;
    fs_1.default.readFile('src/data/movies.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err.message);
        }
        else {
            const movies = JSON.parse(data);
            try {
                const movie = movies.find((m) => m.id == parseInt(id));
                return res.status(200).json(movie);
            }
            catch (error) {
                console.log(error);
                return res.status(404).send('No movie found with given ID');
            }
        }
    });
};
exports.getMovieById = getMovieById;
