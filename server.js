const express = require("express");
const bodyParser = require("body-parser");
const dbconnection = require("./app/models/db");
//importing Routes
const getCustomerRoutes = require("./app/routes/getCustomer");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Connection to database just to make sure my connection is Okay
dbconnection.startConnection;

//Forward all routes for customers to 'getCustomerRoutes' router
app.use("/customer", getCustomerRoutes);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});