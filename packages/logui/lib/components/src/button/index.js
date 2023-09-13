"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const button = require("./button.vue.js");
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name;
    app.component(name, component);
  };
  return component;
};
const Button = withInstall(button.default);
exports.Button = Button;
exports.default = Button;
