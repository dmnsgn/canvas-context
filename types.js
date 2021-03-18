/**
 * @typedef {"2d" | "webgl" | "experimental-webgl" | "webgl2" | "webgl2-compute" | "bitmaprenderer" | "gpupresent"} ContextType A DOMString containing the context identifier defining the drawing context associated to the canvas.
 */

/**
 * @typedef {Object} CanvasContextOptions Options for canvas creation. All optional.
 * @property {number} [width=300] Request an initial canvas width.
 * @property {number} [height=150] Request an initial canvas height.
 * @property {boolean} [offscreen=false] Request an offscreen canvas.
 * @property {boolean} [worker=false] Handle use in a worker.
 * @property {CanvasRenderingContext2DSettings | WebGLContextAttributes} [contextAttributes={}] Attributes to be passed to getContext.
 */

/**
 * @typedef {Object} CanvasContextReturnValue
 * @property {HTMLCanvasElement | OffscreenCanvas} canvas
 * @property {RenderingContext} context
 */
