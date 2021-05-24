const express       = require("express");
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
const app           = express();
const PORT          = 5000;

app.use(bodyParser.json());

// require("./models/Pet")(app);
// require("./routes/petRoutes")(app);

app.listen(PORT, () => {
  console.log(`Server running`);
});