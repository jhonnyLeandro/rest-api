import express, { json } from 'express';
import morgan from 'morgan';

// importing routes
import userRoutes from './routes/users';
import expensesRoutes from './routes/expenses';

// initialize app
const app = express();

// config morgan and json
app.use(morgan('dev'));
app.use(json());

// adding routes
app.use('/users', userRoutes);
app.use('/expenses', expensesRoutes);

export default app;