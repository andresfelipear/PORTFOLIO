import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonTouch = styled(Link)`
    font-family: Arial, Helvetica, sans-serif;
    color: var(--maincolor);
    height: 30px;
    border-radius: 14px;
    border: 1px solid rgb(123, 44, 191);
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
    filter:blur(0.6px);
    background-color: var(--secondaryColor);
    font-size:12px;
    padding: 2px 6px;

    &:hover{
        color: var(--maincolor)!important;
        filter:blur(0px);
	    border: 2px solid rgb(123, 44, 191);
    }
`;

export const Nets = styled.a`
    color:#FFF;
    display:flex;
    align-items:center;
    cursor:pointer;
    target:_blank;
    &:hover{
        color: #E0AAFF;
    }
`