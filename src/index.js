import { config } from 'dotenv';
import morgan from 'morgan';
import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

import router from './entities/router';
import './service/passport-service';

config();

const app = express();
const server = createServer(app);
const PORT = process.env.EXPRESS_PORT || 8080;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(session({ secret: process.env.KEY, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', router);

// Default route for API check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Backend is running...' });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT} on env ${process.env.NODE_ENV}`);
});
