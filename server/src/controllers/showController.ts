import fs from 'fs';
import { Response, Request } from 'express';
import { Show } from '../models/show.model';

export const getShows = (req: Request, res: Response) => {
	const { theatreId, movieId } = req.params;
	let shows: Show[] = [];
	try {
		shows = JSON.parse(fs.readFileSync('src/data/shows.json', 'utf8'));
	} catch (err) {
		console.log(err);
		return res.status(500).send('Problem in reading Data');
	}

	const shortlistedShowIds: number[] = [];
	for (let show of shows) {
		if (
			show.theatreId == parseInt(theatreId) &&
			show.movieId == parseInt(movieId) &&
			!shortlistedShowIds.includes(show.id)
		) {
			shortlistedShowIds.push(show.id);
		}
	}
	const shortlistedShow: Show[] = shows.filter((s) =>
		shortlistedShowIds.includes(s.id)
	);
	return res.status(200).json(shortlistedShow);
};

export const getShowById = (req: Request, res: Response) => {
	const { id } = req.params;
	fs.readFile('src/data/shows.json', 'utf8', (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err.message);
		} else {
			const shows: Show[] = JSON.parse(data);
			try {
				const show: any = shows.find((s) => s.id == parseInt(id));
				return res.status(200).json(show);
			} catch (error) {
				console.log(error);
				return res.status(404).send('No show found with given ID');
			}
		}
	});
};

export const updateBookings = (req: Request, res: Response) => {
	const { id } = req.params;
	const newBookings: string[] = req.body;
	let shows: Show[] = [];
	try {
		shows = JSON.parse(fs.readFileSync('src/data/shows.json', 'utf8'));
	} catch (err) {
		console.log(err);
		return res.status(500).send('Problem in reading Data');
	}

	shows.map((show) => {
		if (show.id == parseInt(id)) {
			show.bookings.push(...newBookings);
		}
	});
	try {
		fs.writeFileSync('src/data/shows.json', JSON.stringify(shows, null, 2));
		res.status(200).json(shows.find((s) => s.id == parseInt(id)));
	} catch (err) {
		res.status(500).send('Problem Updating bookings');
	}
};
