import classnames from 'classnames/bind';

import { ReactComponent as SearchIcon } from '@/assets/img/icon/search.svg';

import styles from './SearchBar.module.css';

const cx = classnames.bind(styles);

function SearchBar() {
	return (
		<form className={cx('searchbar', 'searchbar--on')}>
			<fieldset className={cx('searchbar__field')}>
				<div className={cx('searchbar__content', 'searchbar__content--on')}>
					<h2 className={cx('searchbar__title')}>여행지</h2>
					<input type="text" className={cx('searchbar__input')} placeholder="여행지 검색" />
				</div>
			</fieldset>
			<div className={cx('line')} />
			<fieldset className={cx('searchbar__field', 'searchbar__center')}>
				<div className={cx('searchbar__content')}>
					<h2 className={cx('searchbar__title')}>체크인</h2>
					<input type="text" disabled className={cx('searchbar__input')} placeholder="날짜 추가" />
				</div>
				<div className={cx('line')} />
				<div className={cx('searchbar__content')}>
					<h2 className={cx('searchbar__title')}>체크아웃</h2>
					<input type="text" disabled className={cx('searchbar__input')} placeholder="날짜 추가" />
				</div>
			</fieldset>
			<div className={cx('line')} />
			<fieldset className={cx('searchbar__field')}>
				<div className={cx('searchbar__content')}>
					<h2 className={cx('searchbar__title')}>여행자</h2>
					<input type="text" disabled className={cx('searchbar__input')} placeholder="게스트 추가" />
				</div>
				<button type="submit" className={cx('searchbar__submit', 'searchbar__submit--on')}>
					<SearchIcon width="24" height="24" color="#fff" />
					검색
				</button>
			</fieldset>
		</form>
	)
}

export default SearchBar;