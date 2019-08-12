import axios from "axios";

export default {
    //this route saves to the DB
    createPost: function(postData){
        return axios.post("/api/post", postData);
    },
    // //does the scraping
    scrapeCategory: function(scrapeData){
        return axios.get("/api/post/technology", scrapeData);
    }

}


