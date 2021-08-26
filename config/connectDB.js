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
  }
  catch (ex) {
    throw Error(ex)
  }
}
module.exports = connect;
