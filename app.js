const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./config/connectDB');
const startServer = require('./apollo/server');
const ensureAuthentication = require('./Verification/verification');

connect();
const { parsed } = require('dotenv').config();
const { PORT } = parsed
app.use(cors());
app.use(ensureAuthentication);
startServer(app);
app.listen(PORT, () => {
  console.log(`app is listening on PORT ${PORT}`)
})