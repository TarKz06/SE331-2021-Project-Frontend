<template>
  <q-card class="my-card">
    <q-img :src="plist.imageUrl">
      <div class="absolute-bottom text-subtitle2 text-center">
        <router-link :to="{ name: 'userInfo', params: { id: plist.id } }">
          {{ plist.firstname }}
          {{ plist.lastname }}
        </router-link>
        <div v-if="plist.status == '1'">
          Already Inject {{ plist.status }} dose
        </div>
        <div v-else-if="plist.status == 'null'">Already Inject 0 dose</div>
        <div v-else>Already Inject {{ plist.status }} dose</div>
      </div>
    </q-img>
  </q-card>
</template>

<script>
export default {
  name: 'PatientCard',
  props: {
    plist: {
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
a:visited {
  color: rgb(70, 70, 70);
}
a:active {
  background-color: rgb(246, 241, 231);
}
</style>
