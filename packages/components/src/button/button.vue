<script lang="ts" setup>
import "./button.less";
import { computed } from "vue";
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
  