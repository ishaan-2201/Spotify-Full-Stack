import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectToDB from "./src/config/db.js";
import conectToCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectToDB();
conectToCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//Initializing routes

app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

app.get("/", (req, res) => {
  res.send("App is working!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
