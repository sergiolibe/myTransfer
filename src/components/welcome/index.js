import React, { useEffect, Fragment } from 'react';
import './index.sass'


export default function Welcome(){
    return (
        <Fragment>
            <form className="loginForm">
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                    <button type="submit" className="btn btn-success">Sign in</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}