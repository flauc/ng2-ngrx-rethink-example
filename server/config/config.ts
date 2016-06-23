import * as path from 'path'

let rootPath = path.normalize(`${__dirname}/../../`);

export const config = {
    appName: 'vineyard',
    port: process.env.PORT || 2000,
    env: process.env.NODE_ENV || 'dev',
    domain: 'http://52.31.77.24',
    rootPath: rootPath,
    staticPath: path.normalize(`${rootPath}/docs`),
    appSecret: 'very special',
}