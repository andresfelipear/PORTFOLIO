import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    padding: 20px 70px;
    font-size: 16.5vh;

    @keyframes main-text{
        from {opacity: 0; transform: translate(20vw, 30vh);}
        to {opacity: 1; transform: translateY(0);}
    }
`;

export const FirstLine = styled.div`
    animation:main-text 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
	animation-fill-mode:backwards;
`

export const SecondLine = styled.div`
    animation:main-text 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
    animation-delay: 0.4s;
    animation-fill-mode:backwards;
`

export const ThirdLine = styled.div`
    color:var(--maincolor);
    animation:main-text 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
    animation-delay: 1s;
    animation-fill-mode:backwards;
`

export const MainPhoto = styled.div`
    border: 10px solid white;
    -moz-border-radius: 10px;
    z-index: -1;	
    position: absolute;
    top:8vh;
    right: 0; 
    bottom: 0; 
    left: 48vw;
    background-image: url('/images/photo.png');
    background-repeat: no-repeat; 
    background-size: auto 90%;
    animation:bg-photo 1.2s ease-out;	
    animation-fill-mode:backwards;
    filter: grayscale(100%);
    border-radius:50px;

    @keyframes bg-photo {
        0% {opacity: 0;transform: scale(1.2);}
        100% {opacity: 1;transform: scale(1);}	
    }
    @media (min-width:1440px){
        left:55vw;    
    }

    @media (max-width:750px){
        left:15vw;    
    }

`

