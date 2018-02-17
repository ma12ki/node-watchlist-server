import * as path from 'path';
import { config as dotenvConfig } from 'dotenv';

import { logger } from '../helpers';

const env = process.env.NODE_ENV;
const dotenvPath = env === 'TEST' ? path.resolve('./', '.env.test') : path.resolve('./', '.env');
const config = dotenvConfig({ path: dotenvPath });

logger.info('Read .env file:');
console.log(config);

const production = env === 'production';
const dbHost = process.env.WL_DB_HOST;
const dbPort = Number(process.env.WL_DB_PORT);
const dbName = process.env.WL_DB_NAME;
const dbUser = process.env.WL_DB_USER;
const dbPass = process.env.WL_DB_PASSWORD;
const port = Number(process.env.WL_SERVER_PORT);
const jwtSecret = process.env.WL_JWT_SECRET;
const host = process.env.WL_HOST || '127.0.0.1';

export {
  env,
  production,
  dbHost,
  dbPort,
  dbName,
  dbUser,
  dbPass,
  port,
  jwtSecret,
  host,
};
