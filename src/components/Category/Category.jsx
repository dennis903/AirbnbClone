import classNames from 'classnames/bind';

import styles from './Category.module.css';
import { useCategoryStore } from '@/store/index';

const cx = classNames.bind(styles);

function Category() {
	const { activeCategory, setActiveCategory } = useCategoryStore();

	return (
		<div className={cx('category')}>
			<div className={cx('category__icon', {
				'category__icon--active': activeCategory === 'minihouse'
			})} onClick={() => setActiveCategory('minihouse')}>
				<img src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="" width="24" height="24" />
				<h2 className={cx('category__title')}>작은집</h2>
			</div>
			<div className={cx('category__icon', {
				'category__icon--active': activeCategory === 'popular'
			})} onClick={() => setActiveCategory('popular')}>
				<img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" width="24" height="24" />
				<h2 className={cx('category__title')}>최고의 전망</h2>
			</div>
			<div className={cx('category__icon')}>
				<img src="https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg" alt="" width="24" height="24" />
				<h2 className={cx('category__title')}>한옥</h2>
			</div>
			<div className={cx('category__icon')}>
				<img src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" alt="" width="24" height="24" />
				<h2 className={cx('category__title')}>복토 주택</h2>
			</div>
		</div>
	)
}

export default Category
