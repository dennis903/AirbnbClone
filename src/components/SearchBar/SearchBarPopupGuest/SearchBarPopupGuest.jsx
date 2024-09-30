import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBarPopupGuest.module.css';

import { ReactComponent as Plus } from '@/assets/img/icon/plus.svg';
import { ReactComponent as Minus } from '@/assets/img/icon/minus.svg';

const cx = classNames.bind(styles);

function SearchBarPopupGuest() {
	// 지역 함수
	const MAX_COUNT = Object.freeze({
		adultAndKid: 16,
		child: 5,
		animal: 5
	});

	// hooks
	const [isCount, setIsCount] = useState({
		adult: 0,
		kids: 0,
		child: 0,
		animal: 0
	});

	// event handler
	const handleClickPlus = (type) => {
		if (type === 'adult' || type === 'kids') {
			if (isCount.adult + isCount.kids === MAX_COUNT.adultAndKid) {
				return;
			}
		}

		if (type === 'child' && isCount.child === MAX_COUNT.child) {
			return;
		}

		if (type === 'animal' && isCount.animal === MAX_COUNT.animal) {
			return;
		}

		if (isCount.adult === 0 && type !== 'adult') {
			setIsCount({
				...isCount,
				adult: isCount.adult + 1
			})
		}

		setIsCount((prevCount) => ({
			...prevCount,
			[type]: prevCount[type] + 1
		}));
	};

	const handleClickMinus = (type) => {
		setIsCount((prevCount) => ({
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
						disabled={(isCount.adult === 0 || (isCount.adult === 1 && (isCount.kids || isCount.child || isCount.animal)))}
						className={cx('counter-btn', {
							'counter-btn--disabled': (isCount.adult === 0 || (isCount.adult === 1 && (isCount.kids || isCount.child || isCount.animal)))
						})}
						onClick={() => handleClickMinus('adult')}
					>
						<Minus />
					</button>
					<span>{isCount.adult}</span>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': (isCount.adult + isCount.kids) === MAX_COUNT.adultAndKid
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
						'counter-btn--disabled': isCount.kids === 0
					})} onClick={() => handleClickMinus('kids')}>
						<Minus />
					</button>
					<span>{isCount.kids}</span>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': (isCount.adult + isCount.kids) === MAX_COUNT.adultAndKid
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
						'counter-btn--disabled': isCount.child === 0
					})} onClick={() => handleClickMinus('child')}>
						<Minus />
					</button>
					<span>{isCount.child}</span>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': isCount.child === MAX_COUNT.child
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
						'counter-btn--disabled': isCount.animal === 0
					})} onClick={() => handleClickMinus('animal')}>
						<Minus />
					</button>
					<span>{isCount.animal}</span>
					<button type="button" className={cx('counter-btn', {
						'counter-btn--disabled': isCount.animal === MAX_COUNT.animal
					})} onClick={() => handleClickPlus('animal')}>
						<Plus />
					</button>
				</div>
			</div>
		</div>
	)
}

export default SearchBarPopupGuest
