import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import httpUrl from "../http/http";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, photo, brand, price, rating, description } = product;
  const myCart = { photo, name };
  const handleAddToCart = () => {
    fetch(`${httpUrl}/mycart`, {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(myCart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };
  return (
    <div>
      <div className="card bg-base-100 image-full shadow-sm">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p className="text-xl font-bold text-blue-400">Price: {price}tk</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary w-4/12 hover:bg-blue-500 text-white"
              onClick={handleAddToCart}
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
