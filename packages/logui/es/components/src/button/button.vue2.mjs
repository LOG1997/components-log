import { defineComponent as n, computed as r, openBlock as c, createElementBlock as p, normalizeClass as s } from "vue";
import "./button.css";
const b = /* @__PURE__ */ n({
  name: "LogButton",
  __name: "button",
  props: {
    type: {}
  },
  setup(t) {
    const o = t, e = r(() => `log-btn-${o.type}`);
    return (u, a) => (c(), p("button", {
      class: s(["log-btn", e.value])
    }, "测试按钮", 2));
  }
});
export {
  b as default
};
