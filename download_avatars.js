//step 1: load request module
var request = require('request');
var fs = require('fs');
var secret = require('./secrets');
//step 2: setup function with arguments
function getRepoContributors (repoOwner, repoName, cb) {
  var options = {
  url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-Agent': 'request',
    'Authorization': exports.secret
    // 'token ' + process.env.GITHUB_TOKEN
  }
};

request(options, function(err, res, body) {
var parsed = JSON.parse(body);
  cb (err, parsed);
  });
}



getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors:', err);
  console.log('Result', result);
});

function cb () {
  //loop over and print out the avatar_url for each object in the collection

}