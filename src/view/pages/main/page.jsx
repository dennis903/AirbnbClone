import axios from 'axios';
import { Suspense } from 'react';

import AppLayout from '@/view/layouts/app.layout';
import Header from '@/components/Header/Header';
import MainContent from '@/components/MainContent/MainContent';
import MainContentSkeleton from '@/components/MainContent/MainContent.skeleton'
import Category from '@/components/Category/Category';
import { useCategoryStore } from '@/store/index';

import classNames from 'classnames/bind';
import styles from './MainPage.module.css';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function MainPage() {
	const [contents, setContents] = useState([]);
	const { activeCategory } = useCategoryStore();

	useEffect(() => {
		(async () => {
			let res = null;

			if (activeCategory !== '') {
				res = await axios.get(`/api/posts/${activeCategory}`);
			} else {
				res = await axios.get('/api/posts');
			}

			setContents(res.data);
		})();

	}, [activeCategory]);

	return (
		<AppLayout>
			<Header />
			<main>
				<Category />
				{/* <div className={cx('contents')}>
					{contents.map((content) => <MainContent key={content.id} content={content} />)}
				</div> */}
				<div className={cx('contents')}>
					{contents.map((content) => <MainContentSkeleton key={content.id} content={content} />)}
				</div>
			</main>
		</AppLayout>
	)
}

export default MainPage;
