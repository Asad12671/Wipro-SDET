const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Home</h1>
    <button id="alertbtn" onclick="alert('Hello')">Click Me</button>
  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
