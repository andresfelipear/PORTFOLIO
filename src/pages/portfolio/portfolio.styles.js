import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 20px 0px;
	display: block;
`
export const Projects = styled.div`
    display: flex;
	border-bottom: 1px solid lightgrey;
	padding: 20px 20px;
	justify-content: center;
	align-items: center;
`
export const ProjectContent = styled.div`
    padding: 0px 20px;  
    max-width:550px;
`
export const PContentDes = styled.p`
    text-align: justify;
    margin: 20px 0 0 10px;
`

export const PContentTitle = styled.h1`
    font-size:2rem;
    margin-top: 10px;
	margin-bottom: 40px;
    font-weight:bold;
`

export const VisitButton = styled.button`
    margin-top: 20px;
    background-color: var(--maincolor);
	border-radius: 14px;
	border: 1px solid rgb(224, 170, 255);
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;
	color: white;
    padding:6px 12px;
    font-family: Arial, Helvetica, sans-serif;

    &:hover{
        border: 2px solid rgb(224, 170, 255);
        letter-spacing: 0.7px;    
        color:white;
    }
`

export const ButtonLink = styled.a`
    text-decoration:none;
    color:white;
    &:hover{
        color:white;
    }
`
export const ProjectImg = styled.img`
    width: 570px;
	height: 303px;
`
