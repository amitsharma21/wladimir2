import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import baseEstablishmentRoutes from "./routes/baseEstablishments.js"

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
mongoose.set('strictQuery', true);

app.use("/baseEstablishments", baseEstablishmentRoutes);
app.get("/", (req, res) => {
    res.send("Hello to my memories Project");
});


const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.CONNECTION_URL).then(()=>{console.log(`server running on port: ${PORT}`)})
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on the port ${PORT}`));
  })
  .catch((error) => console.log(error.message));
