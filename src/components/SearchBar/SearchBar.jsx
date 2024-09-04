import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '@/assets/img/icon/search.svg';

const cx = classNames.bind(styles);

function SearchBar() {
	const [isSearchbarFocused, setIsSearchbarFocused] = useState(false);
	const searchbarRef = useRef(null);

	const handleFocus = () => {
		setIsSearchbarFocused(true);
	};

	const handleClickOutside = (e) => {
		if (searchbarRef.current && !searchbarRef.current.contains(e.target)) {
			setIsSearchbarFocused(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<form
			ref={searchbarRef}
			className={cx('searchbar', {
				'searchbar--focused': isSearchbarFocused,
			})}
		>
			<fieldset className={cx('searchbar__field')}>
				<div className={cx('searchbar__content', 'searchbar__content--focused')} onClick={handleFocus}>
					<legend className={cx('searchbar__title')}>여행지</legend>
					<input
						type="text"
						placeholder="여행지 검색"
						className={cx('searchbar__input')}
					/>
				</div>
			</fieldset>
			<div className={cx('line')} />
			<fieldset className={cx('searchbar__field')}>
				<div className={cx('searchbar__content')} onClick={handleFocus}>
					<legend className={cx('searchbar__title')}>체크인</legend>
					<input
						type="text"
						disabled
						className={cx('searchbar__input')}
						placeholder="날짜 추가"
					/>
				</div>
				<div className={cx('line')} />
				<div className={cx('searchbar__content')} onClick={handleFocus}>
					<legend className={cx('searchbar__title')}>체크아웃</legend>
					<input
						type="text"
						disabled
						className={cx('searchbar__input')}
						placeholder="날짜 추가"
					/>
				</div>
			</fieldset>
			<div className={cx('line')} />
			<fieldset className={cx('searchbar__field')}>
				<div className={cx('searchbar__content')} onClick={handleFocus}>
					<legend className={cx('searchbar__title')}>여행자</legend>
					<input
						type="text"
						placeholder="게스트 추가"
						disabled
						className={cx('searchbar__input')}
					/>
				</div>
			</fieldset>
			<button
				type="submit"
				className={cx('searchbar__submit', {
					'searchbar__submit--active': isSearchbarFocused,
				})}
			>
				<SearchIcon width="16" height="16" />
				<span className={cx('searchbar__submit-text')}>검색</span>
			</button>
		</form>
	);
}

export default SearchBar;