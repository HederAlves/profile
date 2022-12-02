import styled from "styled-components"

export const Header = styled.header`
    margin: 0px 15px;
` 
export const Layout = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Card = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 30px 50px 60px 50px;
    border: 0.1px solid gray;
    border-radius: 10px;
    box-shadow: 5px 10px gray;
    width: 150px;
    height: 100px;
    margin: 5px;
`
export const Button = styled.button`
    background-color: blue;
    padding: 5px;
    margin: 10px 10px;
    color: white;
`
export const Input = styled.input`
    width: 80px;
    margin-top: 5px;
    height:10px
`