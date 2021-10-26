<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Admin</th>
          <th class="text-right">First Name</th>
          <th class="text-right">Last Name</th>
          <th class="text-right">Gender</th>
          <th class="text-right">Hometown</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td class="text-right"></td>
          <td class="text-right">{{ users.firstname }}</td>
          <td class="text-right">{{ users.lastname }}</td>
          <td class="text-right">{{ users.gender }}</td>
          <td class="text-right">{{ users.hometown }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
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
