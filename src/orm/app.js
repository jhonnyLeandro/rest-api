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

// allow cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// adding routes
app.use('/users', userRoutes);
app.use('/expenses', expensesRoutes);

export default app;