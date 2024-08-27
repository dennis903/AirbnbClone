import classnames from 'classnames/bind';
import styles from './Header.module.css';
import { ReactComponent as AirBnbLogo } from '@/assets/img/airbnb.svg';

const cx = classnames.bind(styles);

function Header() {
	return (
		<header>
			<AirBnbLogo width="120" height="100%" />
		</header>
	)
}

export default Header