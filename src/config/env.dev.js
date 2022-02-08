const dotenv = require('dotenv');

dotenv.config();

const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const serverPort = process.env.PORT;
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;
const clientId = process.env.SERVER_APP_AUTH0_CLIENT_ID;
const clientSecret = process.env.SERVER_APP_AUTH0_CLIENT_SECRET;

if (!audience) {
  throw new Error(
    '.env is missing the definition of an AUTH0_AUDIENCE environmental variable'
  );
}

if (!domain) {
  throw new Error(
    '.env is missing the definition of an AUTH0_DOMAIN environmental variable'
  );
}

if (!serverPort) {
  throw new Error(
    '.env is missing the definition of a PORT environmental variable'
  );
}

if (!clientOriginUrl) {
  throw new Error(
    '.env is missing the definition of a APP_ORIGIN environmental variable'
  );
}

if (!clientId) {
  throw new Error(
    '.env is missing the definition of a SERVER_APP_AUTH0_CLIENT_ID environmental variable'
  );
}

if (!clientSecret) {
  throw new Error(
    '.env is missing the definition of a SERVER_APP_AUTH0_CLIENT_SECRET environmental variable'
  );
}

const clientOrigins = ['http://localhost:4040'].push(clientOriginUrl);

module.exports = {
  audience,
  domain,
  serverPort,
  clientOriginUrl,
  clientOrigins,
  clientId,
  clientSecret,
};
