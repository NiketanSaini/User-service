import pino from 'pino';
import CONFIG from '../config/env/index';

const l = pino({
    name: CONFIG.PROJECT.NAME,
    level: CONFIG.PROJECT.LOG_LEVEL,
    transport: {
        target: 'pino-pretty', //discussion on logger file
        options: {
            colorize: true,
            levelKey: 'level', // --levelKey
            translateTime: 'yyyy-dd-mm, h:MM:ss TT',
            customColors: 'err:red,info:blue', // --customColors
            customLevels: 'err:99,info:1', // --customLevels
        },
    },
});

export default l;
