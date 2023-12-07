import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

function CoinDisplay({coin}) {
  const [coins, setCoins] = useState([]);

  async function getCoins() {
    const response = await fetch("https://api.coinlore.net/api/tickers/");
    const data = await response.json();
    setCoins(data.data);
    // console.log(data.data);
  }

  useEffect(()=>{
    getCoins();
  },[])

  return (
    <div className="home">
      <h1>Top 20 Cryptos</h1>
      <div className="coins-container">
        {
          coins.map((coin, index)=>{
            if(index < 20) {
              return (
                <CoinCard coin={coin} key={coin.id}/>
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default CoinDisplay;