import React from 'react'
import { useEffect, useState } from "react";
import { Footer, Icon, Navbar } from "react-bulma-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { ButtonTouch, Nets } from './footer.styles'

import "./Foot.css"
function Foot() {

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
        <Footer style={{ paddingInline: "0px" }} textAlign="center" backgroundColor='white'>
            <Navbar color={'link'} p={5}>
                <Navbar.Brand style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <div style={{ display: 'flex' }}>
                        <div >
                            <p>Let's Work Together</p>
                            <ButtonTouch to="/contact">Get in Touch</ButtonTouch>
                        </div>
                    </div>
                    {!isDesktop && (
                        <div className="is-flex pr-4">
                            <Navbar.Item>
                                About
                            </Navbar.Item>
                            <Navbar.Item>
                                Portfolio
                            </Navbar.Item>
                            <Navbar.Item href="/shopping-cart">
                                Contact
                            </Navbar.Item>
                        </div>
                    )}

                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container align="right" style={{alignItems:'center'}}>
                            <Icon size={"large"}> <Nets  to={""}><FontAwesomeIcon size='lg' icon={faFacebook} /></Nets> </Icon>
                            <Icon size={"large"}> <Nets  to={""}><FontAwesomeIcon size='lg' icon={faLinkedin} /></Nets> </Icon>
                            <Icon size={"large"}> <Nets  to={""}><FontAwesomeIcon size='lg' icon={faInstagram} /></Nets> </Icon>
                    </Navbar.Container>
                </Navbar.Menu>

            </Navbar>
            <p style={{
                fontSize: "12px",
                fontStyle: "italic",
            }}>© 2022 Andres Arevalo - Breakfast App </p>
        </Footer>
    )
}

export default Foot