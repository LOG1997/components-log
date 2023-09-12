import _MeshGradient from "./mesh_grandient.vue";
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T,>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
        const name = (component as any).name
        app.component(name, component as SFCWithInstall<T>)
    };
    return component as SFCWithInstall<T>;
};
export const MeshGradient = withInstall(_MeshGradient);
export default MeshGradient;