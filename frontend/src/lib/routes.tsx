import { Routes, Route, useParams } from "react-router-dom";
import ViewNews from '../components/news/ViewNews'
import ViewLogin from "../components/users/login/ViewLogin";
import ViewProfile from "../components/users/profile/ViewProfile";
import ViewRegister from "../components/users/register/ViewRegister";
import ViewUsers from "../components/users/ViewUsers";

const MainRoutes = () => {
    var { id } = useParams()

    return (
        <Routes>
            <Route path="/" element={<ViewNews />} />
            <Route path="users" element={<ViewUsers />} />
            <Route path="profile" element={<ViewProfile />} />
            <Route path="/login" element={<ViewLogin />} />
            <Route path="/register" element={<ViewRegister />} />
        </ Routes>
    )
}

export default MainRoutes
