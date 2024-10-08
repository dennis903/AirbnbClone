import { useState, useRef, useEffect } from 'react';
import classnames from 'classnames/bind';

import SearchBarPopupDestination from './SearchBarPopupDestination/SearchBarPopupDestination';
import SearchBarPopupCalendar from './SearchBarPopupCalendar/SearchBarPopupCalendar';
import SearchBarPopupGuest from './SearchBarPopupGuest/SearchBarPopupGuest';

import { ReactComponent as SearchIcon } from '@/assets/img/icon/search.svg';

import styles from './SearchBar.module.css';

const cx = classnames.bind(styles);

function SearchBar() {
	// 변수 선언
	const searchFormRef = useRef(null);
	const [isSearchBarOn, setIsSearchBarOn] = useState(false);
	const [isContentOn, setIsContentOn] = useState({
		destination: false,
		checkIn: false,
		checkOut: false,
		guest: false
	});
	const [guestInputValue, setGuestInputValue] = useState('');
	const [guestCount, setGuestCount] = useState({
		adult: 0,
		kids: 0,
		child: 0,
		animal: 0
	});

	// 함수 선언
	const handleClickSearchForm = () => {
		setIsSearchBarOn(true);
	};

	const handleClickSearchContent = (type) => {
		setIsContentOn({
			destination: 'destination' === type,
			checkIn: 'checkIn' === type,
			checkOut: 'checkOut' === type,
			guest: 'guest' === type
		});
	};

	// useEffect
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (searchFormRef.current && !searchFormRef.current.contains(e.target)) {
				setIsSearchBarOn(false);
				setIsContentOn({
					destination: false,
					checkIn: false,
					checkOut: false,
					guest: false
				});
			}
		}

		document.addEventListener('click', (e) => handleClickOutside(e));

		return () => {
			document.removeEventListener('click', (e) => handleClickOutside(e));
		}
	}, []);

	return (
		<form
			ref={searchFormRef}
			className={cx('searchbar', {
				'searchbar--on': isSearchBarOn
			})}
			onClick={handleClickSearchForm}
		>
			<fieldset className={cx('searchbar__field')}>
				<div className={cx('searchbar__content', { 'searchbar__content--on': isContentOn.destination })} onClick={() => handleClickSearchContent('destination')}>
					<h2 className={cx('searchbar__title')}>여행지</h2>
					<input type="text" className={cx('searchbar__input')} placeholder="여행지 검색" />
				</div>
				{isContentOn.destination && <SearchBarPopupDestination />}
			</fieldset>
			<div className={cx('line')} />
			<fieldset className={cx('searchbar__field', 'searchbar__center')}>
				<div className={cx('searchbar__content', { 'searchbar__content--on': isContentOn.checkIn })} onClick={() => handleClickSearchContent('checkIn')}>
					<h2 className={cx('searchbar__title')}>체크인</h2>
					<input type="text" disabled className={cx('searchbar__input')} placeholder="날짜 추가" />
				</div>
				<div className={cx('line')} />
				<div className={cx('searchbar__content', { 'searchbar__content--on': isContentOn.checkOut })} onClick={() => handleClickSearchContent('checkOut')}>
					<h2 className={cx('searchbar__title')}>체크아웃</h2>
					<input type="text" disabled className={cx('searchbar__input')} placeholder="날짜 추가" />
				</div>
				<SearchBarPopupCalendar />
			</fieldset>
			<div className={cx('line')} />
			<fieldset className={cx('searchbar__field')}>
				<div className={cx('searchbar__content', { 'searchbar__content--on': isContentOn.guest })} onClick={() => handleClickSearchContent('guest')}>
					<h2 className={cx('searchbar__title')}>여행자</h2>
					<input type="text" disabled className={cx('searchbar__input', 'searchbar__input--guest')} value={guestInputValue} placeholder="게스트 추가" />
				</div>
				{isContentOn.guest &&
					<SearchBarPopupGuest
						setGuestInputValue={setGuestInputValue}
						guestCount={guestCount}
						setGuestCount={setGuestCount}
					/>}
				<button
					type="button"
					className={cx('searchbar__submit', {
						'searchbar__submit--on': isSearchBarOn
					})}
				>
					<SearchIcon width="24" height="24" color="#fff" />
					{isSearchBarOn && <span className={cx('submit-title')}>검색</span>}
				</button>
			</fieldset>
		</form >
	)
}

export default SearchBar;