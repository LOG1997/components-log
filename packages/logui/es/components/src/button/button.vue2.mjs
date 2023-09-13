import { defineComponent, computed, openBlock, createElementBlock, normalizeClass } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LogButton"
  },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return `log-btn-${buttonProps.type}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["log-btn", buttonStyle.value])
      }, "测试按钮", 2);
    };
  }
});
export {
  _sfc_main as default
};
