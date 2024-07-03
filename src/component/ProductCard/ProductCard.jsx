import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { _id, name, photo, brand, type, price, rating } = product;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl min-h-full">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Brand: {brand}</h2>
          <p className="text-lg">Name: {name}</p>
          <p>Category: {type}</p>
          <div className="flex items-center justify-center">
            <p className="text-xl text-blue-800 font-semibold">
              Price: {price}tk
            </p>
            <p>{rating}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-6/12">
              <Link to={`/update/${_id}`}>
                <p className="bg-red-300 p-4  rounded-md">update</p>
              </Link>
            </div>

            <div className="w-6/12">
              <Link to={`/products/${_id}`} className="">
                <p className="bg-green-500 p-4 rounded-md">Details</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
