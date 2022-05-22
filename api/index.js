// required code for start
const express = require("express"); //Express
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

// In order to pass JSON files
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("success")).catch((error) => console.log(error));



app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running");
});

