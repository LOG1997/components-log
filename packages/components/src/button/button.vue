<script lang="ts" setup>
import { computed } from "vue";
import './button.less'
defineOptions({
    name: 'LogButton',
});

type ButtonProps = {
  type?: string;
};

const buttonProps=defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return `log-btn-${buttonProps.type}`;
});
</script>

<template>
    <button class="log-btn" :class="buttonStyle">测试按钮</button>
  </template>
  
<style scoped>
.log-btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}

.log-btn.log-btn-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
}
</style>