import classNames from 'classnames/bind';
import styles from './SearchBarPopupLayout.module.css';

const cx = classNames.bind(styles);

function SearchBarPopupLayout(props) {
	return (
		<div className={cx('searchbar-popup')} style={{ width: props.width }}>
			{props.children}
		</div>
	)
}

export default SearchBarPopupLayout;
