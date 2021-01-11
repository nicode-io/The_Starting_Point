// CORE modules
const path = require("path");
// 3rd-Party Packages
const express = require("express");
const bodyParser = require("body-parser");

// Create express app
const app = express();

// Import Express routers
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Parse request body (req.body)
app.use(bodyParser.urlencoded({ extended: false })); // Body Parser manage the 'next' operation

// Server static files
app.use(express.static(path.join(__dirname, "public")));

// Use Express routers
app.use("/admin", adminRoutes); // Wil add /admin to paths defined in the router
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000);
