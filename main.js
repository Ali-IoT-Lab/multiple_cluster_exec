var cluster = require('cluster');
var p = require('path');
cluster.setupMaster({
  exec:p.resolve(__dirname, 'task.js'),
});
for(var i = 1;i <= 100; i++) {
   cluster.fork();
}