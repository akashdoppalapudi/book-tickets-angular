"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const showController_1 = require("../controllers/showController");
const showRouter = (0, express_1.Router)();
showRouter.get('/theatre/:theatreId/movie/:movieId', showController_1.getShows);
showRouter.get('/:id', showController_1.getShowById);
showRouter.patch('/:id', showController_1.updateBookings);
exports.default = showRouter;
