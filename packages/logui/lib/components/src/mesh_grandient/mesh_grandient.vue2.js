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
      default: "#60DE28"
    },
    speed: {
      type: Number,
      default: 0.2
    }
  },
  setup(__props) {
    const props = __props;
    const localProps = vue.toRefs(props);
    const grandientBox = vue.ref();
    let previousTimeStamp;
    const positionInit = vue.ref([]);
    const previousPositionInit = vue.ref([]);
    const getGrandient = (color = []) => {
      const css = grandientBox.value.style;
      const { grandients, baseColor, position, previousPosition } = mesh.generateGrandients(color, positionInit.value, previousPositionInit.value, localProps.speed.value);
      if (position.length >= 1) {
        positionInit.value = position;
        previousPositionInit.value = previousPosition;
      }
      css.backgroundImage = grandients;
      css.backgroundColor = baseColor;
    };
    const step = async (timeStamp) => {
      if (previousTimeStamp !== timeStamp) {
        getGrandient(localProps.baseColor.value);
      }
      {
        requestAnimationFrame(step);
      }
    };
    vue.onMounted(async () => {
      requestAnimationFrame(step);
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
