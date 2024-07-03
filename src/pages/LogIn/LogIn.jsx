import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import SocialLogIn from "../../component/SocialLogIn/SocialLogIn";

const LogIn = () => {
  const { handleLogIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLog = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleLogIn(email, password)
      .then((user) => {
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Log In now! </h1>
            <p className="py-6 w-8/12">
              Join our community and unlock a world of exclusive benefits and
              features. Registering with is quick, easy, and free. Start your
              journey with us today and enjoy a personalized experience tailored
              just for you.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLog}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  autoComplete="on"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="w-full">
              <SocialLogIn></SocialLogIn>
            </div>
            <div>
              <p className="text-red-500 px-3">{error}</p>
              <Link to="/register">
                <p className="pr-4 text-end pb-4 font-bold">
                  If you dont have an account!
                  <span className="text-blue-600"> Registion Now</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
