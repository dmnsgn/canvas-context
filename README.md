# canvas-context [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm version](https://badge.fury.io/js/canvas-context.svg)](https://www.npmjs.com/package/canvas-context)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Create a RenderingContext (2d, webgl, webgl2, bitmaprenderer, gpupresent), optionally offscreen for possible use in a Worker.

![](https://raw.githubusercontent.com/dmnsgn/canvas-context/master/screenshot.gif)

See the [demo](https://dmnsgn.github.io/canvas-context/) and its [source](demo.js) for an example with Worker implementation.

## Installation

```bash
npm install canvas-context
```

[![NPM](https://nodei.co/npm/canvas-context.png)](https://nodei.co/npm/canvas-context/)

## Usage

```js
const createCanvasContext = require("canvas-context");

const { context, canvas } = createCanvasContext("2d", {
	width: 100,
	height: 100,
	offscreen: true
});
```

## API

### `createCanvasContext(contextType, options): { context: RenderingContext, canvas: HTMLCanvasElement }`

```ts
type ContextType =
	| "2d"
	| "webgl"
	| "experimental-webgl"
	| "webgl2"
	| "bitmaprenderer";
```

| Option                | Type               | Default | Description                                                                                     |
| --------------------- | ------------------ | ------- | ----------------------------------------------------------------------------------------------- |
| **contextType**       | ContextType        | "2d"    | Context identifier defining the drawing context associated to the canvas                        |
| **options.canvas**    | HTMLCanvasElement? |         | An optional canvas. Necessary when window === "undefined" (eg. Node or Worker context)          |
| **options.width**     | number?            | 300     | Set canvas.width (should be an integer >= 0)                                                    |
| **options.height**    | number?            | 150     | Set canvas.height (should be an integer >= 0)                                                   |
| **options.offscreen** | boolean?           | false   | Create an `OffscreenCanvas` or `transferControlToOffscreen()` if `options.canvas`               |
| **options.worker**    | boolean?           | false   | Try to get an `OffscreenCanvas` and return only the canvas so it can be transferred in a Worker |

## License

MIT. See [license file](https://github.com/dmnsgn/canvas-context/blob/master/LICENSE.md).
