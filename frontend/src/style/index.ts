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
    padding: 50px;
    border: 0.1px solid gray;
    border-radius: 10px;
    box-shadow: 5px 10px gray;
    width: 100px;
    height: 50px;
    margin: 5px;
`
export const Button = styled.button `
    background-color: blue;
    padding: 5px;
    margin: 10px 10px;
    color: white;
`