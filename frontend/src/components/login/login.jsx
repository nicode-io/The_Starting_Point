import React from 'react';
import  './login.css ';


const LoginC = () =>{
     
        return (
            <section className="log_form">
                <form action="" method="POST">
                    <input type="text" name="login" id="login" placeholder="Entrez votre login"/>
                    <input type="password" name="password" id="password" placeholder="Entrez votre password"/>
                    <input type="submit" value="Envoyer"/>
                </form>
            </section>
        )
    
}

export default LoginC;
