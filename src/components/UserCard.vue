<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-center">First Name</th>
          <th class="text-center">Last Name</th>
          <th class="text-center">Gender</th>
          <th class="text-center">Hometown</th>
          <th class="text">Profile</th>
          <th class="text">Change Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">{{ users.id }}</td>
          <td class="text-center">{{ users.firstname }}</td>
          <td class="text-center">{{ users.lastname }}</td>
          <td class="text-center">{{ users.gender }}</td>
          <td class="text-center">{{ users.hometown }}</td>
          <th class="text-center">
            <router-link :to="{ name: 'userInfo', params: { id: users.id } }">
              <q-btn push color="primary">
                <img
                  class="icon"
                  src="https://cdn-icons.flaticon.com/png/512/1481/premium/1481160.png?token=exp=1635275321~hmac=c023bed76d615bdc1859c971339c97dd"
                />
              </q-btn>
            </router-link>
          </th>
          <td class="text-center">
            <div class="q-pa-md">
              <q-btn-dropdown color="primary" label="Select Role">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Doctor</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>
                          Patient
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </td>
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
  },
  setup () {
    return {
      onItemClick () {
         console.log('Clicked on an Item')
      }
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

.text-center {
  width: 170px;
}
thead {
  background-color: #ffc107;
}
.q-btn {
  text-align: center;
}
.icon {
  width: 15px;
  height: 20px;
}
</style>
