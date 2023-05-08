import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '913421875f304a5eb19360a4362c5d2e'
    }
})