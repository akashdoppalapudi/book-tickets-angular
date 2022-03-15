import { IRouter, Router } from 'express';

import { getMovies, getMovieById } from '../controllers/movieController';

const movieRouter: IRouter = Router();

movieRouter.get('/city/:cityId', getMovies);
movieRouter.get('/:id', getMovieById);

export default movieRouter;
