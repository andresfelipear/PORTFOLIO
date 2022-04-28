import React from 'react'
import { AboutMe, AboutMeContent, AboutMeTitle, MainContainer } from './aboutPage.styles'

function AboutPage() {
  return (
    <MainContainer>
        <AboutMe>
            <AboutMeTitle> Just Me.</AboutMeTitle>
            <AboutMeContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum perspiciatis provident rem dolores porro dolorem, exercitationem enim debitis? Ex quia iste et qui iusto non numquam adipisci. Voluptate, adipisci mollitia.
            </AboutMeContent>
        </AboutMe>
    </MainContainer>
  )
}

export default AboutPage