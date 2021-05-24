import React from 'react';
import {Container} from "semantic-ui-react";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <Container style={{marginTop: '7rem'}}>
            <h1>Homepage</h1>
            <h3><Link to={'/activities'}>Enter Website</Link></h3>
        </Container>
    )
}

export default HomePage;
