import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookDisplay = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/api/book")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <table className="table table-primary text-center">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Page Count</th>
            <th scope="col">Available</th>
            <th scope="col">Book Details Page</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
              <td>
                {book.isAvailable ? "Yes" : "No"} |{" "}
                <Link to={`/books/${book._id}/update`}>Edit</Link>
              </td>
              <td>
                <Link
                  to={`/books/${book._id}/details`}
                  className="btn btn-success "
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookDisplay;
