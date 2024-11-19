import React from "react";
import './Header.css'
/* https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png */

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="logo--netflix">
                <a href="./">
                    <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt="netflix" />
                </a>
            </div>
            <div className="user">
                <a href="./">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
                </a>
            </div>
        </header>
    );
}