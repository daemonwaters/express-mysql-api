const express = require("express");
const { connect } = require("./config/db.config");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 6500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect();

app.use("/employee", require("./routes/employee"));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
