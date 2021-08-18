const OKTA_DOMAIN = 'dev-87197257.okta.com';
const CLIENT_ID = '0oa1gnutp26pnUpn95d7';
export const CALLBACK_PATH = '/login/callback';
const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;
const SCOPES = 'openid profile email';
export const Config = {
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI,
  scopes: SCOPES.split(/\s+/),
  pkce:true
};