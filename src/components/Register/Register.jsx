import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div>
        <div>
      <h2 className="text-center text-3xl">Please Register</h2>
       <form  className=" md:w-3/4 lg:w-1/3 mx-auto">
       <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input type="text"  name="name"
               placeholder="name"   className="input input-bordered" required />
             </div>
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
               <button className="btn btn-primary">Register</button>
             </div>
       </form>
     
           <p className="text-center mb-2">Already Haven,t Account<Link className="text-blue-600" to="/login"> Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
