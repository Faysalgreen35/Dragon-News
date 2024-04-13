import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";



const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        
        const password = form.get('password');
        
        console.log(password, email);
        signIn(email, password)
        .then(restult =>{
            console.log(restult.user)
            // navigat after login 
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div>
            <Helmet>
                <title>Login Page</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                <h1 className="text-5xl font-bold px-36"> Please Login </h1>
                   
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="p-4 text-center">Don not have account <Link className="text-blue-500" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;