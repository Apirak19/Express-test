import express from "express";

const app = express();
const data = {
  data: {
    name: "john",
    age: 20,
  },
};

app.get("/profiles", (req, res) => {
  res.json(data);
});

app.listen(4000, () => {
  console.log("server start on port 4000");
});
