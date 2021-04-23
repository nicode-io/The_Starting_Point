import React from "react";
import {Button, Container, Menu} from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/images/logo.png" alt="logo" style={{marginRight: '1em'}}/>
                    Soci'Act
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}
