import React, { useState, useEffect } from "react";
import Coins from "./components/Coins";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import CoinDetail from "./components/pages/CoinDetail";

const GET_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

function App() {
  const [coins, setCoins] = useState([]);
  console.log(coins);

  // Fetching request

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Coins coins={coins} /> },
        { path: ":coinId", element: <CoinDetail /> },
      ],
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(GET_URL);
      const data = await response.json();
      setCoins(data);
    }

    try {
      fetchData();
    } catch (error) {
      console.error("oh😒😒", error);
    }
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
