import React from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";

export default function SignedIn({signOut}) {
    return(
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.linkedin.com/in/mira%C3%A7-balkaya-8a2b66209/"/>
                <Dropdown pointing="top left" text="Miraç">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}