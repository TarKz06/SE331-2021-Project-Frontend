<template>
  <div v-if="GStore.plist">
    <div id="nav">
      <router-link :to="{ name: 'userInfo', params: { id } }">
        <q-btn
          style="background: goldenrod; color: white"
          glossy
          label="Patient Information"
        />
      </router-link>
      |
      <router-link :to="{ name: 'vaccineInfo', params: { id } }">
        <q-btn
          style="background: goldenrod; color: white"
          glossy
          label="Vaccine Menu"
        />
      </router-link>
      |
      <router-link :to="{ name: 'doctorComment', params: { id } }">
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
import patientService from '@/services/patientService.js'

export default {
  inject: ['GStore'],
  props: ['id'],
  data() {
    return {
      plist: null
    }
  },
  created() {
    patientService
      .getEvent(this.id)
      .then((response) => {
        this.plist = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'plist' }
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  }
}
</script>
