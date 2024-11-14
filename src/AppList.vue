<template>
  <div class="card">
    <ul>
      <li v-for="(item, i) in 5">
        <slot :iter="item" :idx="i"></slot>
        <!-- выше забайндили под произвольным назв iter-->
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>