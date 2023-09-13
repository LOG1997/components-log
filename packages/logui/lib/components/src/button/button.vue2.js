"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LogButton"
  },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = vue.computed(() => {
      return `log-btn-${buttonProps.type}`;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["log-btn", buttonStyle.value])
      }, "测试按钮", 2);
    };
  }
});
exports.default = _sfc_main;
