<template>
  <Navbar />
  <q-layout view="lHh Lpr lFf">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <div id="nav">
      <nav class="navbar navbar-expand">
        <ul v-if="!GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
              <font-awesome-icon icon="user-plus" /> Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" /> Login
            </router-link>
          </li>
        </ul>

        <ul v-if="GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ GStore.currentUser.name }}
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout">
              <font-awesome-icon icon="sign-out-alt" /> LogOut
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- new element -->
    <router-view />
    <Footer />
  </q-layout>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import AuthService from '@/services/AuthService.js'

export default {
  inject: ['GStore'],
  components: {
    Navbar,
    Footer
  },
  computed: {
    currentUser() {
      console.log(localStorage.getItem('user'))
      return localStorage.getItem('user')
    },
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    }
  },
  methods: {
    logout() {
      AuthService.logout()
      this.$router.go()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6e7582;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-color: #e2e7f0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
