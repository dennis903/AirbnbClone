import classNames from 'classnames/bind';
import styles from './SearchBarPopupDirection.module.css';

const cx = classNames.bind(styles);

function SearchBarPopupDirection() {
	return (
		<div className={cx('searchbar-popup')}>
			<section className={cx('searchbar-popup__section')}>
				<h2 className={cx('searchbar-popup__title')}>지역으로 검색하기</h2>
				<ul className={cx('searchbar-popup__continentals')}>
					<li className={cx('searchbar-popup__continental')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320" />
							<span>유연한 검색</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__continental')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" />
							<span>유럽</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__continental')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<img src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320" />
							<span>일본</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__continental')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<img src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320" />
							<span>동남아시아</span>
						</button>
					</li>
				</ul>
			</section>
			<section className={cx('searchbar-popup__section')}>
				<h2 className={cx('searchbar-popup__title')}>한국</h2>
				<ul className={cx('searchbar-popup__locals')}>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>서울</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>부산</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>속초</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>강릉</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>전주</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>대구</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>경주</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>여수</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>서귀포</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>대전</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>제주도</span>
						</button>
					</li>
					<li className={cx('searchbar-popup__local')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							<span>인천</span>
						</button>
					</li>
				</ul>
			</section>
			<section className={cx('searchbar-popup__section')}>
				<ul className={cx('worldwide-tabs')}>
					<li className={cx('worldwide-tab')}>
						<button type="button" className={cx('worldwide-tab__btn')}>전 세계</button>
					</li>
					<li className={cx('worldwide-tab')}>
						<button type="button" className={cx('worldwide-tab__btn')}>동아시아</button>
					</li>
					<li className={cx('worldwide-tab')}>
						<button type="button" className={cx('worldwide-tab__btn')}>동남아시아</button>
					</li>
					<li className={cx('worldwide-tab')}>
						<button type="button" className={cx('worldwide-tab__btn')}>유럽</button>
					</li>
					<li className={cx('worldwide-tab')}>
						<button type="button" className={cx('worldwide-tab__btn')}>북남미</button>
					</li>
					<li className={cx('worldwide-tab')}>
						<button type="button" className={cx('worldwide-tab__btn')}>오세아니아</button>
					</li>
					<li className={cx('worldwide-tab')}>
						<button type="button" className={cx('worldwide-tab__btn')}>기타 아시아 지역</button>
					</li>
					<li className={cx('worldwide-tab')}>
						<button type="button" className={cx('worldwide-tab__btn')}>아프리카</button>
					</li>
				</ul>
				<div className={cx('worldwide-contents')}>
				</div>
			</section>
		</div>
	)
}

export default SearchBarPopupDirection;
