import {useState} from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBarPopupGuest.module.css';

import SearchBarPopupLayout from '../SearchBarPopupLayout/SearchBarPopupLayout';

import { ReactComponent as Plus } from '@/assets/img/icon/plus.svg';
import { ReactComponent as Minus } from '@/assets/img/icon/minus.svg';

const cx = classNames.bind(styles);

function SearchBarPopupGuest() {
	const [isCount, setIsCount] = useState({
    adult: 0,
    kids: 0,
    child: 0,
    animal: 0,
  });

	const maxCount = {
    adult: 16,
    kids: 15,
    child: 5,
    animal: 5,
  };

  const handleClickPlus = (type) => {
    setIsCount((prevCount) => ({
      ...prevCount,
      [type]: prevCount[type] + 1,
    }));
  };

  const handleClickMinus = (type) => {
    setIsCount((prevCount) => ({
      ...prevCount,
      [type]: prevCount[type] > 0 ? prevCount[type] - 1 : 0
    }));
  };

	return (
		<SearchBarPopupLayout width="406px">
				<div className={cx('searchbar-popup__section')}>
					<div className={cx('searchbar-guest__titlebox')}>
						<h2 className={cx('searchbar-guest--title')}>성인</h2>
						<p className={cx('searchbar-guest--subtitle')}>13세 이상</p>
					</div>
					<div className={cx('counter-btnbox')}>
						<button type="button" className={cx('counter-btn')} onClick={() => handleClickMinus('adult')}>
							<Minus />
						</button>
							<span>{isCount.adult}</span>
						<button type="button" className={cx('counter-btn')} onClick={() => handleClickPlus('adult')}>
							<Plus />
						</button>
					</div>
				</div>	
				<div className={cx('searchbar-popup__section')}>
					<div className={cx('searchbar-guest__titlebox')}>
						<h2 className={cx('searchbar-guest--title')}>어린이</h2>
						<p className={cx('searchbar-guest--subtitle')}>2~12세</p>
					</div>
					<div className={cx('counter-btnbox')}>
						<button type="button" className={cx('counter-btn')} onClick={() => handleClickMinus('kids')}>
							<Minus />
						</button>
							<span>{isCount.kids}</span>
						<button type="button" className={cx('counter-btn')} onClick={() => handleClickPlus('kids')}>
							<Plus />
						</button>
					</div>
				</div>	
				<div className={cx('searchbar-popup__section')}>
					<div className={cx('searchbar-guest__titlebox')}>
						<h2 className={cx('searchbar-guest--title')}>유아</h2>
						<p className={cx('searchbar-guest--subtitle')}>2세 미만</p>
					</div>
					<div className={cx('counter-btnbox')}>
						<button type="button" className={cx('counter-btn')} onClick={() => handleClickMinus('child')}>
							<Minus />
						</button>
							<span>{isCount.child}</span>
						<button type="button" className={cx('counter-btn')} onClick={() => handleClickPlus('child')}>
							<Plus />
						</button>
					</div>
				</div>	
				<div className={cx('searchbar-popup__section')}>
					<div className={cx('searchbar-guest__titlebox')}>
						<h2 className={cx('searchbar-guest__title')}>반려동물</h2>
						<p className={cx('searchbar-guest--subtitle')}>보조동물을 동반하시나요?</p>
					</div>
					<div className={cx('counter-btnbox')}>
						<button type="button" className={cx('counter-btn')} onClick={() => handleClickMinus('animal')}>
							<Minus />
						</button>
							<span>{isCount.animal}</span>
						<button type="button" className={cx('counter-btn')} onClick={() => handleClickPlus('animal')}>	
							<Plus />
						</button>
					</div>
				</div>
		</SearchBarPopupLayout>
	)
}

export default SearchBarPopupGuest
