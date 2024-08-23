import { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = () => {
    fetch("/public/food.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data)
      });
  };

  const handleClick = async (type) => {
    fetch("/public/food.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.filter((d) => d.type === type))
      });
  };

  return (
    <>
      <Header
        handleClick={handleClick}
        foods={foods}
        setFoods={setFoods}
        setSearchQuery={setSearchQuery}
      ></Header>
      <Banner
        foods={foods}
        setFoods={setFoods}
        searchQuery={searchQuery}
      ></Banner>
    </>
  );
}

export default App;
