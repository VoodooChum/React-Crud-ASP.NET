import React, { Component } from 'react'; // 1
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'; // 2
import { Paper } from '@material-ui/core';



class AppHeader extends Component { // 3
    state = { // 4
        isOpen: false
    };
    toggle = this.toggle.bind(this); // 5
    toggle() { // 6
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() { // 7
        return <Navbar color="dark" dark expand="md">
            -<Paper ptblr={5}>
            
            <NavbarBrand href="/">
                <img src="https://unitedtraining.com/Portals/2/UnitedTrainingLogo281x92.png?ver=qO_H-z5Tx-3DNPz4_5sZTQ%3d%3d/global/redgate-logo--white.svg?v=1" width="180" className="d-inline-block align-top" alt="" />
            </NavbarBrand>
            </Paper>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Hello</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            World
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/">For U</DropdownItem>
                            <DropdownItem>For Us</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>;
    }
}
export default AppHeader; // 8