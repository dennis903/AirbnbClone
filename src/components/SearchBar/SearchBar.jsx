import classNames from 'classnames/bind';

import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '@/assets/img/icon/search.svg';

const cx = classNames.bind(styles);

function SearchBar() {
	return (
		<form className={cx('searchbar')}>
			<fieldset className="searchbar__field">
				<legend className="searchbar__label">여행지</legend>
				<input type="text" className={cx('searchbar__input')} placeholder="여행지 검색" />
			</fieldset>
			<fieldset className="searchbar__field">
				<legend className="searchbar__label">체크인</legend>
				<input type="text" disabled className={cx('searchbar__input')} placeholder="날짜 추가" />
			</fieldset>
			<fieldset className="searchbar__field">
				<legend className="searchbar__label">체크아웃</legend>
				<input type="text" disabled className={cx('searchbar__input')} placeholder="날짜 추가" />
			</fieldset>
			<fieldset className="searchbar__field">
				<legend className="searchbar__label">여행자</legend>
				<input type="text" className={cx('searchbar__input')} placeholder="게스트 추가" />
			</fieldset>
			<button type="submit" className={cx('searchbar__submit')}>
				<SearchIcon width="16" height="16" />
			</button>
		</form>
	)
}

export default SearchBar