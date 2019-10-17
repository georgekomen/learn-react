import React from 'react';

function Header() {
    return (
        <div className="jumbotron container-fluids">
            header
        </div>
    );
}


function Content() {
    return (
        <div>
            frr
        </div>
    );
}


function Footer() {
    return (
        <div className="footer">
            footer
        </div>
    );
}


export default function Authoquiz() {
    return (
        <div className="container-fluid">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
