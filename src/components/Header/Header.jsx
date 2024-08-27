import classnames from 'classnames/bind';
import styles from './Header.module.css';
import { AirBnbLogo } from '@/assets/img/airbnb.svg';

const cx = classnames.bind(styles);

function Header() {
	return (
		<header>
			<AirBnbLogo />
		</header>
	)
}

export default Header