const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const orderRoute = require("./routes/orderRoutes");
const reservationRoute = require("./routes/reservationRoutes");
const dotenv = require("dotenv");
const uploadRoute = require("./routes/uploadRoutes");
const categoryRoute = require("./routes/categoryRoutes");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const MongoDBUri = "mongodb://localhost/chidesKitchen";
mongoose.connect(MongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(result => {
      console.log("MongoDB is connected")
   }).catch(err => console.log(err))
  
//ROUTES SETUP
 app.use("/api/uploads", uploadRoute );
 app.use("/api/categories", categoryRoute );
 app.use("/api/reservations", reservationRoute );
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/config/paypal", (req, res)=>{
    res.send( "AWiSOUZvkooklHyhvEKWFmNRBxrSQlEGg3WNKhZncplwJ9wCYEGoSShhLCnw0Lwwex2egFrE2bw-vCUi")
});
const __dirnames = path.resolve();
app.use('/uploads', express.static(path.join(__dirnames, '/uploads')));

app.get("/", (req, res)=>{
    res.send("Server Is Ready")
})




app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message})
})
app.listen(5000, ()=> console.log("Listening on port 5000 at http://localhost:5000"));