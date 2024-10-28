// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';

import styles from './MainContent.module.css'

import { ReactComponent as Share } from '@/assets/img/icon/Share.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './Swiper.css';

import { Navigation, Pagination } from 'swiper/modules';

const cx = classNames.bind(styles);
function MainContent() {
	return (
		<div className={cx('main')}>
			<div className={cx('main-content')}>
				<div className={cx('main-content__img')}>
					<Swiper 
					navigation={true}
					pagination={true}
					modules={[Navigation, Pagination]}>
	        	<SwiperSlide><img src='https://picsum.photos/300/300?random=1'/></SwiperSlide>
	       		<SwiperSlide><img src='https://picsum.photos/300/300?random=2'/></SwiperSlide>
	        	<SwiperSlide><img src='https://picsum.photos/300/300?random=3'/></SwiperSlide>
	        	<SwiperSlide><img src='https://picsum.photos/300/300?random=4'/></SwiperSlide>
	        	<SwiperSlide><img src='https://picsum.photos/300/300?random=5'/></SwiperSlide>
	      	</Swiper>
				</div>
				<div className={cx('main-content__btn')}>
					<button type='button' className={cx('share-btn')}>
						<Share />
					</button>
				</div>
				<h2 className={cx('content-title')}>거실에서 펼쳐지는 도자 캣의 단독 공연</h2>
				<p className={cx('content-host')}>호스트: Doja Cat 님</p>
				<p className={cx('content-price')}>예약 마감</p>
			</div>
		</div>
	)
}

export default MainContent;