import express from 'express';
import morgan from 'morgan';

const app = express();

if(process.env.NODE_ENV === 'development')
	app.use(morgan('dev'))


import bookRouter from './routes/bookRoutes.js';

app.use('/api/v1/books', bookRouter);


export default app;
