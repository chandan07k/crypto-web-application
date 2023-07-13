import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinDetailItem from "../CoinDetailItem";

function CoinDetail() {
  const [coin, setcoin] = useState({});
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const coin = await response.json();
      setcoin(coin);
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <CoinDetailItem coin={coin} />
    </>
  );
}

export default CoinDetail;
