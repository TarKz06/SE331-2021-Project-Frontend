import apiClient from '@/services/AxiosClient.js'

export default {
  getEvents(perPage, page) {
    return apiClient.get('/plists?_limit=' + perPage + '&_page=' + page)
  },
  //Add new call
  getEvent(id) {
    return apiClient.get('/plists/' + id)
  },
  saveEvent(plist) {
    return apiClient.post('/plists', plist)
  },
  getEventByKeyword(keyword, perPage, page) {
    return apiClient.get(
      'plists?_limit=' + perPage + '&_page=' + page + '&title=' + keyword
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
