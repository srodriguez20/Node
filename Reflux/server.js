/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

const express = require('express');
const http = require('http');
const engine = require('socket.io');

const request = require('request');

const port = 3002;
const app = express();

let server = http.createServer(app).listen(port, ()=> {
  console.log("port listening in "+port);
});

const io = engine.listen(server);

io.on('connection',(socket)=>{
  console.log('peticion conexion');
  socket.on('ask',(ask)=>{
    console.log('peticion realizada');
    request('http://randomuser.me/api',(err,response, body)=>{
      io.emit('persona',body);
      console.log('respuesta realizada');
    });
  });
});

/**
 * Flag indicating whether webpack compiled for the first time.
 * @type {boolean}
 */
let isInitialCompilation = true;

const compiler = webpack(config);

new WebpackDevServer(compiler, config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
});

compiler.plugin('done', () => {
  if (isInitialCompilation) {
    // Ensures that we log after webpack printed its stats (is there a better way?)
    setTimeout(() => {
      console.log('\n✓ The bundle is now ready for serving!\n');
      console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + config.port + '/webpack-dev-server/');
      console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
      console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
    }, 350);
  }
  isInitialCompilation = false;
});
