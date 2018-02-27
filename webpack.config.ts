import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
  entry: {
    smartMirrorV2: './src/main.ts',
    vendor: './src/vendor.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};

export default config;