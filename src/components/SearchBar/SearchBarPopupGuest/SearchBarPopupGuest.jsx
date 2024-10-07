import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBarPopupGuest.module.css';

import { ReactComponent as Plus } from '@/assets/img/icon/plus.svg';
import { ReactComponent as Minus } from '@/assets/img/icon/minus.svg';

const cx = classNames.bind(styles);

function SearchBarPopupGuest({}) {
	// 지역 함수
	const MAX_COUNT = Object.freeze({
		adultAndKid: 16,
		child: 5,
		animal: 5
	});

	// hooks
	const [guestCount, setGuestCount] = useState({
		adult: 0,
		kids: 0,
		child: 0,
		animal: 0
	});

	// event handler
	const handleClickPlus = (type) => {
		if (type === 'adult' || type === 'kids') {
			if (guestCount.adult + guestCount.kids === MAX_COUNT.adultAndKid) {
				return;
			}
		}

		if (type === 'child' && guestCount.child === MAX_COUNT.child) {
			return;
		}

		if (type === 'animal' && guestCount.animal === MAX_COUNT.animal) {
			return;
		}

		if (guestCount.adult === 0 && type !== 'adult') {
			setGuestCount({
				...guestCount,
				adult: guestCount.adult + 1
			})
		}

		setGuestCount((prevCount) => ({
			...prevCount,
			[type]: prevCount[type] + 1
		}));
	};

	const handleClickMinus = (type) => {
		setGuestCount((prevCount) => ({
			...prevCount,
			[type]: prevCount[type] > 0 ? prevCount[type] - 1 : 0
		}));
	};

	return (
		<div className={cx('searchbar-popup')}>
			<div className={cx('searchbar-popup__section')}>
				<div className={cx('searchbar-guest__titlebox')}>
					<h2 className={cx('searchbar-guest__title')}>성인</h2>
					<p className={cx('searchbar-guest__subtitle')}>13세 이상</p>
				</div>
				<div className={cx('counter-btnbox')}>
					<button
						type="button"
						disabled={(guestCount.adult === 0 || (guestCount.adult === 1 && (guestCount.kids || guestCount.child || guestCount.animal)))}
						className={cx('counter-btn', {
							'counter-btn--disabled': (guestCount.adult === 0 || (guestCount.adult === 1 && (guestCount.kids || guestCount.child || guestCount.animal)))
						})}
						onClick={() => handleClickMinus('adult')}
					>
						<Minus />
					</button>
					<span>{guestCount.adult}</span>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': (guestCount.adult + guestCount.kids) === MAX_COUNT.adultAndKid
					})} onClick={() => handleClickPlus('adult')}>
						<Plus />
					</button>
				</div>
			</div>
			<div className={cx('searchbar-popup__section')}>
				<div className={cx('searchbar-guest__titlebox')}>
					<h2 className={cx('searchbar-guest__title')}>어린이</h2>
					<p className={cx('searchbar-guest__subtitle')}>2~12세</p>
				</div>
				<div className={cx('counter-btnbox')}>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': guestCount.kids === 0
					})} onClick={() => handleClickMinus('kids')}>
						<Minus />
					</button>
					<span>{guestCount.kids}</span>
					<button
					type="button" className={cx('counter-btn', {
						'counter-btn--disabled': (guestCount.adult + guestCount.kids) === MAX_COUNT.adultAndKid
					})} onClick={() => handleClickPlus('kids')}>
						<Plus />
					</button>
				</div>
			</div>
			<div className={cx('searchbar-popup__section')}>
				<div className={cx('searchbar-guest__titlebox')}>
					<h2 className={cx('searchbar-guest__title')}>유아</h2>
					<p className={cx('searchbar-guest__subtitle')}>2세 미만</p>
				</div>
				<div className={cx('counter-btnbox')}>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': guestCount.child === 0
					})} onClick={() => handleClickMinus('child')}>
						<Minus />
					</button>
					<span>{guestCount.child}</span>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': guestCount.child === MAX_COUNT.child
					})} onClick={() => handleClickPlus('child')}>
						<Plus />
					</button>
				</div>
			</div>
			<div className={cx('searchbar-popup__section')}>
				<div className={cx('searchbar-guest__titlebox')}>
					<h2 className={cx('searchbar-guest__title')}>반려동물</h2>
					<p className={cx('searchbar-guest__subtitle')}>보조동물을 동반하시나요?</p>
				</div>
				<div className={cx('counter-btnbox')}>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': guestCount.animal === 0
					})} onClick={() => handleClickMinus('animal')}>
						<Minus />
					</button>
					<span>{guestCount.animal}</span>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': guestCount.animal === MAX_COUNT.animal
					})} onClick={() => handleClickPlus('animal')}>
						<Plus />
					</button>
				</div>
			</div>
		</div>
	)
}

export default SearchBarPopupGuest
