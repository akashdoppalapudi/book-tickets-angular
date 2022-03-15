"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cityController_1 = require("../controllers/cityController");
const cityRouter = (0, express_1.Router)();
cityRouter.get('/', cityController_1.getAllCities);
cityRouter.get('/:id', cityController_1.getCityById);
exports.default = cityRouter;
