import rootPath from 'app-root-path';
import development from './development';
import test from './test';

const {
  BOOK_CLUB_PORT: PORT,
  BOOK_CLUB_POSTGRES_NODE_ENV: NODE_ENV,
  BOOK_CLUB_POSTGRES_SECRET: SECRET,
} = process.env;

const currentEnv = {
  development,
  test,
}[NODE_ENV || 'development'];

export default {
  ...process.env,
  ...currentEnv,
  PORT,
  SECRET,
  rootPath
};
