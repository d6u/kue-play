'use strict';

const kue = require('kue');

const queue = kue.createQueue({
  redis: {
    port: 19999,
    host: '192.168.99.100',
  }
});

queue.process('get-two', 1, function (job, done) {
  console.log(`Job #${job.id} started`);
  setTimeout(() => {
    console.log(`Job #${job.id} completed`);
    done(null, 2);
  }, 5000);
});

// process.once('SIGINT', function () {
//   console.log('receiving SIGINT');
//   queue.shutdown(1, function (err) {
//     console.log(`Kue shutdown: ${err}`);
//     process.exit(0);
//   });
// });
