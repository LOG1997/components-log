export const hex = {
    toRgb(args: string) {
        const match = args.match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
            return [0, 0, 0];
        }

        let colorString = match[0];

        if (match[0].length === 3) {
            colorString = colorString
                .split('')
                .map((char: string) => {
                    return char + char;
                })
                .join('');
        }

        const integer = parseInt(colorString, 16);
        const r = (integer >> 16) & 0xff;
        const g = (integer >> 8) & 0xff;
        const b = integer & 0xff;

        return [r, g, b];
    },
    toHsl(args: string) {
        const _rgb = hex.toRgb(args);

        return rgb.toHsl(_rgb);
    },
    toCmyk(args: string) {
        const _rgb = hex.toRgb(args);

        return rgb.toCmyk(_rgb);
    },
};

export const rgb = {
    toHex(args: number[]) {
        const integer =
            ((Math.round(args[0]) & 0xff) << 16) +
            ((Math.round(args[1]) & 0xff) << 8) +
            (Math.round(args[2]) & 0xff);

        const string = integer.toString(16).toUpperCase();

        return '000000'.substring(string.length) + string;
    },
    toHsl(args: number[]) {
        const [r, g, b] = args.map((i: number) => i / 255);
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h = 0
        let s = 0

        if (max === min) {
            h = 0;
        } else if (r === max) {
            h = (g - b) / delta;
        } else if (g === max) {
            h = 2 + (b - r) / delta;
        } else if (b === max) {
            h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
            h += 360;
        }

        const l = (min + max) / 2;

        if (max === min) {
            s = 0;
        } else if (l <= 0.5) {
            s = delta / (max + min);
        } else {
            s = delta / (2 - max - min);
        }

        return [h, s * 100, l * 100];
    },
    toCmyk(args: number[]) {
        const [r, g, b] = args.map((i: number) => i / 255);
        const k = Math.min(1 - r, 1 - g, 1 - b);
        const c = (1 - r - k) / (1 - k) || 0;
        const m = (1 - g - k) / (1 - k) || 0;
        const y = (1 - b - k) / (1 - k) || 0;

        return [c * 100, m * 100, y * 100, k * 100];
    },
};
