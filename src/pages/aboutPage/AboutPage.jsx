import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Icon } from 'react-bulma-components'
import { AboutMe, ContentIcon, AboutMeContent, AboutMeTitle, ContainerIcons, ContainerIcon, ContentSkill, DescriptionSkill, IconDescription, IconImage, MainContainer, Skills, TitleSkill, IconMongoDB } from './aboutPage.styles'

function AboutPage() {
    return (
        <MainContainer>
            <AboutMe>
                <AboutMeTitle> Just Me.</AboutMeTitle>
                <AboutMeContent>
                Hi, I'm Andres. I'm a junior web developer. Since I have memory, I've loved develop and the programming world. I'm very excited for be part of this world, for grow up in this and make me a name for my projects and my effort. I have knowdledge in Front End and Back End technologies and also in NoSQL and SQL databases.
In this years I've made several courses and some certification in develop, but I still have a lot to learn and I expected for that.
I can describe me as a capable person, how love work as part of a team and how like the challenges, because I am always ready to solve those problems and get all the experience and knowdledge that comes as part of this process.
  
                </AboutMeContent>
            </AboutMe>
            <Skills>
                <ContentSkill>
                    <TitleSkill>Front-End</TitleSkill>
                    <ContainerIcons>
                        <ContainerIcon>
                            <ContentIcon><Icon><FontAwesomeIcon size='lg' icon={faReact}/></Icon></ContentIcon>
                            <IconDescription>React</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconImage src='/images/js.png' />
                            <IconDescription>Javascript</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconImage src='/images/html.png' />
                            <IconDescription>Html</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconImage src='/images/css.png' />
                            <IconDescription>Css3</IconDescription>
                        </ContainerIcon>
                    </ContainerIcons>
                </ContentSkill>

                <ContentSkill>
                    <TitleSkill>Back-End</TitleSkill>
                    <ContainerIcons>
                        <ContainerIcon>
                            <IconImage src='/images/nodejs.png' />
                            <IconDescription>Node.js</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconImage src='/images/sailsjs.png' />
                            <IconDescription>Sails.js</IconDescription>
                        </ContainerIcon>
                    </ContainerIcons>
                </ContentSkill>

                <ContentSkill style={{ border: 'none' }}>
                    <TitleSkill>Databases</TitleSkill>
                    <ContainerIcons>
                        <ContainerIcon>
                            <IconMongoDB src='/images/mongodb.png' />
                            <IconDescription>MongoDB</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconImage src='/images/mysql.png' />
                            <IconDescription>MySQL</IconDescription>
                        </ContainerIcon>
                    </ContainerIcons>
                </ContentSkill>
            </Skills>
        </MainContainer>
    )
}

export default AboutPage