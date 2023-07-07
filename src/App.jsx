import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import CountryDetails from "./pages/country-detail/CountryDetails";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="/:code" element={<CountryDetails />} />
      </Routes>
    </main>
  );
}

export default App;
