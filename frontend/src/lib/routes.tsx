// import { Routes, Route, useParams } from "react-router-dom";
// import ViewNews from '../components/news/ViewNews'
// import ViewLogin from "../components/users/login/ViewLogin";
// import ViewProfile from "../components/users/profile/ViewProfile";
// import ViewRegister from "../components/users/register/ViewRegister";
// import ViewUsers from "../components/users/ViewUsers";

// const MainRoutes = () => {
//     var { id } = useParams()

//     return (
//         <Routes>
//             <Route path="/" element={<ViewNews />} />
//             <Route path="profile" element={<ViewProfile />} />
//             <Route path="/login" element={<ViewLogin />} >
//                 <Route path="users" element={<ViewUsers />} />
//             </Route>
//             <Route path="/register" element={<ViewRegister />} />
//         </ Routes>
//     )
// }

//export default MainRoutes

import { createBrowserRouter } from 'react-router-dom';
import ViewNews from '../components/news/ViewNews';
import ViewLogin from '../components/users/login/ViewLogin';
import ViewProfile from '../components/users/profile/ViewProfile';
import ViewRegister from '../components/users/register/ViewRegister';
import ViewUsers from '../components/users/ViewUsers';

const router = createBrowserRouter([
	{
		path: '/',
		element: <ViewNews />,
	},
	{
		path: '/login',
		element: <ViewLogin />,
	},
	{
		path: '/register',
		element: <ViewRegister />,
	}, {
		path: '/users',
		element: <ViewUsers />,
	},
	{
		path: '/profile/:id',
		element: <ViewProfile />,
	},

]);

export default router;
