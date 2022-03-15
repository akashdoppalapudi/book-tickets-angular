import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import cityRouter from './routes/cityRouter';
import movieRouter from './routes/movieRouter';
import showRouter from './routes/showRouter';
import theatreRouter from './routes/theatreRouter';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/city', cityRouter);
app.use('/movie', movieRouter);
app.use('/theatre', theatreRouter);
app.use('/show', showRouter);

app.listen(3000, () => console.log('App running on : http://localhost:3000'));
