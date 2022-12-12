import styled from 'styled-components';

//login | Register
export const SectionImage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../../../../assets/backgrounds/bg-login-register.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 50%;
    height: 100vh;
`;
export const SectionForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 6%;
    width: 50%;
    height: 100vh;
`;
export const SectionTitle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

// Users
export const Card = styled.section`
    display: flex;
    justify-content: center;
    gap: 20px;
    border: 0.1px solid gray;
    border-radius: 10px;
    box-shadow: 2px 6px gray;
    margin: 6px;
    padding: 20px 5px;
    width: 31.5%;
    height: 150px;
`;
export const CardHeader = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20%;
`;
export const CardMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
`;
export const ImgUser = styled.img`
    border-radius: 100%;
`;
export const InfoUser = styled.section`
    list-style: none;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;
