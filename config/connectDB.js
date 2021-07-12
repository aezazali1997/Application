const mongoose = require('mongoose');
const dbConstants = require('../constants/db.constants');
const connect = async () => {
  try {
    const con = await mongoose.connect(dbConstants.mongoDB.connectionStr, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log('Connected to db ', con.connection.host)
  }
  catch (ex) {
    console.log('Error', ex)
  }
}
module.exports = connect;
