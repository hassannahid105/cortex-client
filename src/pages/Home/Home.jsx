import Brands from "../../component/Brands/Brands";
import ShortVideo from "../../component/ShortVideo/ShortVideo";
import Slider from "../../component/Slider/Slider";
import Support from "../../component/Support/Support";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ShortVideo></ShortVideo>
      <div className="mt-4 py-10">
        <Brands></Brands>
      </div>
      <div>
        <Support></Support>
      </div>
    </div>
  );
};

export default Home;
