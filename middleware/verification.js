const jwtVerifeir = require('./oktaVerifier');
module.exports = (request, response, next) => {
  return jwtVerifeir(request, response, next);
}

