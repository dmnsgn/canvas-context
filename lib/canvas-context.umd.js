(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.createCanvasContext = factory());
}(this, function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var contextTypeList = ["2d", "webgl", "experimental-webgl", "webgl2", "bitmaprenderer"];
  function createCanvasContext() {
    var contextType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "2d";
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // Get options and set defaults
    var _options = _objectSpread({}, options),
        width = _options.width,
        height = _options.height,
        _options$offscreen = _options.offscreen,
        offscreen = _options$offscreen === void 0 ? false : _options$offscreen,
        _options$contextAttri = _options.contextAttributes,
        contextAttributes = _options$contextAttri === void 0 ? {} : _options$contextAttri,
        _options$worker = _options.worker,
        worker = _options$worker === void 0 ? false : _options$worker; // Check contextType is valid


    if (!worker && !contextTypeList.includes(contextType)) {
      throw new TypeError("Unknown contextType: \"".concat(contextType, "\""));
    } // Return in Node or in a Worker unless a canvas is provided
    // See https://github.com/Automattic/node-canvas for an example


    if (typeof window === "undefined" && !options.canvas) {
      return null;
    } // Get offscreen canvas if requested and available


    var canvasEl = options.canvas || document.createElement("canvas");
    var canvas = (offscreen || worker) && "OffscreenCanvas" in window ? canvasEl.transferControlToOffscreen() : canvasEl; // Set canvas dimensions (default to 300 in browsers)

    if (Number.isInteger(width) && width >= 0) canvas.width = width;
    if (Number.isInteger(height) && height >= 0) canvas.height = height;
    if (worker) return {
      canvas: canvas
    }; // Get the context with specified attributes and handle experimental-webgl

    var context;

    try {
      context = canvas.getContext(contextType, contextAttributes) || (contextType === "webgl" ? canvas.getContext("experimental-webgl", contextAttributes) : null);
    } catch (error) {
      context = null;
    }

    return {
      canvas: canvas,
      context: context
    };
  }

  return createCanvasContext;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWNvbnRleHQudW1kLmpzIiwic291cmNlcyI6WyIuLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZXh0VHlwZUxpc3QgPSBbXG4gIFwiMmRcIixcbiAgXCJ3ZWJnbFwiLFxuICBcImV4cGVyaW1lbnRhbC13ZWJnbFwiLFxuICBcIndlYmdsMlwiLFxuICBcImJpdG1hcHJlbmRlcmVyXCJcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhc0NvbnRleHQoY29udGV4dFR5cGUgPSBcIjJkXCIsIG9wdGlvbnMgPSB7fSkge1xuICAvLyBHZXQgb3B0aW9ucyBhbmQgc2V0IGRlZmF1bHRzXG4gIGNvbnN0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgb2Zmc2NyZWVuID0gZmFsc2UsXG4gICAgY29udGV4dEF0dHJpYnV0ZXMgPSB7fSxcbiAgICB3b3JrZXIgPSBmYWxzZVxuICB9ID0ge1xuICAgIC4uLm9wdGlvbnNcbiAgfTtcblxuICAvLyBDaGVjayBjb250ZXh0VHlwZSBpcyB2YWxpZFxuICBpZiAoIXdvcmtlciAmJiAhY29udGV4dFR5cGVMaXN0LmluY2x1ZGVzKGNvbnRleHRUeXBlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVua25vd24gY29udGV4dFR5cGU6IFwiJHtjb250ZXh0VHlwZX1cImApO1xuICB9XG5cbiAgLy8gUmV0dXJuIGluIE5vZGUgb3IgaW4gYSBXb3JrZXIgdW5sZXNzIGEgY2FudmFzIGlzIHByb3ZpZGVkXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9ub2RlLWNhbnZhcyBmb3IgYW4gZXhhbXBsZVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiAmJiAhb3B0aW9ucy5jYW52YXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEdldCBvZmZzY3JlZW4gY2FudmFzIGlmIHJlcXVlc3RlZCBhbmQgYXZhaWxhYmxlXG4gIGNvbnN0IGNhbnZhc0VsID0gb3B0aW9ucy5jYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY29uc3QgY2FudmFzID1cbiAgICAob2Zmc2NyZWVuIHx8IHdvcmtlcikgJiYgXCJPZmZzY3JlZW5DYW52YXNcIiBpbiB3aW5kb3dcbiAgICAgID8gY2FudmFzRWwudHJhbnNmZXJDb250cm9sVG9PZmZzY3JlZW4oKVxuICAgICAgOiBjYW52YXNFbDtcblxuICAvLyBTZXQgY2FudmFzIGRpbWVuc2lvbnMgKGRlZmF1bHQgdG8gMzAwIGluIGJyb3dzZXJzKVxuICBpZiAoTnVtYmVyLmlzSW50ZWdlcih3aWR0aCkgJiYgd2lkdGggPj0gMCkgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhlaWdodCkgJiYgaGVpZ2h0ID49IDApIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgaWYgKHdvcmtlcikgcmV0dXJuIHsgY2FudmFzIH07XG5cbiAgLy8gR2V0IHRoZSBjb250ZXh0IHdpdGggc3BlY2lmaWVkIGF0dHJpYnV0ZXMgYW5kIGhhbmRsZSBleHBlcmltZW50YWwtd2ViZ2xcbiAgbGV0IGNvbnRleHQ7XG4gIHRyeSB7XG4gICAgY29udGV4dCA9XG4gICAgICBjYW52YXMuZ2V0Q29udGV4dChjb250ZXh0VHlwZSwgY29udGV4dEF0dHJpYnV0ZXMpIHx8XG4gICAgICAoY29udGV4dFR5cGUgPT09IFwid2ViZ2xcIlxuICAgICAgICA/IGNhbnZhcy5nZXRDb250ZXh0KFwiZXhwZXJpbWVudGFsLXdlYmdsXCIsIGNvbnRleHRBdHRyaWJ1dGVzKVxuICAgICAgICA6IG51bGwpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnRleHQgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjYW52YXMsXG4gICAgY29udGV4dFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImNvbnRleHRUeXBlTGlzdCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJjb250ZXh0VHlwZSIsIm9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsIm9mZnNjcmVlbiIsImNvbnRleHRBdHRyaWJ1dGVzIiwid29ya2VyIiwiaW5jbHVkZXMiLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJjYW52YXMiLCJjYW52YXNFbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zZmVyQ29udHJvbFRvT2Zmc2NyZWVuIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLElBQU1BLGVBQWUsR0FBRyxDQUN0QixJQURzQixFQUV0QixPQUZzQixFQUd0QixvQkFIc0IsRUFJdEIsUUFKc0IsRUFLdEIsZ0JBTHNCLENBQXhCO0FBUUEsRUFBZSxTQUFTQyxtQkFBVCxHQUErRDtFQUFBLE1BQWxDQyxXQUFrQyx1RUFBcEIsSUFBb0I7RUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0VBQzVFO0VBRDRFLG1DQVN2RUEsT0FUdUU7RUFBQSxNQUcxRUMsS0FIMEUsWUFHMUVBLEtBSDBFO0VBQUEsTUFJMUVDLE1BSjBFLFlBSTFFQSxNQUowRTtFQUFBLG9DQUsxRUMsU0FMMEU7RUFBQSxNQUsxRUEsU0FMMEUsbUNBSzlELEtBTDhEO0VBQUEsdUNBTTFFQyxpQkFOMEU7RUFBQSxNQU0xRUEsaUJBTjBFLHNDQU10RCxFQU5zRDtFQUFBLGlDQU8xRUMsTUFQMEU7RUFBQSxNQU8xRUEsTUFQMEUsZ0NBT2pFLEtBUGlFOzs7RUFhNUUsTUFBSSxDQUFDQSxNQUFELElBQVcsQ0FBQ1IsZUFBZSxDQUFDUyxRQUFoQixDQUF5QlAsV0FBekIsQ0FBaEIsRUFBdUQ7RUFDckQsVUFBTSxJQUFJUSxTQUFKLGtDQUF1Q1IsV0FBdkMsUUFBTjtFQUNELEdBZjJFO0VBa0I1RTs7O0VBQ0EsTUFBSSxPQUFPUyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLENBQUNSLE9BQU8sQ0FBQ1MsTUFBOUMsRUFBc0Q7RUFDcEQsV0FBTyxJQUFQO0VBQ0QsR0FyQjJFOzs7RUF3QjVFLE1BQU1DLFFBQVEsR0FBR1YsT0FBTyxDQUFDUyxNQUFSLElBQWtCRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbkM7RUFDQSxNQUFNSCxNQUFNLEdBQ1YsQ0FBQ04sU0FBUyxJQUFJRSxNQUFkLEtBQXlCLHFCQUFxQkcsTUFBOUMsR0FDSUUsUUFBUSxDQUFDRywwQkFBVCxFQURKLEdBRUlILFFBSE4sQ0F6QjRFOztFQStCNUUsTUFBSUksTUFBTSxDQUFDQyxTQUFQLENBQWlCZCxLQUFqQixLQUEyQkEsS0FBSyxJQUFJLENBQXhDLEVBQTJDUSxNQUFNLENBQUNSLEtBQVAsR0FBZUEsS0FBZjtFQUMzQyxNQUFJYSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJiLE1BQWpCLEtBQTRCQSxNQUFNLElBQUksQ0FBMUMsRUFBNkNPLE1BQU0sQ0FBQ1AsTUFBUCxHQUFnQkEsTUFBaEI7RUFFN0MsTUFBSUcsTUFBSixFQUFZLE9BQU87RUFBRUksSUFBQUEsTUFBTSxFQUFOQTtFQUFGLEdBQVAsQ0FsQ2dFOztFQXFDNUUsTUFBSU8sT0FBSjs7RUFDQSxNQUFJO0VBQ0ZBLElBQUFBLE9BQU8sR0FDTFAsTUFBTSxDQUFDUSxVQUFQLENBQWtCbEIsV0FBbEIsRUFBK0JLLGlCQUEvQixNQUNDTCxXQUFXLEtBQUssT0FBaEIsR0FDR1UsTUFBTSxDQUFDUSxVQUFQLENBQWtCLG9CQUFsQixFQUF3Q2IsaUJBQXhDLENBREgsR0FFRyxJQUhKLENBREY7RUFLRCxHQU5ELENBTUUsT0FBT2MsS0FBUCxFQUFjO0VBQ2RGLElBQUFBLE9BQU8sR0FBRyxJQUFWO0VBQ0Q7O0VBRUQsU0FBTztFQUNMUCxJQUFBQSxNQUFNLEVBQU5BLE1BREs7RUFFTE8sSUFBQUEsT0FBTyxFQUFQQTtFQUZLLEdBQVA7RUFJRDs7Ozs7Ozs7In0=
