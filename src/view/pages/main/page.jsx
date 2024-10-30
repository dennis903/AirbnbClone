import axios from 'axios';

import AppLayout from '@/view/layouts/app.layout';
import Header from '@/components/Header/Header';
import MainContent from '@/components/MainContent/MainContent';
import Category from '@/components/Category/Category';

import classNames from 'classnames/bind';
import styles from './MainPage.module.css';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function MainPage() {
	const [contents, setContents] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await axios.get('/api/posts');
				console.log(res);

			setContents(res.data);
		})();

	}, []);

	return (
		<AppLayout>
			<Header />
			<main>
				<Category />
				<div className={cx('contents')}>
					{contents.map((content) => <MainContent key={content.id} content={content} />)}
				</div>
			</main>
		</AppLayout>
	)
}

export default MainPage;
