<template>

  <q-card class="my-card">
    <q-img :src="doctor.profileimg">
      <div class="absolute-bottom text-subtitle2 text-center">
        <router-link :to="{ name: 'userInfo', params: { id: doctor.id } }">
          {{ doctor.fname }}
          {{ doctor.lname }}
        </router-link>
    </q-img>
  </q-card>
</template>

<script>
export default {
  name: 'PatientCard',
  props: {
    doctor: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.my-card {
  width: 350px;
}
a:link {
  color: rgb(233, 230, 230);
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
a:visited{
    color: rgb(70, 70, 70);
}
a:active {
  background-color: rgb(246, 241, 231);
}
</style>
