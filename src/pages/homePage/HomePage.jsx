import React from 'react'
import {
  MainContainer,
  Subtitle,
  TypingContainer,
  TypingLine,
  Description,
  ButtonContainer,
  Button,
  Skills,
} from './homePage.styles'

import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <MainContainer>
      <Subtitle>
        ANDROID DEVELOPER, PROBLEM-SOLVER, AND MOBILE APP SPECIALIST.
      </Subtitle>

      <TypingContainer>
        <TypingLine>
          <span className="hello">Hello, </span>
          <span className="iam">I am </span>
          <span className="name">Andres</span>
        </TypingLine>
      </TypingContainer>

      <Description>
        Building robust, offline-first mobile applications that delight users
        and solve real-world problems.
      </Description>

      <ButtonContainer>
        <Link to="/about">
          <Button primary>About Me</Button>
        </Link>

        <Link to="/portfolio">
          <Button>Explore My Work</Button>
        </Link>
      </ButtonContainer>

      <Skills>
        Kotlin • Java • Jetpack Compose • MVVM Architecture • Android SDK • Room
        • Retrofit • Git • Clean Architecture • Offline-First Apps
      </Skills>
    </MainContainer>
  )
}

export default HomePage
