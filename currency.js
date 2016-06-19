/**
 * Created by kostyak on 19.06.16.
 */
"use strict";

var libUtil = require("./_util");
var logger = require("./_util").getLogger("currency");
var q = require("q");

var queryPath = "/pubinfo";

function getQueryData(currencyId) {
  return {
    json: null,
    exchange: null,
    coursid: currencyId
  };
}

var getForCash = function () {
  return libUtil.getResponse(queryPath, getQueryData(5), logger)
    .then(function (body) {
      logger.debug("Gotten body: " + body);
      return q(body);
    });
};

var getForClearing = function () {
  return libUtil.getResponse(queryPath, getQueryData(11), logger)
    .then(function (body) {
      logger.debug("Gotten body: " + body);
      return q(body);
    });
};


module.exports.exchangeRates = {
  getForCash: getForCash,
  getForClearing: getForClearing
};