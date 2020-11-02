import React from 'react';
import Loginc from '../login/login';
import style from '../login/login.css';

const Login = () => {
    return (
        <div className="log_main">
            <h1 className={style.log_title}>Login page</h1>
            <Loginc />
        </div>
    )
}

export  {
    Login
}
