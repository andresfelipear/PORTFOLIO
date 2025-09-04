import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 425px) {
    padding: 20px 10px;
    font-size: 0.9rem;
  }
`

export const ProjectSectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 30px;
    margin-bottom: 25px;
  }

  @media (max-width: 425px) {
    font-size: 1.8rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export const Projects = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px 15px;
    gap: 30px;
  }

  @media (max-width: 425px) {
    padding: 20px 10px;
    gap: 20px;
  }
`

export const ProjectContent = styled.div`
  flex: 1;
  max-width: 550px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const PContentDes = styled.p`
  text-align: justify;
  margin: 20px 0;
  line-height: 1.6;
  color: #666;

  @media (max-width: 768px) {
    text-align: left;
    margin: 15px 0;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    margin: 12px 0;
  }
`

export const PContentTitle = styled.h1`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    justify-content: center;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`

export const VisitButton = styled.button`
  margin-top: 20px;
  background-color: var(--maincolor, #007acc);
  border-radius: 25px;
  border: 2px solid transparent;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  color: white;
  padding: 12px 24px;
  transition: all 0.3s ease;

  &:hover {
    border: 2px solid var(--maincolor, #007acc);
    background-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:hover a {
    color: var(--maincolor, #007acc);
  }

  @media (max-width: 425px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 13px;
  }
`

export const ButtonLink = styled.a`
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`

export const ProjectImg = styled.img`
  width: 100%;
  max-width: 570px;
  height: auto;
  transition: all 0.3s ease;

  &:hover {
    filter: saturate(120%);
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`

export const ProjectMobileImg = styled.img`
  width: 100%;
  max-width: 240px;
  height: auto;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-right: 60px;

  &:hover {
    filter: saturate(120%);
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    max-width: 200px;
    margin-bottom: 20px;
    margin-right: 0px;
  }

  @media (max-width: 425px) {
    max-width: 180px;
    border-radius: 6px;
  }
`

export const SocialMedia = styled.a`
  color: var(--maincolor, #007acc);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    color: var(--maincolor, #007acc);
    background-color: rgba(0, 122, 204, 0.1);
    transform: scale(1.1);
  }
`
