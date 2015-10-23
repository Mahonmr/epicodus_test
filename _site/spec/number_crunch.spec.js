/* jshint node: true */
/* global describe, it, beforeEach, expect */

"use strict";

var pingpong = require('../js/ping_pong.js');

describe("PingPong", function() {


  describe("#_valid_input(input)", function() {
    it("should return true if the input is a number greater than 0", function() {
      expect(pingpong.valid_input(2)).toEqual(true);
    });

    it("should return false if the input is a number is not divisible by 2", function() {
      expect(pingpong.valid_input(3)).toEqual(false);
    });

    it("should return false if the input is a number is less 2", function() {
      expect(pingpong.valid_input(-2)).toEqual(false);
    });

    it("should return false if the input is a string", function() {
      expect(pingpong.valid_input("this_is_a_string")).toEqual(false);
    });

    it("should return false if number is disguised as a string", function() {
      expect(pingpong.valid_input('6')).toEqual(false);
    });

    it("should return false if number is a float", function() {
      expect(pingpong.valid_input(6.3)).toEqual(false);
    });
  });
});
