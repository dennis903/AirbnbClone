import AppLayout from '@/view/layouts/app.layout';
import Header from '@/components/Header/Header';
import MainContent from '@/components/MainContent/MainContent';

function MainPage() {
	return (
		<AppLayout>
			<Header />
			<main>
				<MainContent />
			</main>
		</AppLayout>
	)
}

export default MainPage;
