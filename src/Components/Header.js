import React, { Component } from 'react'
import {Navbar, NavbarBrand, Jumbotron, NavLink, NavItem,Nav, Button, NavbarText, Collapse, NavbarToggler} from 'reactstrap';

export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isNavOpen: false
             
        }

        this.toggleNav = this.toggleNav.bind(this);

    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <div>
                
             
            
             <Jumbotron className="jumbotron-background text-center">
                                 
                        <h1 className="display-3">WedLockz</h1>
                        <p className="lead">One Stop for Your Wedding Bell .....</p>
                         
             </Jumbotron>
             
             
             <Navbar dark className="navbar-background" expand="md">
                 <div className="container">
                      <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand  href='/' className="mr-auto" >Logo</NavbarBrand>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                            <NavLink href = "#"><Button color="danger">Event Halls</Button></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><Button color="danger">Caterers</Button></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><Button color="danger">Makeup Artist</Button></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><Button color="danger">Decorations</Button></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><Button color="danger">Musicians</Button></NavLink>
                            </NavItem>
                        
                             
                         </Nav>
                         <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink href = "#"><spam className="fa fa-sign-in"></spam> Login </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href = "#"><spam className="fa fa-sign-in"></spam> Signup</NavLink>
                            </NavItem>

                            </Nav>
                         
                       
                         
                            </Collapse>  
                            </div>       
             </Navbar>
             </div>
         
        )
    }
}

export default Header
