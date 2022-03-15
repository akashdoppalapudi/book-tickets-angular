import { IRouter, Router } from 'express';

import { getAllCities, getCityById } from '../controllers/cityController';

const cityRouter: IRouter = Router();

cityRouter.get('/', getAllCities);
cityRouter.get('/:id', getCityById);

export default cityRouter;
