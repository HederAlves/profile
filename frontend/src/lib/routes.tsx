import { Routes, Route, useParams } from "react-router-dom";
import ViewNews from '../components/news/ViewNews'
import ViewLogin from "../components/users/login/ViewLogin";
import ViewProfile from "../components/users/profile/ViewProfile";
import ViewRegister from "../components/users/register/ViewRegister";
import ViewUsers from "../components/users/ViewUsers";

interface IProps { id: string }

const MainRoutes = (props: IProps) => {
    var { id } = props;


    return (
        <Routes>
            <Route path="/" element={<ViewNews />} />
            <Route path="users" element={<ViewUsers />}>
                <Route path='"users"+{id}' element={<ViewProfile />} />
            </Route>
            <Route path="/login" element={<ViewLogin />} />
            <Route path="/register" element={<ViewRegister />} />
        </ Routes>
    )
}

export default MainRoutes
