import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import CountryDetails from "./pages/country-detail/CountryDetails";

const App = () => {
  return (
    <main className="main-container">
      <Header/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:code" element={<CountryDetails />} />
      </Routes>
    </main>
  );
}

export default App;
