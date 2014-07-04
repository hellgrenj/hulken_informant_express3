var fs = require('fs');
var colors = require('colors');

exports.generateHulkenRequestsFile = function(path, app) {
  try {
    var hulken_requests = [];
    for (var i = 0; i < app.routes.get.length; i++) {
      var hulken_req = {
        method: app.routes.get[i].method,
        path: app.routes.get[i].path,
        expectedTextToExist: null
      };
      hulken_requests.push(hulken_req);
    }
    fs.writeFile(path, JSON.stringify(
      hulken_requests), function(err) {
      if (err) throw err;
      console.log(
        'HulkenInformant created ' + path);
    });
  } catch (err) {
    console.log('HulkenInformant failed: '.red + err.toString().red);
  }

};
