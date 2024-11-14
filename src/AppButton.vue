<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot />
  </button>
  <!-- слот место куда текст внутри кнопки будет вставляться -->
</template>

<script>
  export default {
    emits: ['action'],
    props: {
      color: {
        type: String,
        default: '',
        validator(value) {
          return ['', 'primary', 'danger'].includes(value)
        }
      }
    }
  }
</script>

<style scoped>

</style>