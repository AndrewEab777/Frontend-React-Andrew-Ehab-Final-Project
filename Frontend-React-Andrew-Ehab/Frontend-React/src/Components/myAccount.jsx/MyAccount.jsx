import React, { useState } from 'react'

import MyAccountLeftSide from './MyAccountLeftSide';

/*
<div id="emailHelp" className="form-text">
    We'll never share your email with anyone else.
</div>
*/

export default function MyAccount() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    return (
        <>
            <h1 className="h1 fs-1 d-flex justify-content-center align-item-center w-100 h-100 my-5">
                My Account
            </h1>

            <div className="conntainer">
                <div className="row">
                    <div className="col-md-4">
                        <MyAccountLeftSide />
                    </div>

                    <div className="col-md-8">
                        <div className="m-5">
                            <form className="shadow-sm p-4 rounded bg-white">
                                <h3>Account Details</h3>

                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label text-muted small">
                                        FIRST NAME *
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control shadow-none py-2"
                                        id="firstName"
                                        placeholder='First Name'
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label text-muted small">
                                        LAST NAME *
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control shadow-none py-2"
                                        id="lastName"
                                        placeholder='Last Name'
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="displayName" className="form-label text-muted small">
                                        DISPLAY NAME *
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control shadow-none py-2"
                                        id="displayName"
                                        placeholder='Display name'
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />

                                    <div id="displayNameHelp" className="form-text">
                                        This will be how your name will be displayed in the account section and in reviews
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-muted small">
                                        EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control shadow-none py-2"
                                        id="email"
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <h3>Password</h3>

                                <div className="mb-3">
                                    <label htmlFor="oldPassword" className="form-label text-muted small">
                                        OLD PASSWORD
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control shadow-none py-2"
                                        id="oldPassword"
                                        placeholder='Old Password'
                                        onChange={(e) => setOldPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label text-muted small">
                                        New PASSWORD
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control shadow-none py-2"
                                        id="newPassword"
                                        placeholder='New Password'
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="repeatNewPassword" className="form-label text-muted small">
                                        REPEAT New PASSWORD
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control shadow-none py-2"
                                        id="repeatNewPassword"
                                        placeholder='Repeat New Password'
                                        onChange={(e) => setRepeatNewPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark py-2 fw-bold">
                                        Save changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
