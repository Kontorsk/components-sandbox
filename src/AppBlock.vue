<template>
  <div class="card">
    <slot name="header"></slot>
    <slot>No text</slot>
    <!-- выше нейм - дефолт по умолч -->
    <div v-if="$slots.footer">
    <slot name="footer"></slot>
    </div> 
    <!-- если футера нет то пустой див будет, можно избежать через v-if и через $slots. -->
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$slots)
    }
  }
</script>

<style scoped>

</style>