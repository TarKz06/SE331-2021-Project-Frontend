import apiClient from '@/services/AxiosClient.js'

export default {
  getEvents(perPage, page) {
    return apiClient.get('/users?_limit=' + perPage + '&_page=' + page)
  },
  //Add new call
  getEvent(id) {
    return apiClient.get('/users/' + id)
  },
  saveEvent(users) {
    return apiClient.post('/users', users)
  },
  getDoctor(id) {
    return apiClient.get('/set-role/' + id + '/doctors')
  },
  getPatient(id) {
    return apiClient.get('/set-role/' + id + '/plists')
  },
  getEventByKeyword(keyword, perPage, page) {
    return apiClient.get(
      'users?_limit=' + perPage + '&_page=' + page + '&title=' + keyword
    )
  },
  uploadFile(file) {
    let formData = new FormData()
    formData.append('file', file)
    return apiClient.post('/uploadFile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
