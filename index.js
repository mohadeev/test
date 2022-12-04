import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log("users");
  res.json({ data: "DF" });
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("app running on Port ", "9000");
});

///
