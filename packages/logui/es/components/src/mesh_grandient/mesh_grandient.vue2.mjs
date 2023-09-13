import { defineComponent, toRefs, ref, onMounted, onUnmounted, watchEffect, openBlock, createElementBlock } from "vue";
import { generateGrandients } from "../../../utils/mesh.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const localProps = toRefs(props);
    const grandientBox = ref();
    let done = ref(false);
    const positionInit = ref([]);
    const previousPositionInit = ref([]);
    const getGrandient = (color = []) => {
      const css = grandientBox.value.style;
      const { grandients, baseColor, position, previousPosition } = generateGrandients(color, positionInit.value, previousPositionInit.value, localProps.speed.value, localProps.mode.value);
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
    onMounted(async () => {
      requestAnimationFrame(step);
    });
    onUnmounted(() => {
      done.value = true;
    });
    watchEffect(() => {
      if (localProps.animation.value == true) {
        console.log("😔localProps.animation.value:", localProps.animation.value);
        requestAnimationFrame(step);
      } else if (localProps.baseColor.value) {
        requestAnimationFrame(step);
      }
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
