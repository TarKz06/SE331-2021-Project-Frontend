<template>
  <p>Regstration form here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['patient'],
  inject: ['GStore'], // <---- Inject the Global Store
  methods: {
    register() {
      // Assuming successful API call to register them
      this.GStore.flashMessage =
        'You are successfully registered for ' + this.patient.firstname
      setTimeout(() => {
        // After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'Login',
        params: { id: this.patient.id }
      })
    }
  }
}
</script>