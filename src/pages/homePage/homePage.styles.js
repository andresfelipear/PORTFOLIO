import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 20px 70px;
    font-size: 16.5vh;

    @keyframes main-text{
        from {opacity: 0; transform: translate(20vw, 30vh);}
        to {opacity: 1; transform: translateY(0);}
    }

    /* The typing effect */
    @keyframes typing {
    from { width: 0; color:#4A4A4A;}
    to { width: 35vw; color:#4A4A4A; }
    }

    /* The typing effect */
    @keyframes typing2 {
    from { width: 0; color:var(--maincolor) }
    to { width: 50vw; color:var(--maincolor) }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
    from, to { border-color: var(--maincolor) }
    50% { border-color: transparent }
    }

    @media (min-width:769px) and (max-width:1440px){
        font-size: 6.5rem;  
    }

    @media (max-width:768px){
        font-size: 5rem;  
    }

    @media (max-width:425px){
        font-size: 3.3rem;  
        padding: 20px 40px;
        text-align:center;

        /* The typing effect */
        @keyframes typing {
        from { width: 0; color:#4A4A4A;}
        to { width: 80vw; color:#4A4A4A; }
        }

        /* The typing effect */
        @keyframes typing2 {
        from { width: 0; color:var(--maincolor) }
        to { width: 80vw; color:var(--maincolor) }
        }
    }

    
`;

export const FirstLine = styled.div`
    color:#4A4A4A;
    width: fit-content;
    overflow: hidden; 
    border-right: .05em solid transparent;
    white-space: nowrap; 
    letter-spacing: .15em; 
    animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end 5;

    @media (max-width:425px){
        margin: 0 auto;
    }

`

export const SecondLine = styled.div`
    color:transparent;
    width: fit-content;
    overflow: hidden; 
    border-right: .05em solid transparent; 
    white-space: nowrap; 
    letter-spacing: .15em; 
    animation: 
    typing 3.5s steps(40, end) 3.5s forwards,
    blink-caret .75s step-end 3.5s 5;
    @media (max-width:425px){
        margin: 0 auto; 
    }

`

export const ThirdLine = styled.div`
    color:transparent;
    width: fit-content;
    overflow: hidden; 
    border-right: .05em solid transparent;
    white-space: nowrap; 
    letter-spacing: .15em;
    animation: 
    typing2 4.5s steps(40, end) 7s forwards,
    blink-caret .75s step-end 7s 6;
    @media (max-width:425px){
        margin: 0 auto;
    }
`

export const MainPhoto = styled.div`
    border: 10px solid white;
    -moz-border-radius: 10px;
    z-index: -1;	
    position: absolute;
    top:8vh;
    right: 0; 
    bottom: 0; 
    left: 56vw;
    background-image: url('/images/photo.png');
    background-repeat: no-repeat; 
    background-size: auto 90%;
    animation:bg-photo 1.2s ease-out;	
    animation-fill-mode:backwards;
    filter: grayscale(70%);
    border-radius:50px;

    @keyframes bg-photo {
        0% {opacity: 0;transform: scale(1.2);}
        100% {opacity: 1;transform: scale(1);}	
    }

    @media (min-width:769px) and (max-width:1440px){
        height:600px; 
        left: 58vw;
    }

    @media (max-width:768px){
        height:500px;
        top:8.5vh;
        filter:blur(0.5px) grayscale(70%);
        left:60vw;   
    }

    @media (max-width:425px){
        top:8.5vh;
        height:330px;
        filter:blur(0.8px) grayscale(70%);
        left:25vw;
        right:25vw;    
    }


    @media (max-width:375px){
        top:11.5vh;
        height:330px;
        filter:blur(0.8px) grayscale(70%);
        left:20vw;
        right:20vw;    
    }

`

