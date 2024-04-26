import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const deleteBook = () => {
    axios.delete(`http://localhost:9999/api/book/${id}`).then((res) => {
      console.log(res.data);
      navigate("/");
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9999/api/book/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <NavBar message={book.title} />
      <div className="container mt-5 w-50 p-5 fs-4 text-center border border-light-subtle">
        <h3>{book.title}</h3>
        <p>By {book.author}</p>
        <p>Page count: {book.pages}</p>
        <p className="text-success">
          {book.isAvailable ? "Available for borrowing" : "Not available"}
        </p>
        <button className="btn btn-danger" onClick={deleteBook}>
          Borrow
        </button>
      </div>
    </div>
  );
};
export default BookDetails;
