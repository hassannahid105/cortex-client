const Slider = () => {
  return (
    <div>
      <div
        className="hero h-[80vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/7CpyrkJ/slider.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold ">
              Welcome To
              <span className="text-blue-800 "> Cortex</span>
            </h1>
            <p className="mb-5">
              Your premier destination for cutting-edge technology solutions
              designed to revolutionize the way you live and work. As leaders in
              the tech industry, we are committed to providing innovative,
              reliable, and efficient products that meet the ever-evolving needs
              of our customers. Our mission is to empower individuals and
              businesses alike with the tools they need to succeed in a digital
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
