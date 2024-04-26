import NavBar from "../components/NavBar";
import BookDisplay from "./BookDisplay";

const Home = () => {
  return (
    <div>
      <NavBar message="Book Catalog" />
      <BookDisplay />
    </div>
  );
};

export default Home;
