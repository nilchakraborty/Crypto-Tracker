import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TableContent from "./table/TableContent";
import { AiOutlineStock } from "react-icons/ai";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      setLoading(false);
    };
    fetchCoins();
  }, []);
  console.log(coins);
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(filteredCoins);
  return (
    <div className="container coin-app ">
      <h1 className="main-heading ">
        Crypto Tracker
        <AiOutlineStock fill="#9331ee" />
      </h1>
      <div className="coin-search">
        {/* <h1 className='coin-text'>Search a currency</h1> */}
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search a currency"
          />
        </form>
      </div>

      <TableContent coins={filteredCoins} />
    </div>
  );
}

export default App;
// key={coin.id}
// name={coin.name}
// price={coin.current_price}
// symbol={coin.symbol}
// marketcap={coin.total_volume}
// volume={coin.market_cap}
// image={coin.image}
// priceChange={coin.price_change_percentage_24h}
// loading={loading}
