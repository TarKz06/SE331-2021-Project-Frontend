import apiClient from '@/services/AxiosClient.js'

export default {
    getDoctors(perPage, page) {
        return apiClient.get('/doctors?_limit=' + perPage + '&_page=' + page)
    },
    //Add new call
    getDoctor(id) {
        return apiClient.get('/doctors/' + id)
    },
    getPatientInCare(id){
        return apiClient.get('/patients-in-care/' + id)
    },
    saveDoctor(plist) {
        return apiClient.post('/doctors', plist)
    },
    getDoctorByKeyword(keyword, perPage, page) {
        return apiClient.get(
        'doctors?_limit=' + perPage + '&_page=' + page + '&title=' + keyword
        )
    }
}