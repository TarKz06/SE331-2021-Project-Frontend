<template>
  <q-card class="my-card">
    <q-img :src="users.profileimg">
      <div class="absolute-bottom text-subtitle2 text-center">
        <router-link :to="{ name: 'userInfo', params: { id: users.id } }">
          {{ users.firstname }}
          {{ users.lastname }}
        </router-link>
        <h2>gender : {{users.gender}}</h2>
        <h2>howtown : {{users.hometown}}</h2>
      </div>
    </q-img>
  </q-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    users: {
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
