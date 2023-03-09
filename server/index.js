import express from 'express';
import cors         from 'cors';
import { PORT } from './config.js';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

import indexRoutes from './routes/index.routes.js';

const app =  express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cors());

app.use(indexRoutes);

app.use(express.static(join(__dirname, '../client')));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});