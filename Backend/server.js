import express from "express";
import mysql from "mysql2";

const app = express();
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "#WM@b2000#",
  database: "book",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created successfully.");
  });
});

app.listen(3001, () => console.log("listening on port 3001"));
