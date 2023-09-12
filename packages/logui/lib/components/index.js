"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$3 = require("./src/index.js");
const index$1 = require("./src/button/index.js");
const index$2 = require("./src/mesh_grandient/index.js");
const index = {
  install: (app) => {
    for (const key in index$3) {
      app.use(index$3[key]);
    }
  }
};
exports.Button = index$1.Button;
exports.MeshGradient = index$2.MeshGradient;
exports.default = index;
