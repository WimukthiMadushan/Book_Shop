# Simple Book Management Application

This is a simple CRUD application built using React, Node.js, Express, and MySQL. It allows you to add a new book, update a book, delete a book, and display all books.

## Table of Contents

- [Book Management Application](#book-management-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)

## Features

- Add a new book
- Update an existing book
- Delete a book
- Display all books

## Prerequisites

Make sure you have the following installed:

- Node.js
- MySQL
- npm (Node Package Manager)

## Installation

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/book-management-app.git
cd book-management-app/backend
```
2. Install the dependencies:
```bash
npm install
```
3. Set up the MySQL database:
   -Create a MySQL database named book_db.
   -Use the following SQL commands to create a books table:
```bash
CREATE TABLE books (
id INT AUTO_INCREMENT PRIMARY KEY,
Title VARCHAR(255) NOT NULL,
Description TEXT,
Cover VARCHAR(255),
Price DECIMAL(10, 2)); 
4. Start the server:
```bash
node server.js
```
#With these steps, you'll have the backend server up and running, connected to your MySQL database. Next, we can move on to setting up the frontend.

### Frontend Setup
1.Clone the repository:
```bash
git clone https://github.com/yourusername/book-management-app.git
cd book-management-app/frontend
```
2.Install the dependencies:
```bash
npm install
```
3.Start the frontend development server:
```bash
npm run dev
```
Once you have completed these steps, you'll have both the backend and frontend set up for your book management application. You can then proceed to use the application to manage books.

## Usage
- Open your browser and navigate to http://localhost:3000 to view the application.
- Use the provided form to add new books.
- Click the update button on any book to modify its details.
- Click the delete button to remove a book from the list.

## API Endpoints
- GET /books: Retrieve all books.
- POST /books: Add a new book.
- PUT /books/:id: Update a book by ID.
- DELETE /books/:id: Delete a book by ID.





