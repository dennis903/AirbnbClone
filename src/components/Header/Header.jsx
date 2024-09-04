import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { ReactComponent as AirBnbLogo } from '@/assets/img/airbnb.svg';
import { ReactComponent as EarthIcon } from '@/assets/img/icon/earth.svg';
import { ReactComponent as HamburgerIcon } from '@/assets/img/icon/hamburger.svg';
import { ReactComponent as UserIcon } from '@/assets/img/icon/user.svg';

import SearchBar from '@/components/SearchBar/SearchBar';

const cx = classnames.bind(styles);

function Header() {
	return (
		<header className={cx('header')}>
			<div className={cx('header-contents')}>
				<h1>
					<Link to="/">
						<AirBnbLogo width="102" height="32" />
					</Link>
				</h1>
				<div className={cx('header-contents__center')}>
					<div className={cx('header-contents__select')}>
						<button type="button" className={cx('button', 'header-contents__select-btn')}>숙소</button>
						<button type="button" className={cx('button', 'header-contents__select-btn')}>체험</button>
					</div>
				</div>
				<div className={cx('header-contents__right')}>
					<Link to="/" className={cx('button', 'find-airbnb')}>당신의 공간을 에어비엔비하세요.</Link>
					<button type="button" className={cx('button', 'icon-earth')}>
						<EarthIcon width="16" height="16" />
					</button>
					<div className={cx('user-menubar')}>
						<div className={cx('user-menubar__icon')}>
							<HamburgerIcon width="16" height="16" />
						</div>
						<div className={cx('user-menubar__icon')}>
							<UserIcon width="30" height="30" />
						</div>
					</div>
				</div>
			</div>
			<SearchBar />
		</header>
	)
}

export default Header