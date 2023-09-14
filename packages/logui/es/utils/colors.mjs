const g = {
  toRgb(s) {
    const t = s.match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t)
      return [0, 0, 0];
    let o = t[0];
    t[0].length === 3 && (o = o.split("").map((e) => e + e).join(""));
    const c = parseInt(o, 16), n = c >> 16 & 255, r = c >> 8 & 255, i = c & 255;
    return [n, r, i];
  },
  toHsl(s) {
    const t = g.toRgb(s);
    return m.toHsl(t);
  },
  toCmyk(s) {
    const t = g.toRgb(s);
    return m.toCmyk(t);
  }
}, m = {
  toHex(s) {
    const o = (((Math.round(s[0]) & 255) << 16) + ((Math.round(s[1]) & 255) << 8) + (Math.round(s[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(o.length) + o;
  },
  toHsl(s) {
    const [t, o, c] = s.map((h) => h / 255), n = Math.min(t, o, c), r = Math.max(t, o, c), i = r - n;
    let e = 0, l = 0;
    r === n ? e = 0 : t === r ? e = (o - c) / i : o === r ? e = 2 + (c - t) / i : c === r && (e = 4 + (t - o) / i), e = Math.min(e * 60, 360), e < 0 && (e += 360);
    const a = (n + r) / 2;
    return r === n ? l = 0 : a <= 0.5 ? l = i / (r + n) : l = i / (2 - r - n), [e, l * 100, a * 100];
  },
  toCmyk(s) {
    const [t, o, c] = s.map((l) => l / 255), n = Math.min(1 - t, 1 - o, 1 - c), r = (1 - t - n) / (1 - n) || 0, i = (1 - o - n) / (1 - n) || 0, e = (1 - c - n) / (1 - n) || 0;
    return [r * 100, i * 100, e * 100, n * 100];
  }
};
export {
  g as hex,
  m as rgb
};
