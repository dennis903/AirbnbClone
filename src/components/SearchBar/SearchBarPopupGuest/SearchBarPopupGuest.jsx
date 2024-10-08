import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBarPopupGuest.module.css';

import { useSearchBarStore } from '@/store';
import { ReactComponent as Plus } from '@/assets/img/icon/plus.svg';
import { ReactComponent as Minus } from '@/assets/img/icon/minus.svg';

const cx = classNames.bind(styles);

function SearchBarPopupGuest(props) {
	// 전역 변수
	const guestCount = useSearchBarStore((state) => state.guestCount);
	const setGuestCount = useSearchBarStore((state) => state.setGuestCount);
	// 지역 함수
	const MAX_COUNT = Object.freeze({
		adultAndKid: 16,
		child: 5,
		animal: 5
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
			});
		}

		setGuestCount({
			...guestCount,
			[type]: guestCount[type] + 1
		});
	};

	const handleClickMinus = (type) => {
		setGuestCount({
			...guestCount,
			[type]: guestCount[type] > 0 ? guestCount[type] - 1 : 0
		});
	};

	useEffect(() => {
		let guestInputValue = '';

		if (guestCount.adult + guestCount.kids > 0) {
			guestInputValue += `게스트 ${guestCount.adult + guestCount.kids}명`;
		}
		if (guestCount.child > 0) {
			guestInputValue += `, 유아 ${guestCount.child}명`;
		}
		if (guestCount.animal > 0) {
			guestInputValue += `, 반려동물 ${guestCount.animal}마리`;
		}

		props.setGuestInputValue(guestInputValue);
	}, [guestCount]);

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
