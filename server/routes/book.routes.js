import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getOneBook,
  updateOneBook,
  deleteOneBook,
} from "../controllers/book.controller.js";

const router = Router();

router.route("/book").get(getAllBooks).post(createBook);

router
  .route("/book/:id")
  .get(getOneBook)
  .put(updateOneBook)
  .delete(deleteOneBook);

export default router;
