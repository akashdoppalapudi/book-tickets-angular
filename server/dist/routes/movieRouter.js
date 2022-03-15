"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieController_1 = require("../controllers/movieController");
const movieRouter = (0, express_1.Router)();
movieRouter.get('/city/:cityId', movieController_1.getMovies);
movieRouter.get('/:id', movieController_1.getMovieById);
exports.default = movieRouter;
