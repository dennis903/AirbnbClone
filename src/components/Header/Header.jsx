// External Library
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Inner Component

// Image Component
import { ReactComponent as AirBnbLogo } from '@/assets/img/airbnb.svg';
import { ReactComponent as EarthIcon } from '@/assets/img/icon/earth.svg';
import { ReactComponent as HamburgerIcon } from '@/assets/img/icon/hamburger.svg';
import { ReactComponent as UserIcon } from '@/assets/img/icon/user.svg'; 
import { ReactComponent as SearchIcon } from '@/assets/img/icon/search.svg';

// CSS
import styles from './Header.module.css';

const cx = classnames.bind(styles);

function Header() {
	return (
		<header className={cx('header')}>
			<div className={cx('header-content')}>
				<div className={cx('header-content__left')}>
					<h1 className={cx('title')}>
						<AirBnbLogo width="102" height="32" />
						<span className="blind">AirBnb</span>
					</h1>
				</div>
				<div className={cx('header-content__center')}>
					<button type="button" className={cx('header-btn')}>숙소</button>
					<button type="button" className={cx('header-btn')}>체험</button>
				</div>
				<div className={cx('header-content__right')}>
					<Link to="/" className={cx('header-btn', 'header-btn--link')}>당신의 공간을 에어비앤비하세요</Link>
					<button type="button" className={cx('header-btn')}>
						<EarthIcon width="16" height="16" />
					</button>
					<button type="button" className={cx('myinfo-btn')}>
						<HamburgerIcon width="16" height="16" />
						<UserIcon width="30" height="30" />
					</button>
				</div>
			</div>
			<div className={cx('header-search')}>
				<div className={cx('header-search__content', 'header-search--place')}>
					<button type="button" className={cx('search-btn')}>여행지
						<form>
						<input type="text" value="여행지 검색" className={cx('search-text')}></input>
						</form>
					</button>
				</div>
				<div className={cx('header-search__content', 'header-search--checkin')}>
				<button type="button" className={cx('search-btn')}>체크인
					<p className={cx('search-text')}>날짜 추가</p>
				</button>
				</div>
				<div className={cx('header-search__content', 'header-search--checkout')}>
				<button type="button" className={cx('search-btn')}>체크아웃
					<p className={cx('search-text')}>날짜 추가</p>
				</button>
				</div>
				<div className={cx('header-search__content', 'header-search--guest')}>
				<button type="button" className={cx('search-btn')}>여행자
					<p className={cx('search-text')}>게스트 추가</p>
				</button>
				</div>
				<button type="button" className={cx('search-icon')}>
					<SearchIcon width="16" height="16" />
				</button>	
			</div>
		</header>
	)
}

export default Header