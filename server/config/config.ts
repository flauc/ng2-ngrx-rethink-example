import * as path from 'path'

let rootPath = path.normalize(`${__dirname}/../../`);

export const config = {
    appName: 'ngrx-example',
    port: process.env.PORT || 2000,
    env: process.env.NODE_ENV || 'dev',
    rootPath: rootPath,
    appSecret: 'very special',
};