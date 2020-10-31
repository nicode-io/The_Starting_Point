import React from 'react';



const LoginC = () =>{
     
        return (
            
            <section className="log_form">
                <form action="#" method="POST" className="log_form">
                    <input type="text" name="login" id="login" autocomplete="off" placeholder="Entrez votre login"/>
                    <input type="password" name="password" id="password" autocomplete="off" placeholder="Entrez votre password"/>
                    <input type="submit" value="Envoyer" id="log_submit"/>
                </form>
            </section>
        )
    
};

export default LoginC;
