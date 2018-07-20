import React from 'react';
import './navBar.css';

class NavBar extends React.Component {
    open() {
        document
            .getElementById("mobile")
            .style
            .width = "250px";
    }

    close() {
        document
            .getElementById("mobile")
            .style
            .width = "0";
    }
    render() {
        return (
            <React.Fragment>
                <div className="nav">
                    <ul className="url-links">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li className="button">Register</li>
                    </ul>
                    <span className="hambuger" onClick={this.open}>&#9776;</span>
                </div>

                <div id="mobile" className="mobile">
                <a className="closebtn" onClick={this.close}>&times;</a>
                   <a>Home</a>
                   <a>Contact</a>
                   <a>About</a>
                   <a>Register</a>
                </div>
            </React.Fragment>
        )
    }
}

export default NavBar;