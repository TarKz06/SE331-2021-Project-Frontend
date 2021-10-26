<template>
<div class="Text">
<h1>Vaccine List</h1>

  <br>
  <h4>Available vaccine.</h4>
  </div>
  <div class="q-pa-md">
    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
      <q-carousel-slide
        :name="1"
        img-src="https://www.volunteer.ie/wp-content/uploads/2017/08/pfizer-logo.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://www.jdrf.org/wp-content/uploads/2020/04/Moderna-Logo-1200x800-1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://www.moneyandbanking.co.th/uploads/article/1623126200.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://logos-world.net/wp-content/uploads/2020/09/Johnson-Johnson-Emblem.png"
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
<style>
.Text{
    color: rgba(21, 21, 20, 0.39);
}
</style>