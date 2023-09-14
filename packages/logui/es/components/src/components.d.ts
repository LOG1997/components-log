import * as components from "./index";
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        LogButton: typeof components.Button;
        LogMesh: typeof components.MeshGradient;
    }
}
export { };

