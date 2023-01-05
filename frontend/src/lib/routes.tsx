import { createBrowserRouter } from 'react-router-dom';
import ViewLogin from '../components/users/login/ViewLogin';
import ViewProfile from '../components/users/profile/ViewProfile';
import ViewRegister from '../components/users/register/ViewRegister';
import ViewUsers from '../components/users/ViewUsers';

const router = createBrowserRouter([
	{
		path: '/',
		element: <ViewLogin />,
	},
	{
		path: '/cadastro',
		element: <ViewRegister />,
	}, {
		path: '/usuarios',
		element: <ViewUsers />,
	},
	{
		path: '/perfil/:id',
		element: <ViewProfile />,
	},

]);

export default router;

// import { Routes, Route, useParams } from "react-router-dom";
// import ViewNews from '../components/news/ViewNews'
// import ViewLogin from "../components/users/login/ViewLogin";
// import ViewProfile from "../components/users/profile/ViewProfile";
// import ViewRegister from "../components/users/register/ViewRegister";
// import ViewUsers from "../components/users/ViewUsers";

// const MainRoutes = () => {

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