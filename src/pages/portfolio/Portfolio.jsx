import React from 'react'
import {
  ButtonLink,
  MainContainer,
  PContentDes,
  PContentTitle,
  ProjectContent,
  ProjectImg,
  Projects,
  SocialMedia,
  VisitButton,
  ProjectSectionTitle,
  ProjectMobileImg,
} from './portfolio.styles'
import { Icon } from 'react-bulma-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Portfolio() {
  return (
    <MainContainer>
      <ProjectSectionTitle>Web Projects</ProjectSectionTitle>
      <Projects>
        <ProjectImg src="/images/projects/page1.jpg" />
        <ProjectContent>
          <PContentTitle>
            Breakfast App (MERN){' '}
            <Icon size={'medium'} style={{ marginRight: '5px' }}>
              {' '}
              <SocialMedia
                href={'https://github.com/andresfelipear/MERN-APP2'}
                style={{ color: '#61DBFB', backgroundColor: '#303030' }}>
                <FontAwesomeIcon size="1x" icon={faGithub} />
              </SocialMedia>{' '}
            </Icon>
            <Icon size={'medium'}>
              {' '}
              <SocialMedia
                href={'https://github.com/andresfelipear/MERN-APP2-BACKEND'}
                style={{ color: '#66CC33', backgroundColor: '#333333' }}>
                <FontAwesomeIcon size="1x" icon={faGithub} />
              </SocialMedia>{' '}
            </Icon>
          </PContentTitle>
          <PContentDes>
            This website is based in a small project that my wife and me started
            in our Country (Colombia) in the middle of the pandemic, nor just as
            an alternative for get some extra money also as a possibility for
            connect families and friends in a time where meet with your loved
            family was almost impossible. We hope could do the same here in
            Canada in the future.{' '}
          </PContentDes>
          <VisitButton>
            <ButtonLink
              href={'https://breakfasts-app.netlify.app/'}
              target="_blank">
              Visit Site
            </ButtonLink>
          </VisitButton>
        </ProjectContent>
      </Projects>
      <Projects>
        <ProjectImg src="/images/projects/page2.jpg" />
        <ProjectContent>
          <PContentTitle>
            Travel Blog (MERN){' '}
            <Icon size={'medium'} style={{ marginRight: '5px' }}>
              {' '}
              <SocialMedia
                href={'https://github.com/andresfelipear/NodeJS-FinalProyect'}
                style={{ color: '#61DBFB', backgroundColor: '#303030' }}>
                <FontAwesomeIcon size="1x" icon={faGithub} />
              </SocialMedia>{' '}
            </Icon>{' '}
            <Icon size={'medium'}>
              {' '}
              <SocialMedia
                href={'https://github.com/andresfelipear/NodeJS-FPBackEnd'}
                style={{ color: '#66CC33', backgroundColor: '#333' }}>
                <FontAwesomeIcon size="1x" icon={faGithub} />
              </SocialMedia>{' '}
            </Icon>
          </PContentTitle>
          <PContentDes>
            A Blog where the users can register, create publications about their
            journ-ies and also comment or give a rate to the entrances of other
            users. This website is perfect for tell histories and make friends
            in the process.
          </PContentDes>
          <VisitButton>
            <ButtonLink
              href={'https://travel-blog1305.netlify.app/'}
              target="_blank">
              Visit Site
            </ButtonLink>
          </VisitButton>
        </ProjectContent>
      </Projects>
      <Projects>
        <ProjectImg src="/images/projects/page3.jpg" />
        <ProjectContent>
          <PContentTitle>
            World Holidays (REACT)
            <Icon size={'medium'}>
              {' '}
              <SocialMedia
                href={'https://github.com/andresfelipear/REACT-APP3'}>
                <FontAwesomeIcon size="1x" icon={faGithub} />
              </SocialMedia>{' '}
            </Icon>
          </PContentTitle>
          <PContentDes>
            Project that allow the user to consult the holidays per Country and
            State in any place of the World. Currently because I'm using a free
            api key, I can only display the holidays in the previous year.
          </PContentDes>
          <VisitButton>
            <ButtonLink
              href={'https://world-holidays1305.netlify.app/'}
              target="_blank">
              Visit Site
            </ButtonLink>
          </VisitButton>
        </ProjectContent>
      </Projects>
      <ProjectSectionTitle>Mobile Projects</ProjectSectionTitle>
      <Projects>
        <ProjectMobileImg src="/images/projects/tasky-app.png" />
        <ProjectContent>
          <PContentTitle>
            Tasky App{' '}
            <Icon size={'medium'} style={{ marginRight: '5px' }}>
              {' '}
              <SocialMedia
                href={'https://github.com/andresfelipear/Compose-TaskyApp'}>
                <FontAwesomeIcon size="1x" icon={faGithub} />
              </SocialMedia>{' '}
            </Icon>
          </PContentTitle>
          <PContentDes>
            Developed a robust, offline-first Android agenda management
            application to help users organize events, tasks, and reminders.
            Implemented comprehensive CRUD operations for agenda items (Events,
            Tasks, Reminders), ensuring data persistence and real- time
            synchronization across devices.
          </PContentDes>
          <VisitButton>
            <ButtonLink
              href={'https://github.com/andresfelipear/Compose-TaskyApp'}
              target="_blank">
              Visit the Repository
            </ButtonLink>
          </VisitButton>
        </ProjectContent>
      </Projects>
      <Projects>
        <ProjectMobileImg src="/images/projects/holidays_app.png" />
        <ProjectContent>
          <PContentTitle>
            Holidays App{' '}
            <Icon size={'medium'} style={{ marginRight: '5px' }}>
              {' '}
              <SocialMedia
                href={'https://github.com/andresfelipear/ComposeCaloriesApp'}>
                <FontAwesomeIcon size="1x" icon={faGithub} />
              </SocialMedia>{' '}
            </Icon>
          </PContentTitle>
          <PContentDes>
            Developed an Android application to display holidays by country with
            various calendar views (Year, Month, Weekly). Published on Google
            Play.
          </PContentDes>
          <VisitButton>
            <ButtonLink
              href={
                'https://play.google.com/apps/testing/com.aarevalo.holidays'
              }
              target="_blank">
              Visit Google Play
            </ButtonLink>
          </VisitButton>
        </ProjectContent>
      </Projects>
      <Projects>
        <ProjectMobileImg src="/images/projects/calories_tracker.png" />
        <ProjectContent>
          <PContentTitle>
            Calories Tracker{' '}
            <Icon size={'medium'} style={{ marginRight: '5px' }}>
              {' '}
              <SocialMedia
                href={'https://github.com/andresfelipear/ComposeCaloriesApp'}>
                <FontAwesomeIcon size="1x" icon={faGithub} />
              </SocialMedia>{' '}
            </Icon>
          </PContentTitle>
          <PContentDes>
            Developed calories track application using last Jetpack Compose,
            SOLID principles and MVVM design pattern. Published on Google Play.
          </PContentDes>
          <VisitButton>
            <ButtonLink
              href={
                'https://play.google.com/apps/testing/com.aarevalo.calories'
              }
              target="_blank">
              Visit Google Play
            </ButtonLink>
          </VisitButton>
        </ProjectContent>
      </Projects>
    </MainContainer>
  )
}

export default Portfolio
