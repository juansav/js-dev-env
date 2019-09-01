import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 8000;
const app = express();

const compiler = webpack(config);

import webpack_middleware from 'webpack-dev-middleware';

app.use(webpack_middleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"))
});

app.listen(port, () => {
  console.log('Running server with express...')
})
