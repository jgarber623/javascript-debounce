/*!
 *  javascript-debounce 1.0.0
 *
 *  A lightweight, dependency-free JavaScript module for debouncing functions based on David Walsh's debounce function.
 *
 *  Source code available at: https://github.com/jgarber623/javascript-debounce
 *
 *  (c) 2015-present Jason Garber (http://sixtwothree.org)
 *
 *  javascript-debounce may be freely distributed under the MIT license.
 */

(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.debounce = factory();
  }
})(this, function() {
  "use strict";
  return function(callback, delay) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        callback.apply(context, args);
      }, delay);
    };
  };
});