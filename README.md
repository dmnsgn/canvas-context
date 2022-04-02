# canvas-context

[![npm version](https://img.shields.io/npm/v/canvas-context)](https://www.npmjs.com/package/canvas-context)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/canvas-context)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/canvas-context)](https://bundlephobia.com/package/canvas-context)
[![dependencies](https://img.shields.io/librariesio/release/npm/canvas-context)](https://github.com/dmnsgn/canvas-context/blob/master/package.json)
[![types](https://img.shields.io/npm/types/canvas-context)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/canvas-context)](https://github.com/dmnsgn/canvas-context/blob/master/LICENSE)

Create a RenderingContext (2d, webgl, webgl2, bitmaprenderer, webgpu), optionally offscreen for possible use in a Worker.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/canvas-context/master/screenshot.gif)

See the [example](https://dmnsgn.github.io/canvas-context/) and its [source](index.html) with a Worker implementation.

## Installation

```bash
npm install canvas-context
```

## Usage

```js
import createCanvasContext from "canvas-context";

const { context, canvas } = createCanvasContext("2d", {
  width: 100,
  height: 100,
  offscreen: true,
});
```

## API

<!-- api-start -->

## Modules

<dl>
<dt><a href="#module_createCanvasContext">createCanvasContext</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ContextType">ContextType</a> : <code>&quot;2d&quot;</code> | <code>&quot;webgl&quot;</code> | <code>&quot;experimental-webgl&quot;</code> | <code>&quot;webgl2&quot;</code> | <code>&quot;webgl2-compute&quot;</code> | <code>&quot;bitmaprenderer&quot;</code> | <code>&quot;gpupresent&quot;</code></dt>
<dd><p>A DOMString containing the context identifier defining the drawing context associated to the canvas.</p>
</dd>
<dt><a href="#CanvasContextOptions">CanvasContextOptions</a> : <code>Object</code></dt>
<dd><p>Options for canvas creation. All optional.</p>
</dd>
<dt><a href="#CanvasContextReturnValue">CanvasContextReturnValue</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="module_createCanvasContext"></a>

## createCanvasContext

<a name="exp_module_createCanvasContext--createCanvasContext"></a>

### createCanvasContext([contextType], [options]) ⇒ [<code>CanvasContextReturnValue</code>](#CanvasContextReturnValue) ⏏

Create a RenderingContext (2d, webgl, webgl2, bitmaprenderer, gpupresent), optionally offscreen for possible use in a Worker.

**Kind**: Exported function

| Param         | Type                                                       | Default                     |
| ------------- | ---------------------------------------------------------- | --------------------------- |
| [contextType] | [<code>ContextType</code>](#ContextType)                   | <code>&quot;2d&quot;</code> |
| [options]     | [<code>CanvasContextOptions</code>](#CanvasContextOptions) | <code>{}</code>             |

<a name="ContextType"></a>

## ContextType : <code>&quot;2d&quot;</code> \| <code>&quot;webgl&quot;</code> \| <code>&quot;experimental-webgl&quot;</code> \| <code>&quot;webgl2&quot;</code> \| <code>&quot;webgl2-compute&quot;</code> \| <code>&quot;bitmaprenderer&quot;</code> \| <code>&quot;gpupresent&quot;</code>

A DOMString containing the context identifier defining the drawing context associated to the canvas.

**Kind**: global typedef  
<a name="CanvasContextOptions"></a>

## CanvasContextOptions : <code>Object</code>

Options for canvas creation. All optional.

**Kind**: global typedef  
**Properties**

| Name                | Type                                                                                 | Default            | Description                            |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------ | -------------------------------------- |
| [width]             | <code>number</code>                                                                  | <code>300</code>   | Request an initial canvas width.       |
| [height]            | <code>number</code>                                                                  | <code>150</code>   | Request an initial canvas height.      |
| [offscreen]         | <code>boolean</code>                                                                 | <code>false</code> | Request an offscreen canvas.           |
| [worker]            | <code>boolean</code>                                                                 | <code>false</code> | Handle use in a worker.                |
| [contextAttributes] | <code>CanvasRenderingContext2DSettings</code> \| <code>WebGLContextAttributes</code> | <code>{}</code>    | Attributes to be passed to getContext. |

<a name="CanvasContextReturnValue"></a>

## CanvasContextReturnValue : <code>Object</code>

**Kind**: global typedef  
**Properties**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| canvas  | <code>HTMLCanvasElement</code> \| <code>OffscreenCanvas</code> |
| context | <code>RenderingContext</code>                                  |

<!-- api-end -->

## License

MIT. See [license file](LICENSE.md).
