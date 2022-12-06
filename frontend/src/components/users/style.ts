import styled from "styled-components"

//login | Register
export const LayoutLoginRegister = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
`
export const SectionImageLoginRegister = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../../../../doc/images/bg-login-register.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 50%;
    height: 100vh;
`
export const SectionForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6%;
    width: 50%;
    height: 100vh;
`
export const SectionImageTitleForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
`
export const Title = styled.h1`
    font-size: 4vh;
    font-weight: bold;
    color: #012C45;
`
export const FormLoginRegister = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const LiFormLoginRegister = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`
export const ButtonLoginRegister = styled.button`
    background-color: #012C45;
    color: #0EDAF3;
    text-align: center;
    text-decoration: none;
    padding: 5px;
    width: 24%;
    border: 0.1px solid #012C45;
    border-radius: 8px;
     &:hover{
        background-color: #0EDAF3;
        color: #012C45;
     }
`
export const LinkCadastro = styled.section`
    display: flex;
    justify-content: center;
    gap: 1vh;
`

// Users
export const Layout = styled.body`
    display: flex;
    flex-wrap: wrap;
`
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
`
export const CardHeader = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20%;
`
export const CardMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
`
export const ImgUser = styled.img`
    border-radius: 100%;
`
export const InfoUser = styled.section`
    list-style: none;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`
export const ButtonCardUser = styled.button`
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
`