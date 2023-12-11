import _ from 'lodash';
import defaultConfig from './default';

// pro 环境下 开启定时任务
Object.keys(defaultConfig.scheduler).forEach((key) => {
  defaultConfig.scheduler[key].enable = true;
});

const proConfig: any = {
  env: 'pro',
  port: 7890,
  mysqlConfig: {
    host: '8.219.66.21',
    password: '19781209Wyp',
    database: 'app',
  },
  redisConfig: {
    port: 6379,
    host: '8.219.66.21',
    password: '19781209Wyp',
  },
};

export default _.merge({}, defaultConfig, proConfig);
