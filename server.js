import express from "express";
import methodOverride from "method-override";
import morgan from "morgan";
import "./db/connection.js";


import fruitsRouter from "./controllers/fruits.js";

const PORT = process.env.PORT || "3000";
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.set('view engine', 'ejs');

//routes
app.use("/", fruitsRouter);


app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
});

