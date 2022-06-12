import React, { Component, useState } from 'react'
import logo from '../assets/images/logo.png'
import { FaBars } from 'react-icons/fa'
import { Col, Container, Navbar, Nav, Row, NavDropdown } from 'react-bootstrap'
import blockChain from '../assets/images/blockchain.png'
import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'


export default function MyNav({ }) {
    return (
        <div>
            <section className="nav-section">
                <Container>
                    <Row>
                        <Col>
                            <Navbar expand="lg" className="custom-nav">
                                <Navbar.Brand to={'/'}>
                                    <img src={logo} alt="" className="logo header-logo" />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav">
                                    <FaBars className="nav-togglee" />
                                </Navbar.Toggle>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="myNav">
                                        <NavDropdown
                                            title={[
                                                'Technologies',
                                            ]}
                                            id="basic-nav-dropdown2"
                                            className="menu-drp"
                                        >
                                            <div className="menu-div">
                                                <Row>
                                                    <Col sm={6}>
                                                        <LinkButton
                                                            className={'menu-div-a mb-3'}
                                                            links_path={'/payment-logs'}
                                                            links_text={[
                                                                <img src={blockChain} className="menu-pic" />,
                                                                <p>
                                                                    Blockchain</p>,
                                                            ]}
                                                        />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <LinkButton
                                                            className={'menu-div-a mb-3'}
                                                            links_path={'/payment-logs'}
                                                            links_text={[
                                                                <img src={blockChain} className="menu-pic" />,
                                                                <p>
                                                                    Blockchain</p>,
                                                            ]}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </NavDropdown>
                                        <NavDropdown
                                            title={[
                                                'Engineering',
                                            ]}
                                            id="basic-nav-dropdown2"
                                            className="menu-drp"
                                        >
                                            <div className="menu-div">
                                                <Row>
                                                    <Col sm={6}>
                                                        <LinkButton
                                                            className={'menu-div-a mb-3'}
                                                            links_path={'/payment-logs'}
                                                            links_text={[
                                                                <img src={blockChain} className="menu-pic" />,
                                                                <p>
                                                                    Blockchain</p>,
                                                            ]}
                                                        />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <LinkButton
                                                            className={'menu-div-a mb-3'}
                                                            links_path={'/payment-logs'}
                                                            links_text={[
                                                                <img src={blockChain} className="menu-pic" />,
                                                                <p>
                                                                    Blockchain</p>,
                                                            ]}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </NavDropdown>
                                        <NavDropdown
                                            title={[
                                                'Services',
                                            ]}
                                            id="basic-nav-dropdown2"
                                            className="menu-drp"
                                        >
                                            <div className="menu-div">
                                                <Row>
                                                    <Col sm={6}>
                                                        <LinkButton
                                                            className={'menu-div-a mb-3'}
                                                            links_path={'/payment-logs'}
                                                            links_text={[
                                                                <img src={blockChain} className="menu-pic" />,
                                                                <p>
                                                                    Blockchain</p>,
                                                            ]}
                                                        />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <LinkButton
                                                            className={'menu-div-a mb-3'}
                                                            links_path={'/payment-logs'}
                                                            links_text={[
                                                                <img src={blockChain} className="menu-pic" />,
                                                                <p>
                                                                    Blockchain</p>,
                                                            ]}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </NavDropdown>
                                        <NavDropdown
                                            title={[
                                                'Resources',
                                            ]}
                                            id="basic-nav-dropdown2"
                                            className="menu-drp"
                                        >
                                            <div className="menu-div">
                                                <Row>
                                                    <Col sm={6}>
                                                        <LinkButton
                                                            className={'menu-div-a mb-3'}
                                                            links_path={'/payment-logs'}
                                                            links_text={[
                                                                <img src={blockChain} className="menu-pic" />,
                                                                <p>
                                                                    Blockchain</p>,
                                                            ]}
                                                        />
                                                    </Col>
                                                    <Col sm={6}>
                                                        <LinkButton
                                                            className={'menu-div-a mb-3'}
                                                            links_path={'/payment-logs'}
                                                            links_text={[
                                                                <img src={blockChain} className="menu-pic" />,
                                                                <p>
                                                                    Blockchain</p>,
                                                            ]}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </NavDropdown>


                                        <Link to="/contact" className="nav-link">
                                            IP Protection
                                        </Link>
                                        <Link to="/contact" className="nav-link">
                                            Contact US
                                        </Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
