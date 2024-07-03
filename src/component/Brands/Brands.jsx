import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {brands.map((brand) => (
        <div key={brand.id}>
          <Link to={`/allproduct/${brand.name}`}>
            <div className="flex items-center pl-10 lg:justify-center gap-4 lg:p-2 min-h-full">
              <img src={brand.img} alt="" className="h-14" />
              <h5 className="text-xl text-blue-500">{brand.name}</h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Brands;
