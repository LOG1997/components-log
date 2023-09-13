<script setup lang="ts">
import {ref,onMounted,toRefs, type PropType,watchEffect,onUnmounted} from 'vue'
import {generateGrandients,type ModeSelection} from '../../../utils/mesh'
defineOptions({
    name: 'LogMesh',
});
const props=defineProps({
    baseColor:{
        type:String,
        default:'#bd93f9'
    },
    speed:{
        type:Number,
        default:0.1
    },
    mode:{
        type:Object as PropType<ModeSelection>,
        default:'analogous'
    },
    animation:{
        ttype:Boolean,
        default:true
    }
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
        console.log('😔localProps.animation.value:',localProps.animation.value)
        requestAnimationFrame(step)
    }
   else if(localProps.baseColor.value){
        requestAnimationFrame(step)
    }
})

</script>

<template>
 <div ref="grandientBox" class="grandientBox w-full h-full min-w-32 min-h-32"></div>
</template>

<style scoped>
    .grandientBox{
        width:100%;
        height:100%;
        min-width:32px;
        min-height:32px;
    }
</style>
