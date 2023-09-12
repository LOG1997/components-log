<script setup lang="ts">
import {ref,onMounted,toRefs} from 'vue'
import {generateGrandients} from '../../../utils/mesh'
defineOptions({
    name: 'LogMesh',
});
const props=defineProps({
    baseColor:{
        type:String,
        default:'#60DE28'
    },
    speed:{
        type:Number,
        default:0.2
    }
})
const localProps=toRefs(props)
const grandientBox = ref();
let start:number|undefined, previousTimeStamp:number;
let done = false;
const positionInit=ref<number[][]>([])
const previousPositionInit=ref<number[][]>([])
const getGrandient=(color:number[]|string=[])=>{
    const css=grandientBox.value.style;
    const {grandients,baseColor,position,previousPosition}=generateGrandients(color,positionInit.value,previousPositionInit.value,localProps.speed.value);
    if(position.length>=1){
        positionInit.value=position;
        previousPositionInit.value=previousPosition;
    }
    css.backgroundImage=grandients;
    css.backgroundColor=baseColor;
}

const step=async(timeStamp:number)=>{
    if (start === undefined) {
    start = timeStamp;
  }

  if (previousTimeStamp !== timeStamp) {
    getGrandient(localProps.baseColor.value)
  }
    if (!done) {
      requestAnimationFrame(step);
    }
}
onMounted(async()=>{
     requestAnimationFrame(step)
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
