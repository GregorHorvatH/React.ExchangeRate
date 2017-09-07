import React, { Component, PropTypes } from 'react';

import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';

import { Link } from 'react-router';

const propTypes = {
    children: PropTypes.node
};

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div className="app">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Home</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href="#/rate">Rates</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;