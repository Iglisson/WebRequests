import ApiGitHub from "./src/services/ApiGitHub.js";
import ApiViaCep from "./src/services/ApiViaCep.js";
import ApiJasPlaHol from "./src/services/ApiJasPlaHol.js";
import ApiCotacaoDolar from "./src/services/ApiCotacaoDolar.js";

// Chamada
// ApiViaCep.getAdress("68610000")
//     .then(v => { console.log(v) })
//     .catch( err => { console.error(err)});

// Chamada
// ApiGitHub.getUserData("iglisson")
//     .then( v => { console.log(v) })
//     .catch( err => { console.error(err)});

// Chamada
// ApiJasPlaHol.getUser("2")
//     .then(v => { console.log(v) })
//     .catch( err => { console.error(err)});

// Chamada
ApiCotacaoDolar.getValue()
    .then(v => console.log(`Compra: R$ ${v.bid} | Venda: R$ ${v.ask}`))
    .catch( err => console.error(err))