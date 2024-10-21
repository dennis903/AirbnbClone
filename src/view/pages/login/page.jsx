import AppLayout from '@/view/layouts/app.layout';
import Header from '@/components/Header/Header';
import Login from '@/components/Login/Login';

function LoginPage() {
	return (
		<AppLayout>
			<Header />
			<main>
				<Login />
			</main>
		</AppLayout>
	)
}

export default LoginPage;
