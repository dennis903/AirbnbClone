import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import styles from './SearchBarPopupCalendar.module.css';
import classNames from 'classnames/bind';

import 'react-datepicker/dist/react-datepicker.css';
import './ReactDatePicker.custom.css';

const cx = classNames.bind(styles);

function SearchBarPopupCalendar() {


	return (
		<div className={cx('searchbar-popup')}>
			<nav className={cx('searchbar-popup__nav')}>
				<ul className={cx('searchbar-popup__nav-list')}>
					<li className={cx('searchbar-popup__nav-item', 'searchbar-popup__nav-item--on')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							날짜 지정
						</button>
					</li>
					<li className={cx('searchbar-popup__nav-item')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							월 단위
						</button>
					</li>
					<li className={cx('searchbar-popup__nav-item')}>
						<button type="button" className={cx('searchbar-popup__btn')}>
							유연한 일정
						</button>
					</li>
				</ul>
			</nav>
			<div className={cx('searchbar-popup__main')}>
				<DatePicker
					inline
					selectsRange
					monthsShown={2}
					minDate={new Date()}
					startDate={new Date()}
					endDate={new Date().setDate(new Date().getDate() + 3)}
					locale={ko}
					dateFormatCalendar={'yyyy년 MM월'}
				/>
			</div>
		</div>
	);
}

export default SearchBarPopupCalendar;
