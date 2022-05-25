<template>
    <input :type="type" :value="modelValue" :placeholder="placeholder"  @input="$emit('update:modelValue', $event.target.value)" >
</template>

<script>
export default {
  name: 'BaseInputField',
  props: {
    placeholder: {
      default: '',
      type: String
    },
    type: {
      default: 'text',
      type: String
    },
    modelValue: String // previously was `value: String`
  }
  // emits: ['update:modelValue']  // alternative use instade of :value="modelValue" attribute
}
</script>
