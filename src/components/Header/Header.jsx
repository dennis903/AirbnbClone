// External Library
import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Inner Component
import SearchBar from '@/components/SearchBar/SearchBar';

// Image Component
import { ReactComponent as AirBnbLogo } from '@/assets/img/airbnb.svg';
import { ReactComponent as EarthIcon } from '@/assets/img/icon/earth.svg';
import { ReactComponent as HamburgerIcon } from '@/assets/img/icon/hamburger.svg';
import { ReactComponent as UserIcon } from '@/assets/img/icon/user.svg';

// CSS
import styles from './Header.module.css';

const cx = classnames.bind(styles);

function Header() {
	const [isMyinfoPopupOn, setIsMyinfoPopupOn] = useState(false);
	const myInfoPopupRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e, myinfoState) => {
			if (myInfoPopupRef.current &&
				!myInfoPopupRef.current.contains(e.target) && myinfoState) {
				setIsMyinfoPopupOn(false);
			}
		}

		document.addEventListener('click', (e) => handleClickOutside(e, isMyinfoPopupOn));

		return () => {
			document.removeEventListener('click', (e) => handleClickOutside(e));
		};
	}, []);

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
					<button type="button" className={cx('myinfo-btn')} onClick={() => setIsMyinfoPopupOn(true)}>
						<HamburgerIcon width="16" height="16" />
						<UserIcon width="30" height="30" />
					</button>
					{isMyinfoPopupOn && <div className={cx('header-myinfo')} ref={myInfoPopupRef}>
						<ul className={cx('header-myinfo__list')}>
							<li className={cx('header-myinfo__item')}>
								<Link to="/login" className={cx('header-myinfo__link')}>
									로그인
								</Link>
							</li>
							<li className={cx('header-myinfo__item')}>
								<Link to="/" className={cx('header-myinfo__link')}>
									회원가입
								</Link>
							</li>
						</ul>
						<ul className={cx('header-myinfo__list')}>
							<li className={cx('header-myinfo__item')}>
								<Link to="/" className={cx('header-myinfo__link')}>
									당신의 공간을 에어비앤비하세요
								</Link>
							</li>
							<li className={cx('header-myinfo__item')}>
								<Link to="/" className={cx('header-myinfo__link')}>
									체험 호스팅하기
								</Link>
							</li>
							<li className={cx('header-myinfo__item')}>
								<Link to="/" className={cx('header-myinfo__link')}>
									도움말 센터
								</Link>
							</li>
						</ul>
					</div>}
				</div>
			</div>
			<SearchBar />
		</header>
	)
}

export default Header