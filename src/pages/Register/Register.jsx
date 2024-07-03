import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogIn from "../../component/SocialLogIn/SocialLogIn";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { handleEmailPassword } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)) {
      setError(
        "Password must be contain number, a capital letter and a special character"
      );
      return;
    }
    handleEmailPassword(email, password)
      .then((user) => {
        if (user) {
          setError("");
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
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
            <h1 className="text-5xl font-bold">Register now! </h1>
            <p className="py-6 w-8/12">
              Join our community and unlock a world of exclusive benefits and
              features. Registering with is quick, easy, and free. Start your
              journey with us today and enjoy a personalized experience tailored
              just for you.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleRegister}>
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
                <button className="btn btn-primary">Register Now</button>
              </div>
            </form>
            <div className="form-control">
              <SocialLogIn></SocialLogIn>
            </div>
            <div>
              <p className="p-2 text-red-500">{error}</p>
              <Link to="/login">
                <p className="pr-4 text-end pb-4 font-bold">
                  Already have an account?
                  <span className="text-blue-600"> LogIn</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
