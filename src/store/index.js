import { reactive } from 'vue'
export default reactive({
  flashMessage: '',
  patient: null,
  doctors: null,
  currentUser: JSON.parse(localStorage.getItem('user'))
})
