/**
 * Created by kostyak on 19.06.16.
 */
"use strict";

var should = require("should");
var currency = require("../currency");

describe("Currency Exchange", function () {
  it("Should return cash rates", function (done) {
    currency.exchangeRates.getForCash()
      .then(function (data) {
        should.exist(data, "Should return data");
      })
      .catch(function (err) {
        should.not.exist(err, "Should not throw any exception");
      })
      .done(function () {
        done();
      });
  });

  it("Should return clearing rates", function (done) {
    currency.exchangeRates.getForClearing()
      .then(function (data) {
        should.exist(data, "Should return data");
      })
      .catch(function (err) {
        should.not.exist(err, "Should not throw any exception");
      })
      .done(function () {
        done();
      });
  });
});