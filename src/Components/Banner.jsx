import { useEffect } from "react";
import { useState } from "react";
import Food from "./Food";

export default function Banner({ searchQuery }) {
 
  const[filtered,setFiltered] =useState([])
  const [foods, setFoods] = useState([])
  useEffect(() => {
    fetch('/public/food.json')
      .then(res => res.json())
      .then(data => setFoods(data))
    
  },[])
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: "url(https://i.ibb.co/vcc8YGV/bg.png)",
      }}
    >
      <div className=" max-w-full text-neutral-content text-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 p-10">
          {filteredFoods.map((food) => (
            <Food key={food.index} food={food}></Food>
          ))}
        </div>
      </div>
    </div>
  );
}
