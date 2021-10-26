<template>
  <div v-if="GStore.plist">
    <div id="nav">
      <router-link :to="{ name: 'userInfo'}">
        <q-btn
          style="background: goldenrod; color: white"
          glossy
          label="Patient Information"
        />
      </router-link>
      |
      <router-link :to="{ name: 'vaccineInfo'}">
        <q-btn
          style="background: goldenrod; color: white"
          glossy
          label="Vaccine Menu"
        />
      </router-link>
      |
      <router-link :to="{ name: 'doctorComment'}">
        <q-btn
          style="background: goldenrod; color: white"
          glossy
          label="Doctor Menu"
        />
      </router-link>
    </div>
    <router-view :plist="GStore.plist" />
  </div>
</template>

<script>
export default {
  inject: ['GStore']
}
</script>
