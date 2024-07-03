import { useLoaderData } from "react-router-dom";
import CartCard from "../../component/CartCard/CartCard";
import { useState } from "react";
import Swal from "sweetalert2";
import httpUrl from "../../component/http/http";

const MyCart = () => {
  const carts = useLoaderData(null);
  const [cartProduct, setCartProduct] = useState(carts);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${httpUrl}/mycart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const filterProduct = cartProduct.filter(
                (cart) => cart._id !== id
              );
              setCartProduct(filterProduct);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-8">
      {cartProduct?.map((cart) => (
        <CartCard
          key={cart._id}
          cart={cart}
          handleDelete={handleDelete}
        ></CartCard>
      ))}
    </div>
  );
};

export default MyCart;
