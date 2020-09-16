import { json, urlencoded } from 'express';
import morgan from 'morgan';
import config from './env';

const appConfig = (app) => {
  app.use(morgan('combined', { stream: logger.stream }));
  // It parses incoming requests with JSON payloads and is based on body-parser
  app.use(json());

  // It parses incoming requests with urlencoded payloads and is based on body-parser.
  app.use(urlencoded({ extended: true }));

  // add an entry route
  app.get('/', (req, res) => {
    res.send('hello world');
  });
  // server listens for connection
  const port = config.PORT || 4000;
  app.listen(port, () => {
    logger.info(`book club running on port ${port}`);
  });
};

export default appConfig;
