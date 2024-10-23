import AppLayout from '@/view/layouts/app.layout';
import Header from '@/components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function OauthPage() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/');
	}, []);

	return (
		<AppLayout>
			<Header />
			<main>
			</main>
		</AppLayout>
	)
}

export default OauthPage;
