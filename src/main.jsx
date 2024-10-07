import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

import './main.css';

const enableMocking = async () => {
	const { worker } = await import('./mocks/browser');
	return worker.start();
}

enableMocking().then(() => {
	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
});