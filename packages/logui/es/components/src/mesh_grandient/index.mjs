import _sfc_main from "./mesh_grandient.vue.mjs";
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name;
    app.component(name, component);
  };
  return component;
};
const MeshGradient = withInstall(_sfc_main);
export {
  MeshGradient,
  MeshGradient as default
};
