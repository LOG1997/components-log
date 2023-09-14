# 😬Mesh Gradient

> 该项目受启发于[cristicretu/meshgrad](https://github.com/cristicretu/meshgrad)。

该组件为适用于Vue3的动态混合渐变背景组件。

[demo地址](https://log1997.github.io/components-log/#/)

## 使用

* 安装
    npm
    ```bash
    npm install vue-mesh-gradient
    ```
    pnpm
    ```bash
    pnpm install vue-mesh-gradient
    ```

* 使用
    ```ts
    <script setup lang="ts">
    import { Mesh } from 'components-log';
    </script>

    <template>
        <Mesh></Mesh>
    </template>
    ```

可传递的参数有base-color(基础颜色)、mode(生成颜色的规则)、animation(是否有动画)