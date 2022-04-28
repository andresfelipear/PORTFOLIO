import React from 'react'
import { ButtonLink, MainContainer, PContentDes, PContentTitle, ProjectContent, ProjectImg, Projects, VisitButton } from './portfolio.styles'

function Portfolio() {
  return (
    <MainContainer>
      <Projects>
        <ProjectImg src='/images/projects/page1.jpg'/>
        <ProjectContent>
          <PContentTitle>Breakfast App</PContentTitle>
          <PContentDes>This website is based in a small project that my wife and me started in our Country (Colombia) in the middle of the pandemic, nor just as an alternative for get some extra money also as a possibility for connect families and friends in a time where meet with your loved family was almost impossible. We hope could do the same here in Canada in the future. </PContentDes>
          <VisitButton><ButtonLink href={"https://breakfasts-app.netlify.app/"}>Visit Site</ButtonLink></VisitButton>
        </ProjectContent>
      </Projects>
      <Projects>
        <ProjectImg src='/images/projects/page2.jpg'/>
        <ProjectContent>
          <PContentTitle>Travel Blog</PContentTitle>
          <PContentDes>A Blog where the users can register, create publications about their journies and also comment or give a rate to the entrances of other users. This website is perfect for tell histories and make friends in the process.</PContentDes>
          <VisitButton><ButtonLink href={"https://travel-blog1305.netlify.app/"}>Visit Site</ButtonLink></VisitButton>
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