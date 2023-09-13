"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const mesh_grandient_vue_vue_type_script_setup_true_lang = require("./mesh_grandient.vue.js");
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name;
    app.component(name, component);
  };
  return component;
};
const MeshGradient = withInstall(mesh_grandient_vue_vue_type_script_setup_true_lang.default);
exports.MeshGradient = MeshGradient;
exports.default = MeshGradient;
