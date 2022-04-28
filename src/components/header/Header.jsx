
import "./Header.css"
import React, {  useEffect, useState } from "react";
import { Navbar, Icon, } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAmilia } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

function Header() {


    const mediaDesktop = '(min-width:1024px )';

    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(mediaDesktop)
        if (media.matches !== isDesktop) {
            setIsDesktop(media.matches)
        }
        const listener = () => setIsDesktop(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);

    }, [isDesktop])

    return (
        <div>
            <Navbar color={'link'}>
                <Navbar.Brand style={{ display: 'flex', justifyContent: 'space-between'}} >
                    <div style={{ display: 'flex'}}>
                        <Navbar.Item href="/">
                            <Icon>
                                <FontAwesomeIcon icon={faAmilia} />
                            </Icon>
                        </Navbar.Item>
                        <Navbar.Item href="/">
                            andresa
                        </Navbar.Item>
                    </div>
                    {!isDesktop && (
                        <div className="is-flex pr-4">
                            <Navbar.Item href="/about">
                                About
                            </Navbar.Item>
                            <Navbar.Item href="/portfolio">
                                Portfolio
                            </Navbar.Item>
                            <Navbar.Item href="/contact">
                                Contact
                            </Navbar.Item>
                        </div>
                    )}

                </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Container align="right">
                            <Navbar.Item href="/about">
                                About
                            </Navbar.Item>
                            <Navbar.Item href="/portfolio">
                                Portfolio
                            </Navbar.Item>
                            <Navbar.Item href="/contact">
                                Contact
                            </Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>

            </Navbar>

        </div>
    )
}

export default Header