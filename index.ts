import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/")));

// Serve index.html as the default file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});