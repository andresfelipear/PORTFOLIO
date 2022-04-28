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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum perspiciatis provident rem dolores porro dolorem, exercitationem enim debitis? Ex quia iste et qui iusto non numquam adipisci. Voluptate, adipisci mollitia.
                </AboutMeContent>
            </AboutMe>
            <Skills>
                <ContentSkill>
                    <TitleSkill>Front-End</TitleSkill>
                    <DescriptionSkill>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti facilis unde eaque veniam, ut consequuntur vel accusantium distinctio, voluptas possimus dolorum. Consectetur assumenda eaque rerum totam eos? Quos, tempore mollitia!</DescriptionSkill>
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
                    <DescriptionSkill>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti facilis unde eaque veniam, ut consequuntur vel accusantium distinctio, voluptas possimus dolorum. Consectetur assumenda eaque rerum totam eos? Quos, tempore mollitia!</DescriptionSkill>
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
                    <DescriptionSkill>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti facilis unde eaque veniam, ut consequuntur vel accusantium distinctio, voluptas possimus dolorum. Consectetur assumenda eaque rerum totam eos? Quos, tempore mollitia!</DescriptionSkill>
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