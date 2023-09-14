<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { MeshGradient } from "@logui/components";
// import { MeshGradient } from '../../../../packages/logui/es/components'
import Button from './components/Button/button.vue'
import { getRandomColor } from '@/utils/color'

const colorRef = ref()
const color = ref('#bd93f9')
const isAnimation = ref(true)

const generateColor = () => {
    color.value = getRandomColor()
    console.log('😏color.value:', color.value)
    colorRef.value.style.backgroundColor = color.value
}
const skipGithub = () => {
    window.open('https://github.com/LOG1997/components-log', '_blank')
}
onMounted(() => {
    color.value = getRandomColor()
    colorRef.value.style.backgroundColor = color.value
})
</script>
<template>
    <div class="flex flex-col items-center gap-3 text-center text-gray-50/80">
        <div class="title py-12 text-5xl">Mesh Gradient</div>
        <div class="desc py-3 text-lg <md:px-12">A Vue3's component for generating CSS Mesh Gradients</div>

        <div class="option flex gap-6">
            <Button @click="generateColor">
                <template v-slot:color>
                    <div ref="colorRef" class="w-full h-full">
                    </div>
                </template>
                Try It
            </Button>
            <Button @click="skipGithub">
                <template v-slot:color>
                    <div class="i-logos:github-icon"></div>
                </template>
                Github
            </Button>
        </div>
        <div class="mesh-box shadow-xl md:w-90 md:h-90 <md:w-2/3 <md:aspect-ratio-square">
            <MeshGradient :base-color="color" mode="monochromatic" :animation="isAnimation"></MeshGradient>
        </div>
        <div class="info text-gray-50 pt-12">
            <el-switch v-model="isAnimation" active-text="animation" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" inactive-text="static" inline-prompt />
        </div>
    </div>
</template>
  
<style  scoped></style>