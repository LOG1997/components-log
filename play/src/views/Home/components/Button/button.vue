<script setup lang='ts'>
</script>

<template>
    <div
        class="max-w-32 h-10 bg-gray-600/60 rounded-lg shadow-xl flex justify-start gap-6 items-center px-5 cursor-pointer text-gray-100/80 select-none hover:bg-gray-600/80 hover:text-gray-50/100 hover:shadow-xl">
        <div class="h-1/2 aspect-ratio-square flex justify-center items-center">
            <slot name="color"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style lang='scss' scoped></style>