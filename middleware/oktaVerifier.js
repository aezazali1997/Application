const OktaJWTVerifier = require("@okta/jwt-verifier");

const oktajwtVerifier = new OktaJWTVerifier({
  issuer: "https://dev-87197257.okta.com/oauth2/default",
  clientId: "0oa1gnutp26pnUpn95d7",
});
const jwtVerifeir = async (request, response, next) => {
  const { authorization } = request.headers;
  if (!authorization) {
    request.isAuth = false;
    return next();
  }
  const [authType, token] = authorization.trim().split(" ");
  if (!token || token == "") {
    request.isAuth = false;
    return next();
  }
  try {
    const { claims } = await oktajwtVerifier.verifyAccessToken(
      token,
      "api://default"
    );
    if (!claims) {
      request.isAuth = false;
      return next();
    }
  } catch (error) {
    request.isAuth = false;
    return next();
  }
  request.isAuth = true;
  return next();
};
module.exports = jwtVerifeir;
