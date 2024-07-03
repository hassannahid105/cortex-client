const ShortVideo = () => {
  return (
    <div className="bg-[#f3f8fe] text-center w-full py-20 ">
      <div className="w-10/12  mx-auto flex items-center justify-center flex-col gap-4">
        <button className="uppercase text-sm px-4 rounded-full text-blue-500 border-blue-400 border py-1">
          Short video tutorial
        </button>
        <h2 className="capitalize text-2xl md:text-7xl">
          Videos Will Help You To Learn Much Better!
        </h2>
        <div className="lg:flex items-center space-y-2  lg:space-y-0 justify-center gap-4 my-6">
          <button className="capitalize text-lg px-6 rounded-lg text-white bg-blue-600 font-bold border-white-400 border py-3">
            one click Demo Install
          </button>
          <button className="capitalize text-lg px-6 rounded-lg text-blue-500 font-bold border-blue-400 border py-3">
            one click download video
          </button>
        </div>
        <div>
          <img
            className="lg:h-[400px]"
            src={
              "https://themexriver.com/wp/gilroy/demo/assets/img/misc/vt.png"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ShortVideo;
