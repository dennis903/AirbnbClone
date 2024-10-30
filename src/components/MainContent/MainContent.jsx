// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';

import styles from './MainContent.module.css'

import { ReactComponent as Share } from '@/assets/img/icon/share.svg';
import { ReactComponent as ArrowLeftSm } from '@/assets/img/icon/arrow-left-sm.svg';
import { ReactComponent as ArrowRightSm } from '@/assets/img/icon/arrow-right-sm.svg';
import { ReactComponent as Stars } from '@/assets/img/icon/star.svg';

import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.css';

import { Navigation, Pagination } from 'swiper/modules';

const cx = classNames.bind(styles);
function MainContent(props) {

	const formatPrice = (price) => {
		return price.toLocaleString();
	};

	const formatdistance = (distance) => {
		return distance.toLocaleString();
	}

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${month}월 ${day}일`;
	};

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
			<div className={cx('main-content__text')}>
				<h2 className={cx('content-title')}>{props.content.title}</h2>
				<p className={cx('content-text')}>{formatdistance(props.content.distance)}km 거리</p>
				<p className={cx('content-text')}>{formatDate(props.content.startDate)} ~ {formatDate(props.content.endDate)}</p>
				<p className={cx('content-price')}>₩{formatPrice(props.content.price)} /박</p>
				<div className={cx('content-stars')}>
					<Stars />
					<span className={cx('content-stars__text')}>{props.content.stars}</span>
				</div>
			</div>
		</div>
	)
}

export default MainContent;