import styles from './Login.module.css';
import classnames from 'classnames/bind';
import { ReactComponent as NaverLogo } from '@/assets/img/icon/naver-logo.svg';

const cx = classnames.bind(styles);

function Login() {
	return (
		<div className={cx('login')}>
			<h1 className={cx('login__title')}>
				로그인 또는 회원 가입
			</h1>
			<div className={cx('login__main')}>
				<ul className={cx('oauth-list')}>
					<li className={cx('oauth-item')}>
						<a className={cx('oauth-item__link')}>
							<NaverLogo />
							<span>네이버로 로그인하기</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Login;