import React from 'react';
import { faReact, faNodeJs, faPython, faJs, faJava, faGitAlt, faFigma, faTrello, faSlack, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from 'react-bulma-components';
import { AboutMe, AboutMeContent, AboutMeTitle, ContainerIcon, ContainerIcons, ContentSkill, MainContainer, Skills, TitleSkill, IconDescription, IconImage, IconMongoDB } from './aboutPage.styles';

function AboutPage() {
    return (
        <MainContainer>
            <AboutMe>
                <AboutMeTitle>A Bit About Me</AboutMeTitle>
                <AboutMeContent>
                    As a results-driven Android Developer, I specialize in building robust, offline-first mobile applications that delight users and solve real-world problems. With hands-on experience in Kotlin, Jetpack Compose, and scalable MVVM architecture, I’ve delivered multiple end-to-end apps for clients as a freelancer—from concept to deployment. My projects include agenda management solutions, holiday calendars, and nutrition trackers, each leveraging modern Android technologies like Hilt, Retrofit, Room, and Moshi to ensure top performance and reliability. I’m passionate about clean code, seamless UX, and leveraging the latest tools to accelerate delivery and minimize bugs.

                    Beyond Android, I’m fluent in Java, JavaScript, HTML5, CSS3, and Python, and I thrive in collaborative environments using Git, Figma, Trello, and Slack. As a proud mentee of Philipp Lackner’s DROP TABLE program, I continually upskill and contribute to the Android community.

                    If you’re looking for a dedicated mobile app specialist who combines technical depth with a user-focused mindset, let’s connect!
                </AboutMeContent>
            </AboutMe>

            <Skills>
                <ContentSkill>
                    <TitleSkill>Languages</TitleSkill>
                    <ContainerIcons>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faJs}/></Icon> Javascript</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faJava}/></Icon> Java</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faPython}/></Icon> Python</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faCode}/></Icon> Kotlin</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faCode}/></Icon> C++</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faHtml5}/></Icon> HTML5</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faCss3Alt}/></Icon> CSS3</IconDescription>
                        </ContainerIcon>
                    </ContainerIcons>
                </ContentSkill>

                <ContentSkill>
                    <TitleSkill>Mobile & Web</TitleSkill>
                    <ContainerIcons>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faMobileAlt}/></Icon> Android SDK</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faReact}/></Icon> React</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faNodeJs}/></Icon> Node.js</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faCode}/></Icon> Jetpack Compose</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faCode}/></Icon> Android NDK</IconDescription>
                        </ContainerIcon>
                    </ContainerIcons>
                </ContentSkill>
                
                <ContentSkill>
                    <TitleSkill>Databases & Concepts</TitleSkill>
                    <ContainerIcons>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faDatabase}/></Icon> Room</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faDatabase}/></Icon> MongoDB</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faDatabase}/></Icon> MySQL</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faDatabase}/></Icon> SQL</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription>Clean Architecture</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription>Offline-First</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription>SOLID Principles</IconDescription>
                        </ContainerIcon>
                    </ContainerIcons>
                </ContentSkill>

                <ContentSkill style={{ borderRight: 'none' }}>
                    <TitleSkill>Tools & Practices</TitleSkill>
                    <ContainerIcons>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faGitAlt}/></Icon> Git</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faFigma}/></Icon> Figma</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faTrello}/></Icon> Trello</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription><Icon><FontAwesomeIcon size='lg' icon={faSlack}/></Icon> Slack</IconDescription>
                        </ContainerIcon>
                        <ContainerIcon>
                            <IconDescription>Agile/Scrum</IconDescription>
                        </ContainerIcon>
                    </ContainerIcons>
                </ContentSkill>
            </Skills>
        </MainContainer>
    );
}

export default AboutPage;