import * as index$1 from "./src/index.mjs";
import { Button } from "./src/button/index.mjs";
import { MeshGradient } from "./src/mesh_grandient/index.mjs";
const index = {
  install: (app) => {
    for (const key in index$1) {
      app.use(index$1[key]);
    }
  }
};
export {
  Button,
  MeshGradient,
  index as default
};
