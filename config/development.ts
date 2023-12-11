import _ from 'lodash';
import defaultConfig from './default';

const devConfig: any = {
  env: 'dev',
  port: 7890,
};

export default _.merge({}, defaultConfig, devConfig);
