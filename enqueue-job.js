'use strict';

const kue = require('kue');

const queue = kue.createQueue({
  redis: {
    port: 19999,
    host: '192.168.99.100',
  }
});

queue.create('get-two').attempts(2).save((err) => {
  console.log(err);
  process.exit(0);
});
