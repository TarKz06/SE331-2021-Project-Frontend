<template>
  <h1 class="text">User List</h1>
  <q-page-container class="flex flex-center q-pa-md column q-gutter-lg">
    <UserCard v-for="users in userss" :key="users.id" :users="users" />
  </q-page-container>
  <div class="users">
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'User', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        <q-btn style="padding: 15px" color="secondary" label="Prev Page" />
        <br
      /></router-link>

      <router-link
        id="page-next"
        :to="{ name: 'User', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        <q-btn style="padding: 15px" color="secondary" label="Next Page" />
        <br
      /></router-link>
    </div>
    <div class="test2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from '@/components/UserCard.vue'
import UserService from '@/services/UserService.js'

export default {
  name: '',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    UserCard // register it as a child component
  },
  data() {
    return {
      userss: null,
      totalUsers: 0,
      keyword: null
    }
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    UserService
      .getEvents(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.userss = response.data
          comp.totalUsers = response.headers['x-total-count'] // <--- Store it
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    var queryFunction
    if (this.keyword == null || this.keyword === '') {
      queryFunction = UserService.getEvents(
        4,
        parseInt(routeTo.query.page) || 1
      )
    } else {
      queryFunction = UserService.getEventByKeyword(
        this.keyword,
        4,
        parseInt(routeTo.query.page) || 1
      )
    }
      
    queryFunction
      .then((response) => {
        this.userss = response.data
        this.totalUsers = response.headers['x-total-count']
      })
      .catch(() => {
        return{ name: 'NetworkError' }
      })
  },
  methods: {
    updateKeyword() {
      var queryFunction
      if (this.keyword === '') {
        queryFunction = UserService.getEvents(4, 1)
      } else {
        queryFunction = UserService.getEventByKeyword(this.keyword, 5, 1)
      }

      queryFunction
        .then((response) => {
          this.userss = response.data
          console.log(this.events)
          this.totalUsers = response.headers['x-total-count']
          console.log(this.totalUsers)
        })
        .catch(() => {
          return { name: 'NetworkError' }
        })
    }
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalUsers / 4)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 500px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
.text {
  font-family: 'Courier New', monospace;
  font-size: 70px;
  
}
.test2 {
  font-family: 'Courier New', monospace;
  padding: 70px;
}
</style>
