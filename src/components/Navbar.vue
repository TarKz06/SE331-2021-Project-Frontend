<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#006abc"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="0">
      <router-link
        style="
          color: #4d47c;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 20px;
          font-weight: bold;
        "
        :to="{ name: 'PatientList' }"
      >
        HOME
      </router-link>
    </el-menu-item>
    <el-menu-item index="1">
      <router-link
        style="
          color: #4d47c;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 20px;
          font-weight: bold;
        "
        :to="{ name: 'About' }"
      >
        KEEMO-NUMBA-ONE
      </router-link>
    </el-menu-item>

    <el-menu-item index="2">
      <router-link
        style="
          color: #4d47c;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 20px;
          font-weight: bold;
        "
        :to="{ name: 'VaccineList' }"
      >
        VACCINE-LIST
      </router-link>
    </el-menu-item>

    <el-menu-item v-if="isAdmin" index="3">
      <router-link
        style="
          color: #4d47c;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 20px;
          font-weight: bold;
        "
        :to="{ name: 'User' }"
      >
        USER-LISTS
      </router-link>
    </el-menu-item>

    <el-menu-item v-if="isDoctor" index="4">
      <router-link
        style="
          color: #4d47c;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 20px;
          font-weight: bold;
        "
        :to="{ name: 'DoctorPlist' }"
      >
        PATIENT-LISTS
      </router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
import AuthService from '@/services/AuthService.js'

export default {
  name: 'Navbar',
  props: {
    plist: {
      type: Object,
      required: true
    }
  },
  computed: {
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    },
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    }
  }
}
</script>
<style lang="postcss" scoped></style>
