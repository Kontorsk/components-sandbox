<template>
  <div class="container pt-1">
    <div class="card">
    <h2>Динамические и асинхронные компоненты</h2>

    <app-button 
      :color="active === 'one' ? 'primary' : '' "
      @action="active = 'one'"
    >One</app-button>
    <app-button 
      :color="active === 'two' ? 'primary' : '' "
      @action="active = 'two'"
    >Two</app-button>

    </div>  
    <app-text-one v-if="active === 'one'"></app-text-one>
    <app-text-two v-if="active === 'two'"></app-text-two>

    <component :is="'AppTextOne'"></component>
    <!-- выше компонент который через :is вызывает нужный компонент -->
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppTextOne from './AppTextOne.vue';
import AppTextTwo from './AppTextTwo.vue';



export default {
  data() {
    return {
      active: 'one' // two
    }
  },
  components: {
    AppButton, AppTextOne, AppTextTwo
  }
}
</script>

<style scoped>

</style>
