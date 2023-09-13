import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
export default defineConfig({
    build: {
        //打包后文件目录
        outDir: "dist",
        //压缩
        minify: false,
        rollupOptions: {
            //忽略打包vue文件
            external: ["vue", /\.less/],
            input: ["index.ts"],
            output: [
                {
                    format: "es",
                    entryFileNames: "[name].mjs",
                    preserveModules: true,
                    exports: "named",
                    dir: "../logui/es",
                },
                {
                    //打包格式
                    format: "cjs",
                    //打包后文件名
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "../logui/lib",
                },
            ],
        },
        lib: {
            entry: "./index.ts",
            // name: "logui",
            // fileName: "logui",
            // formats: ["es", "umd", "cjs"],
        },
    },
    plugins: [vue(),
    dts({
        entryRoot: "./src",
        outputDir: ["../logui/es/components/src", "../logui/lib/components/src"],
        //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: "../../tsconfig.json",
    }),
    {
        name: "style",
        generateBundle(config, bundle) {
            //这里可以获取打包后的文件目录以及代码code
            const keys = Object.keys(bundle);
            outputDir: ["../logui/es/components/src", "../logui/lib/components/src"]
            for (const key of keys) {
                const bundler: any = bundle[key as any];
                //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
                this.emitFile({
                    type: "asset",
                    fileName: key, //文件名名不变
                    source: bundler.code.replace(/\.less/g, ".css"),
                });
            }
        },
    },
    ],
});
