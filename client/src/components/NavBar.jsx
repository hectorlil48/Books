import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { message } = props;
  return (
    <div className="container-fluid d-flex justify-content-between align-items-center bg-body-secondary border border-4 border-dark p-4 px-5">
      <div className="d-flex flex-column gap-3">
        <Link to={"/"} className="btn btn-primary">
          Catalog
        </Link>
        <Link to={"/create"} className="btn btn-primary">
          Add Book
        </Link>
      </div>
      <h1>{message}</h1>
    </div>
  );
};

export default NavBar;
