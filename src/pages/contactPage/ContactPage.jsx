import React from 'react'
import { useState, useEffect } from 'react'
import { Section, Form, Button, Box, Heading } from "react-bulma-components"
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/notification/Modal';
import "./ContactPage.css"
function ContactPage() {

    const [name, setname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [status, setStatus] = useState("");

    //modal
    const [notiTitle, setNotiTitle] = useState("")
    const [notiBody, setNotiBody] = useState("")


    const navigate = useNavigate()

    const openModal = (title, message) => {
        setNotiTitle(title);
        setNotiBody(message);
        const modalContainer = document.getElementById("modal-container");
        modalContainer.classList.add("is-active");

    }

    const closeModal = () => {
        const modalContainer = document.getElementById("modal-container");
        modalContainer.classList.remove("is-active");
        if (status === "success") {
            setStatus("")
            navigate("/")
        }
    }

    //end modal

    const submit = () => {
        const body = { name, phone, email, message }
        console.log(body)
    }

    useEffect(() => {
        if (name && email && message) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [message, name, email])

    return (
        <Section mt={3} >
            <Box style={{ width: 510, margin: 'auto', padding: "70px 50px", backgroundColor: "white",border:'2px solid var(--maincolor)' }}>
                    <Heading textAlign="center" style={{color:'rgba(85, 0, 197, 0.72)'}}>Who are you?</Heading>
                    <Form.Field>
                        <Form.Label>Name <span style={{color:'var(--maincolor)', fontWeight:'bolder', fontSize:'15px'}}>&#42;</span></Form.Label>
                        <Form.Control>
                            <Form.Input value={name} type="text" name="name" onChange={(e) => { setname(e.target.value) }} />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control>
                            <Form.Input value={phone} type="tel" name="phone" onChange={(e) => { setPhone(e.target.value) }} />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Email <span style={{color:'var(--maincolor)', fontWeight:'bolder', fontSize:'15px'}}>&#42;</span></Form.Label>
                        <Form.Control>
                            <Form.Input value={email} type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Message <span style={{color:'var(--maincolor)', fontWeight:'bolder', fontSize:'15px'}}>&#42;</span></Form.Label>
                        <Form.Control>
                            <Form.Textarea value={message} name="message" onChange={(e) => { setMessage(e.target.value) }} />
                        </Form.Control>
                    </Form.Field>

                    <Button.Group align="center" mt={5}>
                        <Button
                            style={disabled?({borderColor:'var(--maincolor)', color:`var(--maincolor)`}):({backgroundColor:'var(--maincolor)', color:`white`})}
                            color={disabled ? ("") : ("link")}
                            onClick={submit}
                            disabled={disabled}
                            submit={false}
                        >Send
                        </Button>
                    </Button.Group>
            </Box>

            <Modal notiTitle={notiTitle} notiBody={notiBody} handleClose={closeModal} />
        </Section>
    )
}

export default ContactPage