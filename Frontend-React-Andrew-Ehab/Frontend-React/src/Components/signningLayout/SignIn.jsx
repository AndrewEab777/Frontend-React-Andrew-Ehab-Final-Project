import React from 'react'
import { Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <>
            <div className="vh-100 w-100 h-100 d-flex flex-column justify-content-center align-item-center">
                <h1 className="fs-1 mb-5">Sign In</h1>
                <p>Don't have an account yet? &nbsp; {/* Space */}
                    <Link to="signup" className='text-success-emphasis fw-bold'>Sign Up</Link>
                </p>

                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control py-2 shadow-none border-0 border-bottom"
                        style={{ maxWidth: "400px" }}
                        id="emailInput"
                        placeholder="Your user name or Email address"
                        required
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        className="form-control rounded-3 py-2 shadow-none border-0 border-bottom"
                        style={{ maxWidth: "400px" }}
                        id="passInput"
                        placeholder="Password"
                        required
                    />
                </div>

                <div className="container d-flex">
                    <input type="checkbox" className="form-check-input shadow-none border-2 me-3" />

                    <p>Remember me</p>
                </div>

                <div className="d-grid gap-2" style={{maxWidth: "400px"}}>
                    <button className="btn btn-primary" type="button">Sign In</button>
                </div>
            </div>
        </>
    );
}
