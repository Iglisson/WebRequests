import axios from "axios";

class ApiViaCep{
    
    static async getAdress(cep) {
        
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return data;

    }
}

export default ApiViaCep;