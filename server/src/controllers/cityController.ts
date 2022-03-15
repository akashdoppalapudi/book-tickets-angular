import fs from 'fs';
import { Response, Request } from 'express';
import { City } from '../models/city.model';

export const getAllCities = (req: Request, res: Response) => {
	fs.readFile('src/data/cities.json', 'utf8', (err, data) => {
		if (err) {
			console.log(err.message);
			return res.status(500).send(err.message);
		} else {
			const cities: City[] = JSON.parse(data);
			return res.status(200).json(cities);
		}
	});
};

export const getCityById = (req: Request, res: Response) => {
	const { id } = req.params;
	fs.readFile('src/data/cities.json', 'utf8', (err, data) => {
		if (err) {
			console.log(err.message);
			return res.status(500).send(err.message);
		} else {
			const cities: City[] = JSON.parse(data);
			try {
				const city = cities.find((city) => city.id == parseInt(id));
				return res.status(200).json(city);
			} catch (error) {
				return res.status(404).send(error);
			}
		}
	});
};
