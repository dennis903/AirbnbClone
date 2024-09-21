/* eslint-disable react/display-name */
import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBarPopupDestination.module.css';

import SearchBarPopupLayout from '../SearchBarPopupLayout/SearchBarPopupLayout';

import { ReactComponent as ArrowRight } from '@/assets/img/icon/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '@/assets/img/icon/arrow-left.svg';

const cx = classNames.bind(styles);

const SCROLL_AMOUNT = 150;

function SearchBarPopupDestination() {
	const scrollRef = useRef(null);
	const [isLeftDisabled, setIsLeftDisabled] = useState(true);
	const [isRightDisabled, setIsRightDisabled] = useState(false);
	const [selectedContinent, setSelectedContinent] = useState('all');
	const locals = {
		korea: [
			'서울', '부산', '속초', '강릉', '전주', '대구', '경주', '여수', '서귀포', '대전', '제주도', '인천'
		],
		all: [
			'오사카', '도쿄', '후쿠오카', '방콕', '런던', '치앙마이', '타이베이', '시드니', '삿포로', '그린델발트', '바르셀로나', '인터라켄'
		],
		eastAsia: [
			'오사카', '도쿄', '후쿠오카', '타이베이', '삿포로', '오키나와', '교토', '나고야', '벳푸', '유후', '히로시마', '나하'
		],
		southeastAsia: [
			'방콕', '치앙마이', '푸켓', '호치민시티', '다낭', '푸꾸옥', '마닐라', '보라카이', '페낭', '발리', '싱가포르', '쿠알라룸푸르'
		],
		europe: [
			'런던', '그린델발트', '바르셀로나', '파리', '로마', '프라하', '베를린', '아발론', '플로렌스', '베니스', '아멜피', '코펜하겐'
		],
		northAmerica: [
			'뉴욕', '로스앤젤레스', '샌프란시스코', '라스베이거스', '시카고', '마이애미', '토론토', '밴쿠버', '몬트리올', '시애틀', '하와이', '앨버타'
		],
		oceania: [
			'시드니', '멜버른', '퀸즈타운', '브리즈번', '골드코스트', '퍼스', '케언즈', '아델레이드', '케언즈', '헤이', '카이로아', '헤이'
		],
		otherAsia: [
			'카이로', '두바이', '이스탄불', '테헤란', '테란', '카라치', '바그다드', '리야드', '아부다비', '아스타나', '쿠웨이트시티', '다카'
		],
		africa: [
			'카이로', '케이프타운', '요하네스버그', '나이로비', '카사블랑카', '모로니', '알제', '루안다', '투니스', '알제', '알제', '알제'
		]
	}

	const handleClickArrowBtn = (e, direction) => {
		e.stopPropagation();

		if (direction === 'right') {
			scrollRef.current.scrollLeft += SCROLL_AMOUNT;
		} else {
			scrollRef.current.scrollLeft -= SCROLL_AMOUNT;
		}
	};

	const handleScroll = () => {
		if (scrollRef.current.scrollLeft === 0) {
			setIsLeftDisabled(true);
		} else {
			setIsLeftDisabled(false);
		}

		if (Math.ceil(scrollRef.current.scrollLeft + scrollRef.current.offsetWidth) === scrollRef.current.scrollWidth) {
			setIsRightDisabled(true);
		} else {
			setIsRightDisabled(false);
		}
	};

	const handleClickContinent = (continent) => {
		setSelectedContinent(continent);
	};

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
					{locals.korea.map((local, index) => (
						<button key={index} type="button" className={cx('local-btn')}>
							{local}
						</button>
					))}
				</div>
			</div>
			<div className={cx('searchbar-popup__section')}>
				<nav className={cx('worldwide-nav')}>
					{!isLeftDisabled && <div className={cx('worldwide-arrow', 'worldwide-arrow--left')} onClick={(e) => handleClickArrowBtn(e, 'left')}>
						<ArrowLeft />
					</div>}
					<ul ref={scrollRef} className={cx('worldwide-list')} onScroll={handleScroll}>
						<li className={cx('worldwide-item', {
							'worldwide-item--selected': selectedContinent === 'all'
						})} onClick={() => handleClickContinent('all')}>
							<span className={cx('worldwide-item__text')}>전 세계</span>
						</li>
						<li className={cx('worldwide-item', {
							'worldwide-item--selected': selectedContinent === 'eastAsia'
						})} onClick={() => handleClickContinent('eastAsia')}>
							<span className={cx('worldwide-item__text')}>동아시아</span>
						</li>
						<li className={cx('worldwide-item', {
							'worldwide-item--selected': selectedContinent === 'southeastAsia'
						})} onClick={() => handleClickContinent('southeastAsia')}>
							<span className={cx('worldwide-item__text')}>동남아시아</span>
						</li>
						<li className={cx('worldwide-item', {
							'worldwide-item--selected': selectedContinent === 'europe'
						})} onClick={() => handleClickContinent('europe')}>
							<span className={cx('worldwide-item__text')}>유럽</span>
						</li>
						<li className={cx('worldwide-item', {
							'worldwide-item--selected': selectedContinent === 'northAmerica'
						})} onClick={() => handleClickContinent('northAmerica')}>
							<span className={cx('worldwide-item__text')}>북남미</span>
						</li>
						<li className={cx('worldwide-item', {
							'worldwide-item--selected': selectedContinent === 'oceania'
						})} onClick={() => handleClickContinent('oceania')}>
							<span className={cx('worldwide-item__text')}>오세아니아</span>
						</li>
						<li className={cx('worldwide-item', {
							'worldwide-item--selected': selectedContinent === 'otherAsia'
						})} onClick={() => handleClickContinent('otherAsia')}>
							<span className={cx('worldwide-item__text')}>기타 아시아 지역</span>
						</li>
						<li className={cx('worldwide-item', {
							'worldwide-item--selected': selectedContinent === 'africa'
						})} onClick={() => handleClickContinent('africa')}>
							<span className={cx('worldwide-item__text')}>아프리카</span>
						</li>
					</ul>
					{!isRightDisabled && <div className={cx('worldwide-arrow', 'worldwide-arrow--right')} onClick={(e) => handleClickArrowBtn(e, 'right')}>
						<ArrowRight />
					</div>}
				</nav>
				<div className={cx('locals')} style={{ marginTop: '24px' }}>
					{locals[selectedContinent].map((local, index) => (
						<button key={index} type="button" className={cx('local-btn')}>
							{local}
						</button>
					))}
				</div>
			</div >
		</SearchBarPopupLayout >
	)
}

export default SearchBarPopupDestination


