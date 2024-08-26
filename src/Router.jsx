import { createBrowserRouter } from 'react-router-dom';
import MainPage from './view/pages/main/page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />
	}
]);
