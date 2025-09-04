import styled from 'styled-components'

export const MainContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 20px 0;
  justify-content: center;
  display: block;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`
export const AboutMe = styled.div`
  width: 50vw;
  text-align: justify;
  margin: auto;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    max-width: 80vw;
    width: auto;
  }
`
export const AboutMeTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: var(--maincolor);
  margin-bottom: 20px;
`
export const AboutMeContent = styled.p`
  font-family: 'Lato', sans-serif;
  word-spacing: 2px;
  font-weight: 100;
  color: rgb(0, 0, 0, 0.6);
  border-bottom-left-radius: 25px;
  border-top-right-radius: 10px;
  border-bottom: 3px solid rgb(85, 0, 197, 0.5);
  border-right: 3px solid rgb(85, 0, 197, 0.82);
  padding: 10px 40px 20px 20px;
  border-bottom-right-radius: 30px;
`
export const Skills = styled.div`
  width: 70vw;
  border-radius: 15px;
  border: 3px solid var(--maincolor);
  margin: auto;
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    max-width: 90vw;
    width: auto;
    flex-wrap: wrap;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    border: none;
  }
`
export const ContentSkill = styled.div`
  border-right: 2px solid lightgrey;
  width: 33.33%;
  padding: 20px 10px;
  text-align: center;
  @media (max-width: 768px) {
    width: 50%;
    border-bottom: 2px solid lightgrey;
  }
  @media (max-width: 425px) {
    width: auto;
    border-bottom: 2px solid lightgrey;
    border-right: none;
  }
`

export const TitleSkill = styled.h4`
  color: var(--maincolor);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

export const ContainerIcons = styled.div`
  background: rgb(105, 78, 180, 0.3);
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 20px 20px 10px 20px;
  margin: auto;
  margin-top: 25px;
  font-style: italic;
  border-radius: 10px;
  width: 80%;
  text-align: left;
  @media (max-width: 768px) {
    width: auto;
  }
`

export const ContentIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent; // Changed to transparent
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconDescription = styled.p`
  margin: 0px 0px 0px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ContainerIcon = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`
export const StyledLink = styled.span`
  margin-left: 5px;
  color: var(--maincolor);
  font-style: italic;
`
