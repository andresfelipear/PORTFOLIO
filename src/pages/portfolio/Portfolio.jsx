import React from 'react'
import { ButtonLink, MainContainer, PContentDes, PContentTitle, ProjectContent, ProjectImg, Projects, VisitButton } from './portfolio.styles'

function Portfolio() {
  return (
    <MainContainer>
      <Projects>
        <ProjectImg src='/images/projects/page1.jpg'/>
        <ProjectContent>
          <PContentTitle>Google Main Page (replica)</PContentTitle>
          <PContentDes>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae cum animi repellat ipsum, facilis, asperiores iste eaque cumque neque enim placeat ipsam sunt quibusdam? Ratione deleniti nulla molestias ad fugit.</PContentDes>
          <VisitButton><ButtonLink href={"https://world-holidays1305.netlify.app/"}>Visit Site</ButtonLink></VisitButton>
        </ProjectContent>
      </Projects>
      <Projects>
        <ProjectImg src='/images/projects/page2.jpg'/>
        <ProjectContent>
          <PContentTitle>League Of Legends Main Page (replica)</PContentTitle>
          <PContentDes>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae cum animi repellat ipsum, facilis, asperiores iste eaque cumque neque enim placeat ipsam sunt quibusdam? Ratione deleniti nulla molestias ad fugit.</PContentDes>
          <VisitButton><ButtonLink href={"https://world-holidays1305.netlify.app/"}>Visit Site</ButtonLink></VisitButton>
        </ProjectContent>
      </Projects>
      <Projects>
        <ProjectImg src='/images/projects/page3.jpg'/>
        <ProjectContent>
          <PContentTitle>World Holidays</PContentTitle>
          <PContentDes>Project that allow the user to consult the holidays per Country and State in any place of the World. Currently because I'm using a free api key, I can only display the holidays in the previous year (2021).</PContentDes>
          <VisitButton><ButtonLink href={"https://world-holidays1305.netlify.app/"}>Visit Site</ButtonLink></VisitButton>
        </ProjectContent>
      </Projects>
    </MainContainer>
  )
}

export default Portfolio