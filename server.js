import express from 'express'
import cors from 'cors'
import "dotenv/config";
import connectDB from './config/mongodb.js'
import menuRoutes from "./Routes/menuRoutes.js";
import menuItemRoutes from "./Routes/menuItemRoutes.js"

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();


app.use("/api/menus", menuRoutes); 
app.use("/api/menu-items", menuItemRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));