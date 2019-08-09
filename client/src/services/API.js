import axios from 'axios';

export default {
    findById: function (id) {
        return axios.get(`/api/books/${id}`)
    },

    scrapeCategory: function(category) {
        console.log(`api scrape hit`);
        return axios.get('/api/post/' + category)
    }
}
