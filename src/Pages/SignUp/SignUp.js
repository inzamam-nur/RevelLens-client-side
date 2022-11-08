import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'

const SignUp = () => {
    return (
        <div style={{marginTop:'50px',marginBottom:'50px'}} id="main-wrapper" class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="card border-0">
                    <div class="card-body p-0">
                        <div class="row no-gutters">
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="mb-5">
                                        <h3 class="h4 font-weight-bold text-theme">Login</h3>
                                    </div>
    
                                    <h6 class="h5 mb-0">Welcome back!</h6>
                                    <p class="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>
    
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1"></input>
                                        </div>
                                        <div class="form-group mb-5">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                        </div>
                                        <button type="submit" class="btn btn-theme">Login</button>
                                        <a href="#l" class="forgot-link float-right text-primary">Forgot password?</a>
                                    </form>
                                </div>
                            </div>
    
                            <div class="col-lg-6 d-none d-lg-inline-block">
                                <div class="account-block rounded-right">
                                    <div class="overlay rounded-right"></div>
                                    <div class="account-testimonial">
                                        <h4 class="text-white mb-4">This  beautiful theme yours!</h4>
                                        <p class="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                                        <p>- Admin User</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
    
                <p class="text-muted text-center mt-3 mb-0">Don't have an account? <Link class="text-primary ml-1" to='/login'>register</Link></p>
    
    
            </div>
        </div>
    </div>
    );
};

export default SignUp;