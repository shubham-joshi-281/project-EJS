import express from "express";
import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/userroutes.js";
const port = process.env.PORT || "2000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDB(DATABASE_URL);
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/",userRoutes)

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
