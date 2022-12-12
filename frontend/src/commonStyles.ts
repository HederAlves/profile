import styled from 'styled-components';

//Global
export const LayoutRow = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export const LayoutRowWrap = styled.body`
    display: flex;
    flex-wrap: wrap;
`;
export const FormRowWrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 32px;
`;
export const FormCol = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
`;
export const ButtonPrimary = styled.button`
    background-color: #012C45;
    color: #0EDAF3;
    text-align: center;
    text-decoration: none;
    padding: 5px;
    width: 220px;
    height: 40px;
    border: 0.1px solid #012C45;
    border-radius: 8px;
     &:hover{
        background-color: #0EDAF3;
        color: #012C45;
     }
`;
export const ButtonSecund = styled.button`
    background-color: #012C45;
    padding: 5px;
    color: #0EDAF3;
    width: 80px;
    border: 0.1px solid #012C45;
    border-radius: 8px;
     &:hover{
        background-color: #0EDAF3;
        color: #012C45;
     }
`;
export const LinkPrimary = styled.section`
    display: flex;
    justify-content: center;
    gap: 1vh;
`;
export const Title = styled.h1`
    font-size: 4vh;
    font-weight: bold;
    color: #012C45;
`;
