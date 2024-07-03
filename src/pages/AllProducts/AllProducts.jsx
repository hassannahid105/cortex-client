/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
import Slider from "../../component/Slider/Slider";
import ProductCard from "../../component/ProductCard/ProductCard";
import { useEffect, useState } from "react";
const AllProducts = () => {
  const products = useLoaderData();
  return (
    <div>
      {/* See Our Resent Product */}
      <div className="carousel w-full max-h-[70vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={"https://i.ibb.co/86bx40f/prev.jpg"} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={"https://i.ibb.co/TwJ7XYq/2769544-1.jpg"}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={"https://i.ibb.co/4fV25pj/2947115.jpg"}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mt-32">
        {products.length > 0 && (
          <h2 className="text-4xl text-center mb-6 ">See Our Resent Product</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products?.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))
          ) : (
            <h2 className="text-4xl text-center capitalize col-span-3 mb-32 text-blue-500">
              no products have been added yet will be added in the
              feture........
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
