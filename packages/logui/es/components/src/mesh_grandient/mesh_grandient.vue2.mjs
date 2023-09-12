import { defineComponent, toRefs, ref, onMounted, openBlock, createElementBlock } from "vue";
import { generateGrandients } from "../../../utils/mesh.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const localProps = toRefs(props);
    const grandientBox = ref();
    let previousTimeStamp;
    const positionInit = ref([]);
    const previousPositionInit = ref([]);
    const getGrandient = (color = []) => {
      const css = grandientBox.value.style;
      const { grandients, baseColor, position, previousPosition } = generateGrandients(color, positionInit.value, previousPositionInit.value, localProps.speed.value);
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
    onMounted(async () => {
      requestAnimationFrame(step);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "grandientBox",
        ref: grandientBox,
        class: "grandientBox w-full h-full min-w-32 min-h-32"
      }, null, 512);
    };
  }
});
export {
  _sfc_main as default
};
