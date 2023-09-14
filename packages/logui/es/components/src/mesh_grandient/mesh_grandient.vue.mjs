import { defineComponent as v, toRefs as g, ref as n, onMounted as _, onUnmounted as b, watchEffect as B, openBlock as C, createElementBlock as h } from "vue";
import { generateGrandients as k } from "../../../utils/mesh.mjs";
import "./mesh.css";
const F = /* @__PURE__ */ v({
  name: "LogMesh",
  __name: "mesh_grandient",
  props: {
    baseColor: { default: "#bd93f9" },
    speed: { default: 0.1 },
    mode: { default: "analogous" },
    animation: { type: Boolean, default: !0 }
  },
  setup(c) {
    const e = g(c), a = n();
    let s = n(!1);
    const r = n([]), i = n([]), m = (l = []) => {
      const t = a.value.style, { grandients: d, baseColor: p, position: u, previousPosition: f } = k(l, r.value, i.value, e.speed.value, e.mode.value);
      u.length >= 1 && (r.value = u, i.value = f), t.backgroundImage = d, t.backgroundColor = p;
    }, o = async () => {
      m(e.baseColor.value), e.animation.value && !s.value && requestAnimationFrame(o);
    };
    return _(async () => {
      requestAnimationFrame(o);
    }), b(() => {
      s.value = !0;
    }), B(() => {
      (e.animation.value == !0 || e.baseColor.value) && requestAnimationFrame(o);
    }), (l, t) => (C(), h("div", {
      ref_key: "grandientBox",
      ref: a,
      class: "grandientBox"
    }, null, 512));
  }
});
export {
  F as default
};
