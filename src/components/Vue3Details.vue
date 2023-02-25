<template>
  <details id="vue3details" :open="modelValue" @click="toggleElement">
    <slot></slot>
  </details>
</template>

<script lang="ts">
import { ref, computed, PropType, defineComponent  } from 'vue';

export default defineComponent({
  name: 'Vue3Details',
  props:{
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }: any) {
    const openProp = ref<boolean>(props.modelValue);

    const isOpen = computed((): boolean => {
      return openProp.value;
    });

    const toggleElement = (): void => {
      openProp.value = !openProp.value;
      emit('update:modelValue', openProp.value);
    };

    return {
      isOpen,
      toggleElement
    }
  }
})
</script>

<style scoped>
</style>
