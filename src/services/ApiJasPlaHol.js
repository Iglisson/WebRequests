import axios from "axios";

class ApiJasPlaHol{

    static async getUser(id){
        
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return data;
    }

}

export default ApiJasPlaHol;