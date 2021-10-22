<template>
    <h2>VACCINE LIST</h2>
  <div id="q-app" style="min-height: 100vh">
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="475px"
        class="bg-grey-1 shadow-2 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div
            class="
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://www.jdrf.org/wp-content/uploads/2020/04/Moderna-Logo-1200x800-1.jpg"
            ></q-img>
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://www.fluidda.com/wp-content/uploads/2020/12/astrazeneca-logo-png-1280-1280x512-1.png"
            ></q-img>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div
            class="
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://www.clbrief.com/wp-content/uploads/2020/08/Sinopharm-Group.png"
            ></q-img>
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://www.pfizer.co.th/images/custom/pfizerlogo.svg"
            ></q-img>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div
            class="
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://logos-world.net/wp-content/uploads/2020/09/Johnson-Johnson-Logo.png"
            ></q-img>
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://www.gov.kz/uploads/2021/4/23/b08ab7393c7c99669850edac790f3f63_original.20524.jpg"
            ></q-img>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div
            class="
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://www.justestepona.com/wp-content/uploads/cache/images/coviran/coviran-2162076830.png"
            ></q-img>
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://pbs.twimg.com/media/E4c1m-2XMAc3OTK.jpg"
            ></q-img>

          </div>
        </q-carousel-slide>
         <q-carousel-slide :name="5" class="column no-wrap">
          <div
            class="
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://sputnikvaccine.com/local/templates/sputnik/img/logo_inner_new2.jpg"
            ></q-img>
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://www.clbrief.com/wp-content/uploads/2020/08/Sinopharm-Group.png"
            ></q-img>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>
