import { createBrowserRouter } from 'react-router-dom';
import MainPage from './view/pages/main/page';
import LoginPage from './view/pages/login/page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />
	},
	{
		path: '/login',
		element: <LoginPage />
	}
]);
