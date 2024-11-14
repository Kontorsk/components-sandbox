<template>
  <div class="container pt-1">
    <div class="card">
    <h2>Slots</h2>
    </div>

    <app-list>
      <!-- <template #default="slotProps">
      <span style="color: #c25205;">
        <strong>{{slotProps.idx+1+')' }}</strong>
        Item: {{ slotProps.iter }}
      </span>
      </template> -->
      <!-- можно и так как выше+ -->
      <template #default="{idx, iter}">
      <span style="color: #c25205;">
        <strong>{{idx+1+')' }}</strong>
        Item: {{ iter }}
      </span>
      </template>
    </app-list>

    <app-block>
      <p>Это текст нового блока</p>
      <template #header>
        <h3>Это заголовок</h3>
      </template>
      <!-- v-slot: - сокращение решётка -->

      <template v-slot:footer>
        <hr />
        <small>Это footer</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock.vue';
import AppList from './AppList.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    AppBlock,
    AppList
  }
}
</script>

<style scoped>

</style>
