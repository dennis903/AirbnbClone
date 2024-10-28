// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';

import styles from './MainContent.module.css'

import { ReactComponent as Share } from '@/assets/img/icon/share.svg';
import { ReactComponent as ArrowLeftSm } from '@/assets/img/icon/arrow-left-sm.svg';
import { ReactComponent as ArrowRightSm } from '@/assets/img/icon/arrow-right-sm.svg';

import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.css';

import { Navigation, Pagination } from 'swiper/modules';

const cx = classNames.bind(styles);
function MainContent(props) {
	return (
		<div className={cx('main-content')}>
			<div className={cx('main-content__img')}>
				<Swiper
					navigation={{
						nextEl: '.swiper-navi__right .swiper-navi__btn',
						prevEl: '.swiper-navi__left .swiper-navi__btn'
					}}
					pagination={true}
					modules={[Navigation, Pagination]}
				>
					{props.content.images.map((image, index) => {
						return (
							<SwiperSlide key={index}>
								<img src={image} className={cx('slide-img')} />
							</SwiperSlide>
						)
					})}
					<div className="swiper-navi">
						<div className="swiper-navi__left">
							<button type="button" className="swiper-navi__btn">
								<ArrowLeftSm />
							</button>
						</div>
						<div className="swiper-navi__right">
							<button type="button" className="swiper-navi__btn">
								<ArrowRightSm />
							</button>
						</div>
					</div>
				</Swiper>
			</div>
			<div className={cx('main-content__btn')}>
				<button type='button' className={cx('share-btn')}>
					<Share />
				</button>
			</div>
			<h2 className={cx('content-title')}>{props.content.title}</h2>
			<p className={cx('content-text')}>{props.content.distance}</p>
			<p className={cx('content-text')}>{props.content.startDate} ~ {props.content.endDate}</p>
			<p className={cx('content-price')}>{props.content.price}</p>
		</div>
	)
}

export default MainContent;