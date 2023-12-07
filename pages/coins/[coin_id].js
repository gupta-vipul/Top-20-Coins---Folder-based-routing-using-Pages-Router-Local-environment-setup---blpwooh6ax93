import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function CoinDetail() {
  const [coin, setCoin] = useState(null);
  const {query} = useRouter();
  // console.log(query);

  async function getCoinDetails(id) {
    const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${id}`);
    const data = await response.json();
    setCoin(data[0]);
    // console.log(data);
  }
  useEffect(()=>{
    getCoinDetails(query.coin_id); 
  },[]);
  return (
    <div className="coin-detail">
      <div className="name-symbol">
        <h1 className="name">{coin?.name}</h1>
        <h2 className="symbol">({coin?.symbol})</h2>
      </div>
      <div className="market-description">
        <p className="coin-rank">Rank: {coin?.rank}</p>
        <p className="coin-price">Price: ${coin?.price_usd}</p>
        <p className="coin-market-cap">Market Cap: ${coin?.market_cap_usd}</p>
        <p className="coin-total-supply">Total Supply: {coin?.tsupply}</p>
        <p className="coin-max-supply">Max Supply: {coin?.msupply ? coin.msupply : "N/A"}</p>
      </div>
    </div>
  );
}

export default CoinDetail;
