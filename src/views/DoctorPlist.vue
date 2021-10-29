<template>
  <h1 class="text">Your Patients Lists</h1>
  <q-page-container class="flex flex-center q-pa-md row q-gutter-lg">
    <DoctorCard v-for="plist in doctors" :key="plist.id" :doctor="plist" />
  </q-page-container>
  <div class="plists">
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'DoctorPlist', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        <q-btn style="padding: 15px" color="secondary" label="Prev Page" />
        <br
      /></router-link>

      <router-link
        id="page-next"
        :to="{ name: 'DoctorPlist', query: { page: page + 1 } }"
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
import DoctorCard from '@/components/DoctorCard.vue'
import DoctorService from '@/services/DoctorService.js'
import { watchEffect } from '@vue/runtime-core'

export default {
    inject:['GStore'],
    name: 'DoctorPlist',
    props: {
        page: {
        type: Number,
        required: true
        }
    },
    components: {
        DoctorCard // register it as a child component
    },
    data() {
        return {
        doctors: null,
        totalPlists: 0,
        keyword: null
        }
    },
    // eslint-disable-next-line no-unused-vars
    created() {
        watchEffect(() => {
            DoctorService
            .getPatientInCare(this.GStore.currentUser.id)
            .then((response) => {
                this.doctors = response.data.ownPatients
                this.totalPlists = response.headers['x-total-count'] // <--- Store it
                console.log(this.doctors)
            })
            .catch(() => {
                console.log('err')
            })
        })
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
