import express, { json } from 'express';
import morgan from 'morgan';

// importing routes
import userRoutes from './routes/users';
import requestRoutes from './routes/requests';

// initialize app
const app = express();

// config morgan and json
app.use(morgan('dev'));
app.use(json());

// adding routes
app.use(userRoutes);
app.use(requestRoutes);

export default app;