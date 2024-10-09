import { useState } from 'react';
import styles from './SearchBarPopupCalendar.module.css';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';
import { addYears } from 'date-fns';
import { ko } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import './ReactDatePicker.custom.css';

const cx = classNames.bind(styles);

function SearchBarPopupCalendar() {
	const [calendarNavOn, setCalendarNavOn] = useState({
		date: true,
		month: false,
		flex: false
	});
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(null);

	const handleClickCalendarNav = (type) => {
		setCalendarNavOn({
			date: type === 'date',
			month: type === 'month',
			flex: type === 'flex'
		});
	};

	const handleChangeCalenderDate = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	return (
		<div className={cx('searchbar-popup')}>
			<div className={cx('searchbar-calendar')}>
				<nav className={cx('searchbar-calendar__nav')}>
					<button type="button" className={cx('searchbar-calendar__nav-btn', {
						'searchbar-calendar__nav-btn--active': calendarNavOn.date
					})} onClick={() => handleClickCalendarNav('date')}>날짜 지정</button>
					<button type="button" className={cx('searchbar-calendar__nav-btn', {
						'searchbar-calendar__nav-btn--active': calendarNavOn.month
					})} onClick={() => handleClickCalendarNav('month')}>월 단위</button>
					<button type="button" className={cx('searchbar-calendar__nav-btn', {
						'searchbar-calendar__nav-btn--active': calendarNavOn.flex
					})} onClick={() => handleClickCalendarNav('flex')}>유연한 일정</button>
				</nav>
				<div className={cx('searchbar-calendar__main')}>
					<DatePicker
						selected={startDate}
						onChange={handleChangeCalenderDate}
						startDate={startDate}
						endDate={endDate}
						minDate={new Date()}
						maxDate={addYears(new Date(), 2)}
						dateFormatCalendar={"yyyy년 MM월"}
						selectsRange
						monthsShown={2}
						inline
						locale={ko}
						showDisabledMonthNavigation
					/>
				</div>
			</div>
		</div>
	)
}

export default SearchBarPopupCalendar;
