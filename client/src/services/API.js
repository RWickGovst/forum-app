import axios from 'axios';

export default {
    findById: function (id) {
        return axios.get(`/api/books/${id}`)
    } 
}
