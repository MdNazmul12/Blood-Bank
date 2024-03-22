import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div>
       <h2 className="text-center text-3xl">Please Login</h2>
        <form  className=" md:w-3/4 lg:w-1/3 mx-auto">
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  name="email"
                placeholder="email"   className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" required name="password"
                 placeholder="password" className="input input-bordered"  />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
        </form>
      
            <p className="text-center mb-2">Don,t Haven,t Create a account  <Link className="text-blue-600" to="/register">Register</Link></p>
       </div>
    </div>
  );
};

export default Login;
 