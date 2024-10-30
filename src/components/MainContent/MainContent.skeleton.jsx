import classNames from 'classnames/bind';

import styles from './MainContent.module.css';

const cx = classNames.bind(styles);

function MainContentSkeleton() {
	return (
		<div className={cx('main-content')}>
			<div className={cx('main-content__img--skeleton')} />
			<div className={cx('main-content__text--skeleton')}>
				<div className={cx('content-header--skeleton')}>
					<h2 className={cx('content-header__title--skeleton')} />
					<div className={cx('stars--skeleton')} />
				</div>
				<p className={cx('content-text--skeleton')} />
				<p className={cx('content-text--skeleton')} />
				<p className={cx('content-price--skeleton')} />
			</div>
		</div>
	)
}

export default MainContentSkeleton;