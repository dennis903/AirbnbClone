import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import styles from './SearchBarPopupCalendar.module.css';
import classNames from 'classnames/bind';

import 'react-datepicker/dist/react-datepicker.css';
import './ReactDatePicker.custom.css';

const cx = classNames.bind(styles);

function SearchBarPopupCalendar() {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [activeNav, setActiveNav] = useState({
		date: true,
		month: false,
		flex: false
	});

	const handleChangeRange = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	}

	const handleClickNav = (type) => {
		setActiveNav({
			date: type === 'date',
			month: type === 'month',
			flex: type === 'flex'
		});
	}

	return (
		<div className={cx('searchbar-popup')}>
			<nav className={cx('searchbar-popup__nav')}>
				<ul className={cx('searchbar-popup__nav-list')}>
					<li
						className={cx('searchbar-popup__nav-item', {
							'searchbar-popup__nav-item--on': activeNav.date
						})}
						onClick={() => handleClickNav('date')}
					>
						<button type="button" className={cx('searchbar-popup__btn')}>
							날짜 지정
						</button>
					</li>
					<li
						className={cx('searchbar-popup__nav-item', {
							'searchbar-popup__nav-item--on': activeNav.month
						})}
						onClick={() => handleClickNav('month')}
					>
						<button type="button" className={cx('searchbar-popup__btn')}>
							월 단위
						</button>
					</li>
					<li
						className={cx('searchbar-popup__nav-item', {
							'searchbar-popup__nav-item--on': activeNav.flex
						})}
						onClick={() => handleClickNav('flex')}
					>
						<button type="button" className={cx('searchbar-popup__btn')}>
							유연한 일정
						</button>
					</li>
				</ul>
			</nav>
			<div className={cx('searchbar-popup__main')}>
				<div className={cx('searchbar-calendar')}>
					{activeNav.date && <DatePicker
						inline
						selectsRange
						selected={startDate}
						monthsShown={2}
						minDate={new Date()}
						startDate={startDate}
						endDate={endDate}
						locale={ko}
						dateFormatCalendar={'yyyy년 MM월'}
						onChange={handleChangeRange}
					/>}
				</div>
			</div>
		</div>
	);
}

export default SearchBarPopupCalendar;
