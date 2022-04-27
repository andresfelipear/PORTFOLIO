import React from 'react'
import {
    MainContainer,
    FirstLine,
    SecondLine,
    ThirdLine,
    MainPhoto
} from "./homePage.styles"

function HomePage() {
    return (
            <MainContainer>
                <FirstLine>Hello</FirstLine>
                <SecondLine>I am</SecondLine>
                <ThirdLine>Andres.</ThirdLine>
                <MainPhoto />
            </MainContainer>
    )
}

export default HomePage