import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Browser Router from react-router-dom
// Importing Routes
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Movie from "./routes/Movie/movie";
import SingleMovie from "./routes/Movie/singleMovie";
import CreateMovie from "./routes/Movie/createMovie";
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
          <Route path="/createMovie/" element={<CreateMovie />} />
          <Route path="/movies/:slug" element={<SingleMovie />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
