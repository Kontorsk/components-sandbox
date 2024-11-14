<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <!-- <button class="btn" @click="open">
      {{ isNewsOpen ? 'Закрыть' : 'Открыть'}}
    </button> было, без компонента, и стало:-->
    <!-- text байдним т.к. внутри джава скрипт, @action т.к. там эмит на клик -->
    <app-button @action="open">
    {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
    <!-- тут калар можно не байдить, а если байндить то над брать в '' -->
    <app-button 
    color="danger" 
    v-if="wasRead" 
    @action="$emit('unmark', id)" 
    >Отметить не прочитанной</app-button>
        <!-- если только эмит то можно так и без зисов, т.к. работаем в шаблоне -->
    <div v-if="isNewsOpen">
      <hr />
    <p>Описание типо</p>
    <app-button 
    v-if="!wasRead" 
    color="primary" 
    @action="mark" 
    >Прочесть новость</app-button>

    <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
  import AppButton from './AppButton.vue';
  import AppNewsList from './AppNewsList.vue';
  export default {
    // props: ['title'],
    // через пропс обьявляем ожидаемые переменные которые тоже проксятся, совмещаются с data
    props: {
      wasRead: Boolean,
      title: {
        type: String,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      }, // Proxy, array, promise; тут говорим что в поле мы ожидаем булеан чтобы не было проблем
      isOpen: {
        type: Boolean,
        required: false, // явл ли парам обязательным
        default: false,  // когда рекваед фолс, открывается дефолт
        // validator(value) {
        //   console.log(value);
        //   return value === true || value === false // проверка на буллеан, хотя мы тип булеан создали
        // } // с помощью данной ф-ии можем валигировать вход св-во, если return true то валидация прошла усп и всё ок, если фолс то нет 
      }, // кеммл кейс в js всегда, но в хтмл кебабкейс
    },
    // emits: [
    // 'open-news'
    // ],
    emits: { // для удобства чтобы видеть какие компоненты эмитятся наверх
      'open-news': null,
      unmark: null,
      'read-news'(id) {
        if (id) { // проверка отправляются ли данные, валидируем
          return true
        }
        console.warn('нет параметра ид для эмит ридньюс')
        return false
      }
    },
    data() {
      return {
        isOpen: false, // эт над удалить но не робит
        isNewsOpen: this.isOpen // сделали чтобы не менять исопен и чтобы род комп не знал
      }
    },
    methods: {
      open() {
        this.isNewsOpen = !this.isNewsOpen // лучше отдельно в дата задать и потом уже в методы, а не isOpen и isOpen
        if (this.isNewsOpen) {
        this.$emit('open-news', 54, 24)
        }
      },
      mark() {
        this.isNewsOpen = false
        this.$emit('read-news', this.id)
      },
      // unmark() {
      //   this.$emit('unmark', this.id)
      // } // для такого случая можно указать сразу в шаблоне короче
    },
    components: {
      AppButton,
      AppNewsList
    }
  }
</script>