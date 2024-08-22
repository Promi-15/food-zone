const Food = ({ food }) => {
  const { name, price, text, image, type } = food;
  return (
    <div className=" ">
      <div className="w-3/4 grid grid-cols-2 px-6   border-2 border-white hero-overlay bg-opacity-20 rounded-xl items-center ">
        <figure>
          <img className="rounded-full w-40 h-36 " src={image} alt="Shoes" />
        </figure>

        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p className="text-left">{text}</p>
          <div className="card-actions ">
            <button className="btn bg-orange-500 border-none text-white">
              $ {price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
