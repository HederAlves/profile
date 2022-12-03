import {  Routes, Route } from "react-router-dom";
import ViewNews from '../components/news/ViewNews'
import ViewUsers from '../components/users/ViewUsers'

const  MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<ViewNews />} />
            <Route path="/users" element={<ViewUsers />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
        </ Routes>
    )
}

export default MainRoutes