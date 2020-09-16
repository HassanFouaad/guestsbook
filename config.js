const mongoose = require("mongoose");
mongoose.connect(
  process.env.DATABASEURL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, connected) => {
    if (err) {
      console.error(err);
    }
    console.log(`MongoDB has been connected to the server`);
  }
);
