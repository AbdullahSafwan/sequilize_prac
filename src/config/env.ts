import dotenv from 'dotenv';

dotenv.config();

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function getEnvAsInt(key: string): number {
  const value = getEnv(key);
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`Environment variable ${key} must be a valid number`);
  }
  return parsed;
}

const env = {
  NODE_ENV: getEnv('NODE_ENV'),
  PORT: getEnvAsInt('PORT'),
  DB_HOST: getEnv('DB_HOST'),
  DB_PORT: getEnvAsInt('DB_PORT'),
  DB_USER: getEnv('DB_USER'),
  DB_PASSWORD: getEnv('DB_PASSWORD'),
  DB_NAME: getEnv('DB_NAME'),
  DB_DIALECT: getEnv('DB_DIALECT'),
};

export default env;
