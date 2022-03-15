"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const theatreController_1 = require("../controllers/theatreController");
const theatreRouter = (0, express_1.Router)();
theatreRouter.get('/city/:cityId/movie/:movieId', theatreController_1.getTheatres);
theatreRouter.get('/:id', theatreController_1.getTheatreById);
exports.default = theatreRouter;
