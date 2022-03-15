import fs from 'fs';
import { Request, Response } from 'express';
import { Movie } from '../models/movie.model';
import { Theatre } from '../models/theatre.model';
import { Show } from '../models/show.model';

export const getMovies = (req: Request, res: Response) => {
	const { cityId } = req.params;
	let movies: Movie[] = [];
	let shows: Show[] = [];
	let theatres: Theatre[] = [];
	try {
		movies = JSON.parse(fs.readFileSync('src/data/movies.json', 'utf8'));
		shows = JSON.parse(fs.readFileSync('src/data/shows.json', 'utf8'));
		theatres = JSON.parse(fs.readFileSync('src/data/theatres.json', 'utf8'));
	} catch (err) {
		console.log(err);
		return res.status(500).send('Problem in reading Data');
	}

	const shortlistedMovieIds: number[] = [];
	for (let show of shows) {
		const theatre: any = theatres.find((t) => t.id == show.theatreId);
		if (
			theatre.cityId == parseInt(cityId) &&
			!shortlistedMovieIds.includes(show.movieId)
		) {
			shortlistedMovieIds.push(show.movieId);
		}
	}
	const shortlistedMovies: Movie[] = movies.filter((m) =>
		shortlistedMovieIds.includes(m.id)
	);
	return res.status(200).json(shortlistedMovies);
};

export const getMovieById = (req: Request, res: Response) => {
	const { id } = req.params;
	fs.readFile('src/data/movies.json', 'utf8', (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err.message);
		} else {
			const movies: Movie[] = JSON.parse(data);
			try {
				const movie: any = movies.find((m) => m.id == parseInt(id));
				return res.status(200).json(movie);
			} catch (error) {
				console.log(error);
				return res.status(404).send('No movie found with given ID');
			}
		}
	});
};
