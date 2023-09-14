import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
export declare const Mesh: SFCWithInstall<import("vue").DefineComponent<{
    baseColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    mode: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    animation: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
}, {
    props: any;
    localProps: import("vue").ToRefs<any>;
    grandientBox: import("vue").Ref<any>;
    done: import("vue").Ref<boolean>;
    positionInit: import("vue").Ref<number[][]>;
    previousPositionInit: import("vue").Ref<number[][]>;
    getGrandient: (color?: string | number[]) => void;
    step: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    baseColor: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    mode: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    animation: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
}>>, {
    baseColor: string;
    speed: number;
    mode: string;
}, {}>>;
export default Mesh;
