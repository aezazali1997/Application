const express = require("express");
const cors = require("cors");
const app = express();
const connect = require("./config/connectDB");
const startServer = require("./apollo/server");
const ensureAuthentication = require("./middleware/verification");

connect();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(ensureAuthentication);
startServer(app);
app.listen(port, () => {
	console.log(`app is listening on PORT ${port}`);
});
