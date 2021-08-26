const OktaJWTVerifier = require('@okta/jwt-verifier');

const oktajwtVerifier = new OktaJWTVerifier({
  issuer: "https://dev-87197257.okta.com/oauth2/default",
  clientId: "0oa1gnutp26pnUpn95d7"
})
const jwtVerifeir = async (request, response, next) => {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.status(401).send();
  }
  const [authType, token] = authorization.trim().split(' ');
  try {
    const { claims } = await oktajwtVerifier.verifyAccessToken(token, "api://default")

    if (!claims) {
      return response.status(401).send();
    }
    return next();
  } catch (error) {
    console.log(error)
    return response.status(401).send()
  }
}
module.exports = jwtVerifeir;