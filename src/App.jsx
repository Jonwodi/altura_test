import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";

function App() {
  // Wallet address
  const address = "elanhalpern.eth";

  // Alchemy URL
  const baseURL = `${import.meta.env.VITE_API_URL}`;
  const url = `${baseURL}/getNFTs/?owner=${address}`;

  const displayNfts = axios.get(`${url}`, {
    withCredentials: false,
  });

  // Make the request and print the formatted response:
  async function fetchNfts() {
    console.log((await displayNfts).data);
  }
  fetchNfts();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
