import { Router, IRouter } from 'express';

import { getTheatres, getTheatreById } from '../controllers/theatreController';

const theatreRouter: IRouter = Router();

theatreRouter.get('/city/:cityId/movie/:movieId', getTheatres);
theatreRouter.get('/:id', getTheatreById);

export default theatreRouter;
