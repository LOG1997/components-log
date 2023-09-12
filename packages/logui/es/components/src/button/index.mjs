import _sfc_main from "./button.vue.mjs";
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name;
    app.component(name, component);
  };
  return component;
};
const Button = withInstall(_sfc_main);
export {
  Button,
  Button as default
};
