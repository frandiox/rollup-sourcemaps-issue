/* rollup-sourcemaps-bug v1.0.0} */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.test = factory());
}(this, (function () { 'use strict';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var m1 = function m1() {
  classCallCheck(this, m1);

  console.log('New m1 instance');
  document.createElement('div');
  console.log('Break point here?');
  console.log('Or here?');
  var element = document.createElement('div');
  console.log('Or here?', element);
};

var test = {
  m1: m1
};

return test;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9tb2R1bGVzL20xLmpzIiwiLi4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbTEge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnTmV3IG0xIGluc3RhbmNlJyk7XG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc29sZS5sb2coJ0JyZWFrIHBvaW50IGhlcmU/Jyk7XG4gICAgY29uc29sZS5sb2coJ09yIGhlcmU/Jyk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnNvbGUubG9nKCdPciBoZXJlPycsIGVsZW1lbnQpO1xuICB9XG59O1xuIiwiaW1wb3J0IG0xIGZyb20gJy4vbW9kdWxlcy9tMSc7XG5cbmNvbnN0IHRlc3QgPSB7XG4gIG0xLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGVzdDtcbiJdLCJuYW1lcyI6WyJtMSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsS0FDbkIsY0FBYzs7O1VBQ0pDLEdBQVIsQ0FBWSxpQkFBWjtXQUNTQyxhQUFULENBQXVCLEtBQXZCO1VBQ1FELEdBQVIsQ0FBWSxtQkFBWjtVQUNRQSxHQUFSLENBQVksVUFBWjtNQUNNRSxVQUFVQyxTQUFTRixhQUFULENBQXVCLEtBQXZCLENBQWhCO1VBQ1FELEdBQVIsQ0FBWSxVQUFaLEVBQXdCRSxPQUF4Qjs7O0FDTEosSUFBTUUsT0FBTzs7Q0FBYjs7Ozs7Ozs7In0=
