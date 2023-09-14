import * as o from "./src/index.mjs";
import { Button as f } from "./src/button/index.mjs";
import { Mesh as x } from "./src/mesh_grandient/index.mjs";
const r = {
  install: (t) => {
    for (const e in o)
      t.use(o[e]);
  }
};
export {
  f as Button,
  x as Mesh,
  r as default
};
