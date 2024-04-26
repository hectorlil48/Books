import Book from "../models/book.model.js";

// create new
async function createBook(req, res) {
  try {
    const newBook = await Book.create(req.body);
    res.json(newBook);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// Get all
async function getAllBooks(req, res) {
  try {
    const allBooks = await Book.find(); // here is our query to find Users
    res.json(allBooks);
  } catch (error) {
    console.log(error);
    res.status(400).json(error); // here is our error response
  }
}

// Get One
async function getOneBook(req, res) {
  try {
    const foundBook = await Book.findById(req.params.id);
    res.json(foundBook);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// Update
async function updateOneBook(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedBook);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// Delete
async function deleteOneBook(req, res) {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
export { createBook, getAllBooks, getOneBook, updateOneBook, deleteOneBook };
