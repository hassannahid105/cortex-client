const Support = () => {
  return (
    <div className="bg-[#ecf0ff] grid sm:grid-cols-1 md:grid-cols-2 justify-center gap-4 lg:gap-0 py-20 px-10 lg:px-20 ">
      <div className=" space-y-6  mt-12">
        <button className="uppercase text-sm px-4 rounded-full text-blue-500 border-blue-400 border py-1 inline-block">
          Support
        </button>
        <h3 className="text-5xl font-semibold">Delicated Support</h3>
        <p className="lg:w-10/12">
          The best support services with any problem in our product, quickly and
          friendly. If you dont get your solution in our document or video
          tutorial please feel free to contact us at any time via email or forum
          support!
        </p>
        <button className="capitalize text-lg px-10 rounded-lg text-white bg-blue-600 font-bold border-white-400 border py-3">
          {" "}
          Get Support
        </button>
      </div>
      <div>
        <img
          className="lg:h-[400px]"
          src={
            "https://themexriver.com/wp/gilroy/demo/assets/img/misc/sup1.png"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Support;
