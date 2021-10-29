import { reactive } from 'vue'
export default reactive({
  flashMessage: '',
  plist: null,
  doctor: null,
  currentUser: JSON.parse(localStorage.getItem('user'))
})
