import styled from "styled-components";

// NavBar
export const LayoutNavBar = styled.header`
    background-color: #46a7c8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 2px #012C45;
`;
export const ImgNavBar = styled.img`
    width: 6%;
    height: 6%;
    margin-left: 2vw;
`;
export const ListButtons = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-right: 3vw;
`;
export const ButtonNavBar = styled.button`
    background: none;
    color: #012C45;
    text-decoration: none;
    border: none;
    text-align: center;
    font-size: x-large;
    font-weight: bold;
    margin: 8px;
     &:hover{
        color: #FFFFFFFF;
     }
`;