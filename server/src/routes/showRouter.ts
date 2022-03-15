import { Router, IRouter } from 'express';

import {
	getShows,
	getShowById,
	updateBookings,
} from '../controllers/showController';

const showRouter: IRouter = Router();

showRouter.get('/theatre/:theatreId/movie/:movieId', getShows);
showRouter.get('/:id', getShowById);
showRouter.patch('/:id', updateBookings);

export default showRouter;
