import dotenv from 'dotenv';
import { IConfig } from './interface';
dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
    ENVIRONMENT: process.env.NODE_ENV || 'development',
    PROJECT: {
        NAME: process.env.NAME || 'User-Service',
        LOG_LEVEL: process.env.LOG_LEVEL || 'Debug'
    },
    PORT: Number(process.env.PORT)
}

const production: IConfig = {
    ENVIRONMENT: process.env.NODE_ENV || 'production',
    PROJECT: {
        NAME: process.env.NAME || 'User-Service',
        LOG_LEVEL: process.env.LOG_LEVEL || 'Debug'
    },
    PORT: Number(process.env.PORT)
}

const config: {
    [name: string]: IConfig
} = {
    development,
    production,
};

export default config[NODE_ENV];