<template>
  <hr />
  <h4>{{ title }}</h4>
  <ul>
    <li v-for="item in news">{{ item.title }} 
      <span v-if="item.wasRead">!!!</span>
    </li>
  </ul>
</template>

<script>
  export default {
    // props: ['news'], // пропс не над т.к. инжект
    inject: ['title', 'news'], // тут указывает то что получаем из provide родительского файла
  }
</script>

<style scoped>

</style>