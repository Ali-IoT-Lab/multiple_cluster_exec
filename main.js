var cluster = require('cluster');

cluster.setupMaster({
  exec:"./task.js"
});
for(var i = 1;i <= 100; i++) {
   cluster.fork();
}