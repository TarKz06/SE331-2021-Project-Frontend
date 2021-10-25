<template>
  <h1 class="text">Patient List</h1>
  <q-page-container class="flex flex-center q-pa-md row q-gutter-lg">
    <PatientCard v-for="plist in plists" :key="plist.id" :plist="plist" />
  </q-page-container>
  <div class="plists">
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'PatientList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        <q-btn style="padding: 15px" color="secondary" label="Prev Page" />
        <br
      /></router-link>

      <router-link
        id="page-next"
        :to="{ name: 'PatientList', query: { page: page + 1 } }"
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
import PatientCard from '@/components/PatientCard.vue'
import patientService from '@/services/patientService.js'

export default {
  name: 'PatientList',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    PatientCard // register it as a child component
  },
  data() {
    return {
      plists: null,
      totalPlists: 0,
      keyword: null
    }
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    patientService
      .getEvents(5, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.plists = response.data
          comp.totalPlists = response.headers['x-total-count'] // <--- Store it
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    var queryFunction
    if (this.keyword == null || this.keyword === '') {
      queryFunction = patientService.getEvents(
        5,
        parseInt(routeTo.query.page) || 1
      )
    } else {
      queryFunction = patientService.getEventByKeyword(
        this.keyword,
        5,
        parseInt(routeTo.query.page) || 1
      )
    }
      
    queryFunction
      .then((response) => {
        this.plists = response.data
        this.totalPlists = response.headers['x-total-count']
      })
      .catch(() => {
        return{ name: 'NetworkError' }
      })
  },
  methods: {
    updateKeyword() {
      var queryFunction
      if (this.keyword === '') {
        queryFunction = patientService.getEvents(5, 1)
      } else {
        queryFunction = patientService.getEventByKeyword(this.keyword, 5, 1)
      }

      queryFunction
        .then((response) => {
          this.plists = response.data
          console.log(this.events)
          this.totalPlists = response.headers['x-total-count']
          console.log(this.totalPlists)
        })
        .catch(() => {
          return { name: 'NetworkError' }
        })
    }
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalPlists / 5)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.plists {
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
.test {
  font-family: 'Courier New', monospace;
}
.test2 {
  font-family: 'Courier New', monospace;
  padding: 70px;
}
</style>
