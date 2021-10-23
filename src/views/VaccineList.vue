<template>
  <h1>VACCINE LIST</h1>
  <div class="q-pa-md">
    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
      <q-carousel-slide
        class="img"
        :name="1"
        img-src="http://www.efinancethai.com/news/picture/2021/6/25/T/5870829.jpg"
      />
      <q-carousel-slide
        class="img"
        :name="2"
        img-src="https://www.pharmaceuticalprocessingworld.com/wp-content/uploads/2020/07/Moderna-Logo.jpg"
      />a
      <q-carousel-slide
        class="img"
        :name="3"
        img-src="https://bcan.org/wp-content/uploads/2021/04/AstraZeneca-Logo.png"
      />
      <q-carousel-slide
        class="img"
        :name="4"
        img-src="https://sputnikvaccine.com/local/templates/sputnik/img/logo_inner_new2.jpg"
      />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    return {
      slide: ref(1)
    }
  }
}
</script>

