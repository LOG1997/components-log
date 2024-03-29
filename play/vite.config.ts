import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
    base: '/components-log/',
    plugins: [vue(), UnoCSS(), AutoImport({
        resolvers: [ElementPlusResolver()],
    }),
    Components({
        resolvers: [ElementPlusResolver()],
    }),],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
