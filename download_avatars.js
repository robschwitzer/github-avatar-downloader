//step 1: load request module
var request = require('request');
var fs = require('fs');
var arg = process.argv.slice(2);
var apiAddress = 'http://github.com/repos' + '/' + arg[0] + '/' + arg[1];

function getRepoContributors (cb) {

}

function cb () {
  //loop over and print out the avatar_url for each object in the collection
}