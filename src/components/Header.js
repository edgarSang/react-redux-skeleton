import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-1 row">
                    <div className="col s1"> 
                        <Link to="/">Home</Link>
                    </div>
                    <div className="col s1">
                        <Link to="/test">Test</Link>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Header;
