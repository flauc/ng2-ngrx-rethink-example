import * as express from 'express';
import {config} from './server/config/config';

const app = express();

app.listen(config.port, () => console.log(`App listening on port ${config.port}`));