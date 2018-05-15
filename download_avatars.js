//step 1: load request module
var request = require('request');
var fs = require('fs');
var secret = require('./secrets');
// var apiAddress = 'http://github.com/repos' + '/' + arg[0] + '/' + arg[1];

// var temp = request.get(apiAddress, function(err, response, body) {
//   console.log(body);
// });

//step 2: setup function with arguments
function getRepoContributors (repoOwner, repoName, cb) {
  // var url = 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  // request(url, function(err, res, body) {
  //   cb(err, body);
  // });
  // var GITHUB_USER = 'robschwitzer';
  // var GITHUB_TOKEN = '38ca529d6180538b0eb709d272450d93c9c8c4fa';

  // var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
  url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-Agent': 'request',
    'Authorization': exports.secret
    // 'token ' + process.env.GITHUB_TOKEN
  }
};

request(options, function(err, res, body) {
  cb(err, body);
  });
}



getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors:', err);
  console.log('Result', result);
});

function cb () {
  //loop over and print out the avatar_url for each object in the collection
}