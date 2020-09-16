import redis from 'redis';
import { promisifyAll } from 'bluebird';
import config from '../../../config/env';

// promisify redis to enable the use of ES6 promises features.
promisifyAll(redis);

const { NODE_ENV, REDIS_URL } = config;

const redisDb = REDIS_URL ? redis.createClient(REDIS_URL) : redis.createClient();

if (NODE_ENV === 'test') {
  redisDb.select(3, async (err) => {
    if (err) {
      logger.error(`An Error occurred while spawning a 
    new Redis database with the following message: ${err.message}`);
      process.exit(1);
    } else {
      try {
        await redisDb.flushdbAsync();
      } catch (e) {
        logger.error(
          `An Error occurred while removing test keys with the message: ${e.message}`
        );
      }
    }
  });
}

export default redisDb;