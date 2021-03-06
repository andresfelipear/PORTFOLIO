import styled from "styled-components";


export const MainContainer = styled.div`
    padding: 20px 0;
    justify-content: center;
    display: block;
	@media (max-width:768px){
        font-size:0.6rem;  
    }
`
export const AboutMe = styled.div`
    width: 50vw;
	text-align: justify;
	margin: auto;
	margin-bottom: 50px;
	@media (max-width:768px){
        max-width:80vw;
		width:auto;    
    }
`
export const AboutMeTitle = styled.h1`
    font-size:2rem;
    font-weight: bold;
    text-align: center;
	color:var(--maincolor);
    margin-bottom: 20px;
`
export const AboutMeContent = styled.p`
	word-spacing: 2px;
	font-style: italic;
	font-weight: 100;
	color: rgb(0,0,0,0.6);
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
	@media (max-width:768px){
        max-width:90vw;
		width:auto;    
    }
	@media (max-width:425px){
		flex-direction: column;
    }
`
export const ContentSkill = styled.div`
    border-right: 2px solid lightgrey;
	width: 33.33%;
	padding: 20px 10px;
	text-align: justify;
	@media (max-width:425px){
		width:auto;
		border-bottom: 2px solid lightgrey;
		border-right:none;
    }
`

export const TitleSkill = styled.h4`
    color:var(--maincolor);
	font-size: 18px;
	text-align: center;
`
export const DescriptionSkill = styled.div`
    margin: 16px 10px 30px;
`

export const ContainerIcons = styled.div`
    background: rgb(105, 78, 180,0.3);
	display:flex;
	flex-direction:column;
    width:fit-content;
	padding:20px 20px 10px 20px;
	margin: auto;
	margin-top:25px;
	color: white;
	font-style: italic;
	border-radius: 10px;
`
export const IconImage = styled.img`
    width: 30px;
	height: 30px;
`

export const ContentIcon = styled.div`
    width: 30px;
	height: 30px;
    background-color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    color: #61DBFB;
`

export const IconDescription = styled.p`
    margin: 0px 0px 0px 10px;
`

export const ContainerIcon = styled.div`
    margin-bottom: 10px;
	display: flex;
	align-items: center;
`

export const IconMongoDB = styled.img`
    width: 15px;
    margin-left: 7.5px;
    margin-right: 7.5px;
`