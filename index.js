import ApiGitHub from "./src/services/ApiGitHub.js";
import ApiViaCep from "./src/services/ApiViaCep.js";
import ApiJasPlaHol from "./src/services/ApiJasPlaHol.js";

ApiViaCep.getAdress("68610000")
    .then(v => { console.log(v) })
    .catch( err => { console.error(err)});

ApiGitHub.getUserData("iglisson")
    .then( v => { console.log(v) })
    .catch( err => { console.error(err)});

ApiJasPlaHol.getUser("2")
    .then(v => { console.log(v) })
    .catch( err => { console.error(err)});