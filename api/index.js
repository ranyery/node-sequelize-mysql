const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send({ message: "Pong!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}: http://localhost:${PORT}`);
});
