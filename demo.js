import createCanvasContext from "./lib/canvas-context.esm.js";

// Store an animation function to evaluate later in both the window and worker
const TEST_FUNCTION = /* js */ `
const loop = () => {
  const now = Date.now() * 0.005;

  // Clear
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  // Draw
  context.save();
  context.translate(50, 50);
  context.beginPath();
  context.arc(0, 0, 25 - Math.cos(now) * 10, 0, 2 * Math.PI);
  context.fill();
  context.restore();

  requestAnimationFrame(loop);
  };
  loop();
`;

// Create a usual context in Window
const { context } = createCanvasContext("2d", {
  canvas: document.querySelector("#canvas-window"),
  offscreen: true
});

new Function(["context"], TEST_FUNCTION)(context);

// Use a Worker
const blob = new Blob(
  [
    /* js */ `
self.onmessage = event => {
  if (event.data.msg == "canvas-context-init") {
    importScripts(origin + "/lib/canvas-context.iife.js");

    const { context } = createCanvasContext("2d", {
      canvas: event.data.canvas,
    });
    ${TEST_FUNCTION}
  }
};
`
  ],
  { type: "text/javascript" }
);
const url = URL.createObjectURL(blob);
const worker = new Worker(url);
URL.revokeObjectURL(url);

const urlParts = location.href.split("/");
if (urlParts[urlParts.length - 1].indexOf(".") !== -1) {
  urlParts.pop();
}

// Worker can't transfer a canvas context so passing worker will only return an OffscreenCanvas
const { canvas: offscreenCanvas } = createCanvasContext(null, {
  canvas: document.querySelector("#canvas-worker"),
  worker: true
});

worker.postMessage(
  {
    msg: "canvas-context-init",
    origin: urlParts.join("/"),
    canvas: offscreenCanvas
  },
  [offscreenCanvas]
);

// Simulate a thread blocking action
function blockThread(milliseconds) {
  const start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

document.querySelector("#button").addEventListener("click", () => {
  requestAnimationFrame(() => {
    blockThread(2500);
  });
});
