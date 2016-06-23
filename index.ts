import * as express from 'express';
import {config} from './server/config';

const app = express();

app.get('*', (req, res) => res.sendFile(`${config.rootPath}/client/index.html`));
app.listen(config.port, () => console.log(`App listening on port ${config.port}`));