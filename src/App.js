import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./components/MyContext";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";


export default function App() {
  const endpoint = "/fotos.json";
  const [data, setData] = useState([]);
  const estados = { data, setData }

  useEffect(() => {
    consultaApi()
  }, [])

  const consultaApi = async () => {
    const response = await fetch(endpoint);
    const photosApi = await response.json()
    setData(photosApi.photos)
  }

  return (
    <div className="App">
      <MyContext.Provider value={estados}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
