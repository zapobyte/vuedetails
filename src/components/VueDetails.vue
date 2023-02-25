<template>
  <details :class="classList" id="vue-details" :open="modelValue" @click="toggleElement">
    <slot></slot>
  </details>
</template>

<script lang="ts">
import { ref, computed, PropType, defineComponent  } from 'vue';

export default defineComponent({
  props:{
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    classes: {
      type: Array as PropType<string[]>,
      default: []
    }
  },
  emits: ['click'],
  setup(props, { emit }: any) {
    const openProp = ref<boolean>(props.modelValue);

    const isOpen = computed((): boolean => {
      return openProp.value;
    });

    const classList = computed(() : string[] => {
      return props.classes;
    });
    const toggleElement = (): void => {
      openProp.value = !openProp.value;
      emit('click');
    };

    return {
      classList,
      isOpen,
      toggleElement
    }
  }
})
</script>

<style scoped>
</style>
