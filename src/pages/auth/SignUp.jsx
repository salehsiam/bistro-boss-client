import AuthImg from "./../../assets/assets/others/authentication2.png";
import AuthBg from "./../../assets/assets/others/authentication.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateProfile(data.name)
        .then((result) => {
          console.log("user profile updated");
          reset();
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };
  // console.log(watch("example"));

  return (
    <div
      style={{
        backgroundImage: `url('${AuthBg}')`,
      }}
      className="hero min-h-screen"
    >
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="hero-content flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <img src={AuthImg} alt="" />
        </div>
        <div className="w-1/2 mx-auto">
          <div className="card  w-full max-w-sm shrink-0">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h3 className="text-3xl font-bold text-center">SignUp</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && <span>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span>Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>Password Must be 6 character</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span>
                    Password must be one uppercase and one lowercase and 6 digit
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
            <p>
              Already have an account <Link to="/login">login</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
