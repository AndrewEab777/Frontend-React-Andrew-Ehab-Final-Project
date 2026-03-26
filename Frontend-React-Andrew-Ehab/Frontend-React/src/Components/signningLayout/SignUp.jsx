import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <div className="vh-100 w-100 h-100 d-flex flex-column justify-content-center align-item-center">
        <h1 className="fs-1 mb-5">Sign Up</h1>
        <p>Already have an account? &nbsp; {/* Space */}
          <Link to="/signin" className='text-success-emphasis fw-bold'>Sign In</Link>
        </p>

        <div className="mb-3">
          <input
            type="text"
            className="form-control py-2 shadow-none border-0 border-bottom"
            style={{ maxWidth: "400px" }}
            id="userNameInput"
            placeholder="User Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control py-2 shadow-none border-0 border-bottom"
            style={{ maxWidth: "400px" }}
            id="emailInput"
            placeholder="Email address"
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

          <p>I agree with Privacy Policy and Terms of Use</p>
        </div>

          <div className="container d-flex">
          <input type="checkbox" className="form-check-input shadow-none border-2 me-3" />

          <p>Remember me</p>
        </div>

        <div className="d-grid gap-2" style={{ maxWidth: "400px" }}>
          <button className="btn btn-primary" type="button">Sign Up</button>
        </div>
      </div>
    </>
  );
}
