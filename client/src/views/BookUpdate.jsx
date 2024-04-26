import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import NavBar from "../components/NavBar";

const BookUpdate = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [errors, setErrors] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9999/api/book/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPages(res.data.pages);
        setIsAvailable(res.data.isAvailable);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const pagesHandler = (e) => {
    setPages(e.target.value);
  };

  const isAvailableHandler = (e) => {
    setIsAvailable(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:9999/api/book/${id}`, {
        title,
        author,
        pages,
        isAvailable,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <NavBar message={`Update ${title}`} />
      <div className="container mt-4 w-25">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={titleHandler}
            />
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author Name
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={author}
              onChange={authorHandler}
            />
            {errors.author && (
              <p className="text-danger">{errors.author.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="pages" className="form-label">
              Page Count
            </label>
            <input
              type="number"
              className="form-control"
              id="pages"
              value={pages}
              onChange={pagesHandler}
            />
            {errors.pages && (
              <p className="text-danger">{errors.pages.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="isAvailable" className="form-check-label">
              Is it Available?
            </label>
            <input
              type="checkbox"
              id="isAvailable"
              className="ms-2"
              checked={isAvailable}
              onChange={isAvailableHandler}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-info text-light">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BookUpdate;
