import { hex as u } from "./colors.mjs";
const G = (h = [243, 98, 67], l = [], t, f, a) => {
  typeof h == "string" && (h = u.toHsl(h));
  const { bottomColor: e, randomColors: M } = $("analogous", h), m = [], y = l.length;
  t.length <= 0 && (t = new Array(y).fill([100, 100]));
  const c = [];
  return M.forEach((A, r) => {
    let n = 0, g = 0;
    l.length <= 0 ? (n = s(), g = s()) : (l[r][0] >= 120 ? t[r][0] = 100 : l[r][0] <= -20 && (t[r][0] = 0), l[r][1] >= 120 ? t[r][1] = 100 : l[r][1] <= -20 && (t[r][1] = 0), t[r][0] ? n = l[r][0] - Math.random() * f : n = l[r][0] + Math.random() * f, t[r][1] ? g = l[r][1] - Math.random() * f : g = l[r][1] + Math.random() * f), m.push([n, g]), c.push(`radial-gradient(at ${n}% ${g}%, ${A} 0px, transparent 55%)`);
  }), { baseColor: e, grandients: c.join(","), position: m, previousPosition: t };
}, s = () => Math.floor(Math.random() * 100), $ = (h = "analogous", l = [243, 98, 67]) => {
  typeof l == "string" && (l = u.toHsl(l)), l.length == 0 && (l = [243, 98, 67]);
  const t = Array.from(l), f = [];
  if (h == "analogous")
    for (let a = 0; a < 6; a++)
      t[0] = t[0] + 30, t[0] > 360 && (t[0] = t[0] - 360), f.push("hsl(" + t[0] + "," + t[1] + "%," + t[2] + "%)");
  if (h == "monochromatic")
    for (let a = 0; a < 6; a++)
      a % 2 == 0 ? (t[1] = t[1] + 30, t[1] >= 100 && (t[1] = t[1] - 100)) : (t[2] = t[2] + 30, t[2] >= 100 && (t[2] = t[2] - 100)), f.push("hsl(" + t[0] + "," + t[1] + "%," + t[2] + "%)");
  if (h == "triad")
    for (let a = 0; a < 6; a++)
      a % 2 == 0 ? (t[1] = t[1] + 30, t[1] >= 100 && (t[1] = t[1] - 100)) : (t[2] = t[2] + 30, t[2] >= 100 && (t[2] = t[2] - 100)), f.push("hsl(" + t[0] + "," + t[1] + "%," + t[2] + "%)");
  return { randomColors: f, bottomColor: "hsl(" + l[0] + "," + l[1] + "%," + l[2] + "%)" };
};
export {
  G as generateGrandients
};
