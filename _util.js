/**
 * Created by kostyak on 19.06.16.
 */
"use strict";

var getLogger = require("log4js").getLogger;
var queryString = require("querystring");
var Q = require("q");
var request = require("request");
var config = require("./_config");

module.exports.getLogger = function (name) {
  return getLogger("PB-PUBLIC::" + name);
};


module.exports.getResponse = function (path, queryDict, logger) {
  var _queryString = queryString.stringify(queryDict);
  var requestUrl = [config.apiUrl, path, "?", _queryString].join("");
  logger.debug("Run request: " + requestUrl);
  var deferred = Q.defer();
  request.get(requestUrl, function (err, resp, body) {
    if (!err && resp.statusCode === 200) {
      deferred.resolve(body);
    } else if (err) {
      deferred.reject(new Error(err));
    } else {
      var message = "Cannot fetch data, server responded with code: " + 
        resp.statusCode;
      deferred.reject(new Error(message));
    }
  });
  return deferred.promise;
};