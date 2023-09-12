import _MeshGradient from "./mesh_grandient.vue.mjs";
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name;
    app.component(name, component);
  };
  return component;
};
const MeshGradient = withInstall(_MeshGradient);
export {
  MeshGradient,
  MeshGradient as default
};
