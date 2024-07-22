import { event } from "jquery";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("Español");
  const toggle = () => setIsOpen(!isOpen);

  const handleChange = (e, languaje) => {
    e.preventDefault();
    setLang(languaje);
  }

  return (
    <div className="main-container">
      <Navbar
        expand="md"
        style={{
          fontFamily: "Montserrat, sans-serif",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <NavbarBrand
          href="/"
          style={{
            fontSize: "20px",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Cuba Excursiones
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            {/* <Nav className="justify-content-center align-middle" style={{ flex: 1}} navbar>
            
              <NavItem>
                <NavLink href="/">Inicio</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Reservas</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Contáctenos</NavLink>
              </NavItem>

            </Nav> */}

            <Nav className="ms-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="bi bi-globe2"></i>{" "}{lang}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={(event)=>handleChange(event, "Español")}>Español</DropdownItem>
                  <DropdownItem onClick={(event)=>handleChange(event, "English")}>English</DropdownItem>
                  <DropdownItem onClick={(event)=>handleChange(event, "French")}>French</DropdownItem>
                  <DropdownItem onClick={(event)=>handleChange(event, "German")}>German</DropdownItem>
                  <DropdownItem onClick={(event)=>handleChange(event, "Russian")}>Russian</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
