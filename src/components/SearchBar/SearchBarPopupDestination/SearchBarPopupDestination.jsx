import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBarPopupDestination.module.css';

import SearchBarPopupLayout from '../SearchBarPopupLayout/SearchBarPopupLayout';

import { ReactComponent as ArrowRight } from '@/assets/img/icon/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '@/assets/img/icon/arrow-left.svg';

const cx = classNames.bind(styles);

function SearchBarPopupDestination() {
	const [isLeftEnd, setIsLeftEnd] = useState(true);
	const [isRightEnd, setIsRightEnd] = useState(false);
	const scrollRef = useRef(null);

	const handleScroll = (direction) => {
		const scrollAmount = 151;

		if (direction === 'left') {
			scrollRef.current.scrollLeft -= scrollAmount;
		} else if (direction === 'right') {
			scrollRef.current.scrollLeft += scrollAmount;
		}
	};

	const handleScrollCheck = () => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

			setIsLeftEnd(scrollLeft === 0);
			setIsRightEnd(Math.round(scrollLeft + clientWidth) >= scrollWidth);
		}
	};

	useEffect(() => {
		const scrollElement = scrollRef.current;

		if (scrollElement) {
			scrollElement.addEventListener('scroll', handleScrollCheck);
		}

		return () => {
			if (scrollElement) {
				scrollElement.removeEventListener('scroll', handleScrollCheck);
			}
		}
	}, []);

	return (
		<SearchBarPopupLayout width="475px">
			<div className={cx('searchbar-popup__section')}>
				<h2 className={cx('searchbar-popup__title')}>지역으로 검색하기</h2>
				<div className={cx('continentals')}>
					<div className={cx('continental')}>
						<button type="button" className={cx('continental__btn')}>
							<img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320" />
						</button>
						<span>유연한 검색</span>
					</div>
					<div className={cx('continental')}>
						<button type="button" className={cx('continental__btn')}>
							<img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" />
						</button>
						<span>유럽</span>
					</div>
					<div className={cx('continental')}>
						<button type="button" className={cx('continental__btn')}>
							<img src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320" />
						</button>
						<span>일본</span>
					</div>
					<div className={cx('continental')}>
						<button type="button" className={cx('continental__btn')}>
							<img src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" />
						</button>
						<span>동남아시아</span>
					</div>
				</div>
			</div>
			<div className={cx('searchbar-popup__section')}>
				<h2 className={cx('searchbar-popup__title')}>한국</h2>
				<div className={cx('locals')}>
					<button type="button" className={cx('local-btn')}>서울</button>
					<button type="button" className={cx('local-btn')}>부산</button>
					<button type="button" className={cx('local-btn')}>속초</button>
					<button type="button" className={cx('local-btn')}>강릉</button>
					<button type="button" className={cx('local-btn')}>전주</button>
					<button type="button" className={cx('local-btn')}>대구</button>
					<button type="button" className={cx('local-btn')}>경주</button>
					<button type="button" className={cx('local-btn')}>여수</button>
					<button type="button" className={cx('local-btn')}>서귀포</button>
					<button type="button" className={cx('local-btn')}>대전</button>
					<button type="button" className={cx('local-btn')}>제주도</button>
					<button type="button" className={cx('local-btn')}>인천</button>
				</div>
			</div>
			<div className={cx('searchbar-popup__section')}>
				<nav className={cx('worldwide-nav')}>
					{
						!isLeftEnd &&
						<div className={cx('worldwide-arrow', 'worldwide-arrow--left')} onClick={() => handleScroll('left')}>
							<ArrowLeft />
						</div>
					}

					<ul className={cx('worldwide-list')} ref={scrollRef}>
						<li className={cx('worldwide-item', 'worldwide-item--selected')}>
							<span className={cx('worldwide-item__text')}>전 세계</span>
						</li>
						<li className={cx('worldwide-item')}>동아시아</li>
						<li className={cx('worldwide-item')}>동남아시아</li>
						<li className={cx('worldwide-item')}>유럽</li>
						<li className={cx('worldwide-item')}>북남미</li>
						<li className={cx('worldwide-item')}>오세아니아</li>
						<li className={cx('worldwide-item')}>기타 아시아 지역</li>
						<li className={cx('worldwide-item')}>아프리카</li>
					</ul>
					{
						!isRightEnd &&
						<div className={cx('worldwide-arrow', 'worldwide-arrow--right')} onClick={() => handleScroll('right')}>
							<ArrowRight />
						</div>
					}
				</nav>
				<div className={cx('locals')}>

				</div>
			</div>
		</SearchBarPopupLayout >
	)
}

export default SearchBarPopupDestination


