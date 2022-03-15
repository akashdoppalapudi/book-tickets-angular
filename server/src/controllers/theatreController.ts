import fs from 'fs';
import { Request, Response } from 'express';
import { Show } from '../models/show.model';
import { Theatre } from '../models/theatre.model';

export const getTheatres = (req: Request, res: Response) => {
	const { cityId, movieId } = req.params;
	let shows: Show[] = [];
	let theatres: Theatre[] = [];
	try {
		shows = JSON.parse(fs.readFileSync('src/data/shows.json', 'utf8'));
		theatres = JSON.parse(fs.readFileSync('src/data/theatres.json', 'utf8'));
	} catch (err) {
		console.log(err);
		return res.status(500).send('Problem in reading Data');
	}

	const shortlistedTheatreIds: number[] = [];
	for (let show of shows) {
		const theatre: any = theatres.find((t) => t.id == show.theatreId);
		if (
			theatre.cityId == parseInt(cityId) &&
			show.movieId == parseInt(movieId) &&
			!shortlistedTheatreIds.includes(show.theatreId)
		) {
			shortlistedTheatreIds.push(show.theatreId);
		}
	}
	const shortlistedTheatre: Theatre[] = theatres.filter((t) =>
		shortlistedTheatreIds.includes(t.id)
	);
	return res.status(200).json(shortlistedTheatre);
};

export const getTheatreById = (req: Request, res: Response) => {
	const { id } = req.params;
	fs.readFile('src/data/theatres.json', 'utf8', (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err.message);
		} else {
			const theatres: Theatre[] = JSON.parse(data);
			try {
				const theatre: any = theatres.find((t) => t.id == parseInt(id));
				return res.status(200).json(theatre);
			} catch (error) {
				console.log(error);
				return res.status(404).send('No theatre found with given ID');
			}
		}
	});
};
