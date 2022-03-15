"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityById = exports.getAllCities = void 0;
const fs_1 = __importDefault(require("fs"));
const getAllCities = (req, res) => {
    fs_1.default.readFile('src/data/cities.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        else {
            const cities = JSON.parse(data);
            return res.status(200).json(cities);
        }
    });
};
exports.getAllCities = getAllCities;
const getCityById = (req, res) => {
    const { id } = req.params;
    fs_1.default.readFile('src/data/cities.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        else {
            const cities = JSON.parse(data);
            try {
                const city = cities.find((city) => city.id == parseInt(id));
                return res.status(200).json(city);
            }
            catch (error) {
                return res.status(404).send(error);
            }
        }
    });
};
exports.getCityById = getCityById;
