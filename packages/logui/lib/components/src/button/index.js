"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const button_vue_vue_type_script_setup_true_lang = require("./button.vue.js");
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name;
    app.component(name, component);
  };
  return component;
};
const Button = withInstall(button_vue_vue_type_script_setup_true_lang.default);
exports.Button = Button;
exports.default = Button;
