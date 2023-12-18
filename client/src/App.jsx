import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Browser Router from react-router-dom
// Importing Routes
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Movie from "./routes/Movie/movie";
import Header from "./components/Header";
import Footer from "./components/Footer";

// App function
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Paths for NavBar */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
        < Footer />
      </Router>
    </>
  );
}

export default App;
