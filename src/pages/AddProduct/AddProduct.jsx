import Swal from "sweetalert2";
import httpUrl from "../../component/http/http";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const productList = {
      brand,
      name,
      type,
      price,
      description,
      rating,
      photo,
    };
    fetch(`${httpUrl}/products`, {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productList),
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
        form.reset();
      });
  };
  return (
    <div className="bg-base-200">
      <div className="text-2xl font-bold text-center pt-20 mb-6">
        Add Your Product
      </div>
      <div className="hero bg-base-200 pb-20">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleAddProduct}>
            {/* brand name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                className="input input-bordered"
                name="brand"
                required
              />
            </div>
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            {/* type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="type"
                className="input input-bordered"
                name="type"
                required
              />
            </div>
            {/*  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                name="price"
                required
              />
            </div>
            {/* short description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <input
                type="text"
                placeholder="Short description"
                className="input input-bordered"
                name="description"
                required
              />
            </div>
            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered"
                name="rating"
                required
              />
            </div>
            {/* Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
