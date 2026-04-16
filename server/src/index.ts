import express from "express";
import cors from "cors";
import coffeeRoutes from "./routes/coffee-routes";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    "https://the-black-cat-brew.vercel.app",
    "http://localhost:3000"
  ]
}));

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({ message: "API working" });
});

app.use("/api/v1/coffees", coffeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});