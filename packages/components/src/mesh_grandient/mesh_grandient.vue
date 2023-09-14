<script setup lang="ts">
import {ref,onMounted,toRefs, type PropType,watchEffect,onUnmounted} from 'vue'
import {generateGrandients,ModeSelection} from '@logui/utils'
import './mesh.less'

defineOptions({
    name: 'LogMesh',
});
type MeshProps={
    baseColor:string
    speed:number
    mode:ModeSelection
    animation:boolean
}
const props=withDefaults(defineProps<MeshProps>(),{
    baseColor:'#bd93f9',
    speed:0.1,
    mode:'analogous',
    animation:true
})
const localProps=toRefs(props)
const grandientBox = ref();
let done = ref(false)
const positionInit=ref<number[][]>([])
const previousPositionInit=ref<number[][]>([])
const getGrandient=(color:number[]|string=[])=>{
    const css=grandientBox.value.style;
    const {grandients,baseColor,position,previousPosition}=generateGrandients(color,positionInit.value,previousPositionInit.value,localProps.speed.value,localProps.mode.value);
    if(position.length>=1){
        positionInit.value=position;
        previousPositionInit.value=previousPosition;
    }
    css.backgroundImage=grandients;
    css.backgroundColor=baseColor;
}

const step=async()=>{
    getGrandient(localProps.baseColor.value)
    if (localProps.animation.value&&!done.value) {
      requestAnimationFrame(step);
    }
}
onMounted(async()=>{
     requestAnimationFrame(step)
})
onUnmounted(()=>{
    done.value=true
})
watchEffect(()=>{
    if(localProps.animation.value==true){
        requestAnimationFrame(step)
    }
   else if(localProps.baseColor.value){
        requestAnimationFrame(step)
    }
})

</script>

<template>
 <div ref="grandientBox" class="grandientBox"></div>
</template>
