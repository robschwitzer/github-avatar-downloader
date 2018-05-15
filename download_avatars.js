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

function downloadImageByURL(url, filePath) {
//get url
  request.get(url)
  .on('error', function(err) {
    console.log('Error');
  })
  .on('response', function(response) {
    console.log('Response Status Code: ', response.statusCode);
  })
  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors('jquery', 'jquery', function(err, result) {
  for (var i = 0; i < result.length; i++) {
    var contributor = result[i];
    downloadImageByURL(contributor.avatar_url, 'avatars/' + contributor.login + '.jpg');
  }
  // console.log('Errors:', err);
  // console.log('Result', result);
});

function cb () {
  //loop over and print out the avatar_url for each object in the collection

}

