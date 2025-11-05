import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 10000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend build files
app.use(express.static(path.join(__dirname, "../dist/public")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
