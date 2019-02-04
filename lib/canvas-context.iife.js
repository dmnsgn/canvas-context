var createCanvasContext = (function () {
  'use strict';

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

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWNvbnRleHQuaWlmZS5qcyIsInNvdXJjZXMiOlsiLi4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGV4dFR5cGVMaXN0ID0gW1xuICBcIjJkXCIsXG4gIFwid2ViZ2xcIixcbiAgXCJleHBlcmltZW50YWwtd2ViZ2xcIixcbiAgXCJ3ZWJnbDJcIixcbiAgXCJiaXRtYXByZW5kZXJlclwiXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYW52YXNDb250ZXh0KGNvbnRleHRUeXBlID0gXCIyZFwiLCBvcHRpb25zID0ge30pIHtcbiAgLy8gR2V0IG9wdGlvbnMgYW5kIHNldCBkZWZhdWx0c1xuICBjb25zdCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIG9mZnNjcmVlbiA9IGZhbHNlLFxuICAgIGNvbnRleHRBdHRyaWJ1dGVzID0ge30sXG4gICAgd29ya2VyID0gZmFsc2VcbiAgfSA9IHtcbiAgICAuLi5vcHRpb25zXG4gIH07XG5cbiAgLy8gQ2hlY2sgY29udGV4dFR5cGUgaXMgdmFsaWRcbiAgaWYgKCF3b3JrZXIgJiYgIWNvbnRleHRUeXBlTGlzdC5pbmNsdWRlcyhjb250ZXh0VHlwZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmtub3duIGNvbnRleHRUeXBlOiBcIiR7Y29udGV4dFR5cGV9XCJgKTtcbiAgfVxuXG4gIC8vIFJldHVybiBpbiBOb2RlIG9yIGluIGEgV29ya2VyIHVubGVzcyBhIGNhbnZhcyBpcyBwcm92aWRlZFxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvbm9kZS1jYW52YXMgZm9yIGFuIGV4YW1wbGVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgJiYgIW9wdGlvbnMuY2FudmFzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBHZXQgb2Zmc2NyZWVuIGNhbnZhcyBpZiByZXF1ZXN0ZWQgYW5kIGF2YWlsYWJsZVxuICBjb25zdCBjYW52YXNFbCA9IG9wdGlvbnMuY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNhbnZhcyA9XG4gICAgKG9mZnNjcmVlbiB8fCB3b3JrZXIpICYmIFwiT2Zmc2NyZWVuQ2FudmFzXCIgaW4gd2luZG93XG4gICAgICA/IGNhbnZhc0VsLnRyYW5zZmVyQ29udHJvbFRvT2Zmc2NyZWVuKClcbiAgICAgIDogY2FudmFzRWw7XG5cbiAgLy8gU2V0IGNhbnZhcyBkaW1lbnNpb25zIChkZWZhdWx0IHRvIDMwMCBpbiBicm93c2VycylcbiAgaWYgKE51bWJlci5pc0ludGVnZXIod2lkdGgpICYmIHdpZHRoID49IDApIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBpZiAoTnVtYmVyLmlzSW50ZWdlcihoZWlnaHQpICYmIGhlaWdodCA+PSAwKSBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gIGlmICh3b3JrZXIpIHJldHVybiB7IGNhbnZhcyB9O1xuXG4gIC8vIEdldCB0aGUgY29udGV4dCB3aXRoIHNwZWNpZmllZCBhdHRyaWJ1dGVzIGFuZCBoYW5kbGUgZXhwZXJpbWVudGFsLXdlYmdsXG4gIGxldCBjb250ZXh0O1xuICB0cnkge1xuICAgIGNvbnRleHQgPVxuICAgICAgY2FudmFzLmdldENvbnRleHQoY29udGV4dFR5cGUsIGNvbnRleHRBdHRyaWJ1dGVzKSB8fFxuICAgICAgKGNvbnRleHRUeXBlID09PSBcIndlYmdsXCJcbiAgICAgICAgPyBjYW52YXMuZ2V0Q29udGV4dChcImV4cGVyaW1lbnRhbC13ZWJnbFwiLCBjb250ZXh0QXR0cmlidXRlcylcbiAgICAgICAgOiBudWxsKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb250ZXh0ID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2FudmFzLFxuICAgIGNvbnRleHRcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJjb250ZXh0VHlwZUxpc3QiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiY29udGV4dFR5cGUiLCJvcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzY3JlZW4iLCJjb250ZXh0QXR0cmlidXRlcyIsIndvcmtlciIsImluY2x1ZGVzIiwiVHlwZUVycm9yIiwid2luZG93IiwiY2FudmFzIiwiY2FudmFzRWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFuc2ZlckNvbnRyb2xUb09mZnNjcmVlbiIsIk51bWJlciIsImlzSW50ZWdlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxJQUFNQSxlQUFlLEdBQUcsQ0FDdEIsSUFEc0IsRUFFdEIsT0FGc0IsRUFHdEIsb0JBSHNCLEVBSXRCLFFBSnNCLEVBS3RCLGdCQUxzQixDQUF4QjtBQVFBLEVBQWUsU0FBU0MsbUJBQVQsR0FBK0Q7RUFBQSxNQUFsQ0MsV0FBa0MsdUVBQXBCLElBQW9CO0VBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztFQUM1RTtFQUQ0RSxtQ0FTdkVBLE9BVHVFO0VBQUEsTUFHMUVDLEtBSDBFLFlBRzFFQSxLQUgwRTtFQUFBLE1BSTFFQyxNQUowRSxZQUkxRUEsTUFKMEU7RUFBQSxvQ0FLMUVDLFNBTDBFO0VBQUEsTUFLMUVBLFNBTDBFLG1DQUs5RCxLQUw4RDtFQUFBLHVDQU0xRUMsaUJBTjBFO0VBQUEsTUFNMUVBLGlCQU4wRSxzQ0FNdEQsRUFOc0Q7RUFBQSxpQ0FPMUVDLE1BUDBFO0VBQUEsTUFPMUVBLE1BUDBFLGdDQU9qRSxLQVBpRTs7O0VBYTVFLE1BQUksQ0FBQ0EsTUFBRCxJQUFXLENBQUNSLGVBQWUsQ0FBQ1MsUUFBaEIsQ0FBeUJQLFdBQXpCLENBQWhCLEVBQXVEO0VBQ3JELFVBQU0sSUFBSVEsU0FBSixrQ0FBdUNSLFdBQXZDLFFBQU47RUFDRCxHQWYyRTtFQWtCNUU7OztFQUNBLE1BQUksT0FBT1MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxDQUFDUixPQUFPLENBQUNTLE1BQTlDLEVBQXNEO0VBQ3BELFdBQU8sSUFBUDtFQUNELEdBckIyRTs7O0VBd0I1RSxNQUFNQyxRQUFRLEdBQUdWLE9BQU8sQ0FBQ1MsTUFBUixJQUFrQkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQW5DO0VBQ0EsTUFBTUgsTUFBTSxHQUNWLENBQUNOLFNBQVMsSUFBSUUsTUFBZCxLQUF5QixxQkFBcUJHLE1BQTlDLEdBQ0lFLFFBQVEsQ0FBQ0csMEJBQVQsRUFESixHQUVJSCxRQUhOLENBekI0RTs7RUErQjVFLE1BQUlJLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQmQsS0FBakIsS0FBMkJBLEtBQUssSUFBSSxDQUF4QyxFQUEyQ1EsTUFBTSxDQUFDUixLQUFQLEdBQWVBLEtBQWY7RUFDM0MsTUFBSWEsTUFBTSxDQUFDQyxTQUFQLENBQWlCYixNQUFqQixLQUE0QkEsTUFBTSxJQUFJLENBQTFDLEVBQTZDTyxNQUFNLENBQUNQLE1BQVAsR0FBZ0JBLE1BQWhCO0VBRTdDLE1BQUlHLE1BQUosRUFBWSxPQUFPO0VBQUVJLElBQUFBLE1BQU0sRUFBTkE7RUFBRixHQUFQLENBbENnRTs7RUFxQzVFLE1BQUlPLE9BQUo7O0VBQ0EsTUFBSTtFQUNGQSxJQUFBQSxPQUFPLEdBQ0xQLE1BQU0sQ0FBQ1EsVUFBUCxDQUFrQmxCLFdBQWxCLEVBQStCSyxpQkFBL0IsTUFDQ0wsV0FBVyxLQUFLLE9BQWhCLEdBQ0dVLE1BQU0sQ0FBQ1EsVUFBUCxDQUFrQixvQkFBbEIsRUFBd0NiLGlCQUF4QyxDQURILEdBRUcsSUFISixDQURGO0VBS0QsR0FORCxDQU1FLE9BQU9jLEtBQVAsRUFBYztFQUNkRixJQUFBQSxPQUFPLEdBQUcsSUFBVjtFQUNEOztFQUVELFNBQU87RUFDTFAsSUFBQUEsTUFBTSxFQUFOQSxNQURLO0VBRUxPLElBQUFBLE9BQU8sRUFBUEE7RUFGSyxHQUFQO0VBSUQ7Ozs7Ozs7OyJ9
