import axios from "axios";

export default{
    createPost: function(postData){
        return axios.post("/api/post", postData);
    }
}