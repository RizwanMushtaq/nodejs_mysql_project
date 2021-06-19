const express = require("express");
const bodyParser = require("body-parser");
const dbconnection = require("./app/models/db");
//importing Routes
const CustomerRoutes = require("./app/routes/customerRouter");
const UsersRoutes = require("./app/routes/usersRouter")
const TagsRoutes = require("./app/routes/tagsRouter")
const SchraubenRoutes = require("./app/routes/schraubenRouter")
const OrdersRoutes = require("./app/routes/ordersRouter")
const CategoriesRoutes = require("./app/routes/categoriesRouter")

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Connection to database just to make sure my connection is Okay
dbconnection.startConnection;

//Forward all routes 
app.use("/customer", CustomerRoutes);
app.use("/users", UsersRoutes);
app.use("/tags", TagsRoutes);
app.use("/schrauben", SchraubenRoutes);
app.use("/orders", OrdersRoutes);
app.use("/categories", CategoriesRoutes);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});