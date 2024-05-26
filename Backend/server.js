import express from "express";
import mysql from "mysql2";
import cors from "cors";

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

app.use(express.json());
app.use(cors());

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
  const q =
    "INSERT INTO books(`Title`, `Description`, `Cover`, Price) VALUES (?)";
  const values = [
    req.body.Title,
    req.body.Description,
    req.body.Cover,
    req.body.Price,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created successfully.");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been deleted successfully.");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `Title` = ?, `Description` = ?, `Cover` = ?, `Price` = ? WHERE id = ?";
  const values = [
    req.body.Title,
    req.body.Description,
    req.body.Cover,
    req.body.Price,
  ];
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been updated successfully.");
  });
});

app.listen(3001, () => console.log("listening on port 3001"));
