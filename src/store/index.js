import { reactive } from 'vue'
export default reactive({
  flashMessage: '',
  plist: null,
  doctors: null,
  currentUser: JSON.parse(localStorage.getItem('user'))
})
