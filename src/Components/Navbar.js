import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav>
                <img src={require('../Images/react-logo.png')} alt="" className="nav--icon"/>
                <h3 className="nav--logo_text">ReactFacts</h3>
                <h4 className="nav--title_text">React Course - Project 1</h4>
            </nav>
        </div>
    );
}
