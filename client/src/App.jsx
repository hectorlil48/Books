import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import BookForm from "./views/BookForm";
import BookDetails from "./views/BookDetails";
import BookUpdate from "./views/BookUpdate";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<BookForm />} />
          <Route path="/books/:id/details" element={<BookDetails />} />
          <Route path="/books/:id/update" element={<BookUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
