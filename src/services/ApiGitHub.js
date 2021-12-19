import axios from "axios";

class ApiGitHub{
    
    static async getUserData(user){

        const { data } = await axios.get(`https://api.github.com/users/${user}`);
        return data;
        
    }
    
}

export default ApiGitHub;