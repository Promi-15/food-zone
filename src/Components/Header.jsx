export default function Header({setSearchQuery, setFoods, foods, handleClick}) {
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      const finalValue = e.target.value;
      setSearchQuery(finalValue); // Pass the final value to the parent component
    }
  };

  return (
    <div className="bg-slate-700 border-2">
      <div className="navbar mt-10">
        <div className="flex-1">
          <img src="/public/Foody Zone.svg" alt="Foody Zone" />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onKeyPress={handleInputKeyPress} // Handle key press
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10 gap-8">
        <button onClick={() => handleClick("Fastfood")} className="btn bg-orange-600 border-none text-white">FastFood</button>
        <button onClick={() => handleClick("Biryani")} className="btn bg-orange-600 border-none text-white">Biriyani</button>
        <button onClick={() => handleClick("Dessert")} className="btn bg-orange-600 border-none text-white">Desert</button>
        <button onClick={() => handleClick("Grill")} className="btn bg-orange-600 border-none text-white">Grill</button>
      </div>
    </div>
  );
}
