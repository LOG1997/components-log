"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const mesh = require("../../../utils/mesh.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LogMesh"
  },
  __name: "mesh_grandient",
  props: {
    baseColor: {
      type: String,
      default: "#bd93f9"
    },
    speed: {
      type: Number,
      default: 0.1
    },
    mode: {
      type: Object,
      default: "analogous"
    },
    animation: {
      ttype: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const localProps = vue.toRefs(props);
    const grandientBox = vue.ref();
    let done = vue.ref(false);
    const positionInit = vue.ref([]);
    const previousPositionInit = vue.ref([]);
    const getGrandient = (color = []) => {
      const css = grandientBox.value.style;
      const { grandients, baseColor, position, previousPosition } = mesh.generateGrandients(color, positionInit.value, previousPositionInit.value, localProps.speed.value, localProps.mode.value);
      if (position.length >= 1) {
        positionInit.value = position;
        previousPositionInit.value = previousPosition;
      }
      css.backgroundImage = grandients;
      css.backgroundColor = baseColor;
    };
    const step = async () => {
      getGrandient(localProps.baseColor.value);
      if (localProps.animation.value && !done.value) {
        requestAnimationFrame(step);
      }
    };
    vue.onMounted(async () => {
      requestAnimationFrame(step);
    });
    vue.onUnmounted(() => {
      done.value = true;
    });
    vue.watchEffect(() => {
      if (localProps.animation.value == true) {
        console.log("😔localProps.animation.value:", localProps.animation.value);
        requestAnimationFrame(step);
      } else if (localProps.baseColor.value) {
        requestAnimationFrame(step);
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "grandientBox",
        ref: grandientBox,
        class: "grandientBox w-full h-full min-w-32 min-h-32"
      }, null, 512);
    };
  }
});
exports.default = _sfc_main;
