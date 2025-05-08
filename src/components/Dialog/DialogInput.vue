<script setup lang="ts">
import Dialog from 'primevue/dialog';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Dialog',
  },
});


const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <Dialog
    :visible="modelValue"
    @update:visible="(value) => emit('update:modelValue', value)"
    pt:root:class="!border-0"
    pt:mask:class="backdrop-blur-sm"
    size="lg"
    :style="{ width: '90vw', maxWidth: '600px' }"
    :header="title"
  >
    <slot />
  </Dialog>
</template>


