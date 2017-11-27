const fs = require('fs');

exports.createFile = function (filepath, data) {
  
  // returns a promise
  // creates file at filepath, with data
  
  return new Promise(function (resolve, reject) {
    fs.writeFile(filepath, data, function (err) {
      err ? reject(err) : resolve();
    });
  });
  
};

exports.getFileStats = function (filepath) {
  
  // returns a promise
  // gets file stats from filesystem
  
  return new Promise(function (resolve, reject) {
    fs.stat(filepath, function (err, stats) {
      err ? reject(err) : resolve(stats);
    });
  });
  
};