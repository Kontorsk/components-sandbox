<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости на {{now}}</h2>
      <span>Открыто: {{ openRate }} | <strong>Прочитано: {{ readRate }}</strong></span>
    </div>

    <app-news
    v-for="item in news"
    :key="item.id"
    :title="item.title"
    :id="item.id"
    :is-open="item.isOpen"
    :was-read="item.wasRead"
    @open-news="openNews"
    @read-news="readNews"
    @unmark="unreadNews"
    ></app-news>
    <!-- <app-news title="This is title 2"></app-news> -->
    <!-- <AppNews />  -->
    <!-- title через v-bind чтобы привязалось к атрибуту айтем -->
    <!-- @ это v-on -->
  </div>
</template>

<script>
import AppNews from './AppNews.vue';
// выше local registration
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Мы проебали',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Нихуя не работает',
          id: 2,
          isOpen: false,
          wasRead: false
        },
      ],
    }
  },
  provide() {
    return {
      title: 'Список всех новостей',
      news: this.news
    }
  }, // для доступа в дочерних файлах (больше для дальших доч ф)
  //провайд сделали как ф-ю, а не как обьект (хотя можно) чтобы иметь доступ к this
  methods: {
    openNews(data,data2) {
      this.openRate++
      console.log(data,data2);
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id) // находим по индексу
      this.news[idx].wasRead=true
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id) // тоже ищем но по другому
      news.wasRead=false
      this.readRate--
    }
  },
  components: {
    'app-news': AppNews, // тут вью понимает название app-news как и AppNews, ковычки т.к. дефиз
    // AppNews: AppNews
    // AppNews
    // можно и так и так и так, последнее сокращение предпоследнего
    // также если кебаб-кейс то обычный тег, кеммл кейс - самозакрывающийся лучше
  }
}
</script>

<style scoped>
/* scoped - стили будут прим только для текущего компонента */
  h2 {
  color: darkred
  }
</style>
