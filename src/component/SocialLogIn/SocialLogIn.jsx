import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const SocialLogIn = () => {
  const { googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleLogIn()
      .then((result) => {
        console.log(result);
        if (result) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" flex items-center justify-center gap-2 mb-4  px-8">
      <button
        className="btn btn-primary w-full text-xl font-bold text-white"
        onClick={handleGoogle}
      >
        Google
      </button>
      {/* <button className="btn btn-primary w-5/12 text-xl font-bold text-white">
        Github
      </button> */}
    </div>
  );
};

export default SocialLogIn;
