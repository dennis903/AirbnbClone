import classNames from 'classnames/bind';
import styles from './SearchBarPopupDestination.module.css';

const cx = classNames.bind(styles);

function SearchBarPopupDestination() {
	return (
		<div className={cx('searchbar-popup')}>
			<div className={cx('searchbar-popup__section')}>
				<h2 className={cx('searchbar-popup__title')}>지역으로 검색하기</h2>
				<div className={cx('continentals')}>
					<button type="button">
						<figure className={cx('continental')}>
							<img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320" />
							<figcaption>유연한 검색</figcaption>
						</figure>
					</button>
					<button type="button">
						<figure className={cx('continental')}>
							<img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" />
							<figcaption>유럽</figcaption>
						</figure>
					</button>
					<button type="button">
						<figure className={cx('continental')}>
							<img src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320" />
							<figcaption>일본</figcaption>
						</figure>
					</button>
					<button type="button">
						<figure className={cx('continental')}>
							<img src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320" />
							<figcaption>동남아시아</figcaption>
						</figure>
					</button>
				</div>
			</div>
			<div className={cx('searchbar-popup__section')}>
				<h2 className={cx('searchbar-popup__title')}>한국</h2>
				<div className={cx('continentals')}>
					<button type="button" className={cx('continental')}>서울</button>
					<button type="button" className={cx('continental')}>부산</button>
					<button type="button" className={cx('continental')}>속초</button>
					<button type="button" className={cx('continental')}>강릉</button>
					<button type="button" className={cx('continental')}>전주</button>
					<button type="button" className={cx('continental')}>대구</button>
					<button type="button" className={cx('continental')}>경주</button>
					<button type="button" className={cx('continental')}>여수</button>
					<button type="button" className={cx('continental')}>서귀포</button>
					<button type="button" className={cx('continental')}>대전</button>
					<button type="button" className={cx('continental')}>제주도</button>
					<button type="button" className={cx('continental')}>인천</button>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default SearchBarPopupDestination


