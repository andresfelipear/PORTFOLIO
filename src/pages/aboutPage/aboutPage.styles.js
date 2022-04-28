import styled from "styled-components";
import { Link } from "react-router-dom";


export const MainContainer = styled.div`
    padding: 20px 0;
    justify-content: center;
    display: block;
`
export const AboutMe = styled.div`
    width: 50vw;
	text-align: justify;
	margin: auto;
	margin-bottom: 50px;
`
export const AboutMeTitle = styled.h1`
    font-size:2rem;
    font-weight: bold;
    text-align: center;
	color:var(--maincolor);
    margin-bottom: 20px;
`
export const AboutMeContent = styled.p`
    letter-spacing: 1px;
	word-spacing: 2px;
	font-style: oblique;
	color: rgb(85, 0, 197,0.72);
	border-bottom-left-radius: 25px;
	border-top-right-radius: 10px;
	border-bottom: 3px solid rgb(85, 0, 197, 0.5);
	border-right: 3px solid rgb(85, 0, 197, 0.82);
	padding: 10px 40px 20px 20px; 
	border-bottom-right-radius: 30px;
`
