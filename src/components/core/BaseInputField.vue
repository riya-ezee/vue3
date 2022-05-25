<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    :modelValue="quantity"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border-2 rounded"
  />
</template>

<script setup>
defineProps({
  type: String,
  placeholder: String,
  modelValue: Number,
})

defineEmits(["update:modelValue"]);
</script>