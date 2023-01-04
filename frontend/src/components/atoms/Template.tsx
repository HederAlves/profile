import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Template = () => {

	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default Template;
