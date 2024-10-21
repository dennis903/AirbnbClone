import { http, HttpResponse } from 'msw'

export const handlers = [
	http.get('/api/rental-list', () => {
		return HttpResponse.json([
			{
				id: 1,
				title: 'Shinano, Kamiminochi District, 일본의 초소형 주택',
				startDate: '2024-12-15',
				endDate: '2024-12-20',
				price: 644081,
				images: [
					'https://a0.muscache.com/im/pictures/b2c0f556-f726-4db8-985f-25a668369fe7.jpg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/9a171a31-bc08-4254-98c7-b996121aa32b.jpg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/d6dc46ed-36dd-4bba-99af-d4cd8793bde6.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk1NTY5MzE%3D/original/394f3e57-0add-42b9-9554-7addf050db97.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk1NTY5MzE%3D/original/d784037a-076e-4001-bb08-33a382291ebb.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk1NTY5MzE%3D/original/08fd5959-aa09-450f-a10e-164443f5a43b.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-49556931/original/631b7b29-125f-44ae-a013-e3838354eff5.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/731fe016-76b5-475b-aecc-013c02af039f.jpg?im_w=720'
				],
				category: 'log-cabin',
				stars: 4.94,
				distance: 998
			},
			{
				id: 2,
				title: '인도 Jibhi',
				startDate: '2024-11-2',
				endDate: '2024-11-7',
				price: 105797,
				images: [
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-23780166/original/484e7ed5-2e36-4f29-baa7-1c06c47f94c7.jpeg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-23780166/original/50af80d8-e7c3-43f7-86ce-23aba0d40cb6.jpeg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-23780166/original/cae484b5-1bf8-4743-a6b3-739d83cd4372.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/a0a08e14-c8e9-4e20-945a-6bbb6635a5a1.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/65d5a0f2-ea52-4450-b83c-e3f55537c98c.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0414f8f5-07e5-48ab-93f9-95a53a348f91.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/680c3caa-83b6-449b-83c9-662a71646eb9.jpeg?im_w=720'
				],
				category: 'log-cabin',
				stars: 4.89,
				distance: 4542
			},
			{
				id: 3,
				title: '인도 Jibhi',
				startDate: '2024-10-24',
				endDate: '2024-10-29',
				price: 217375,
				images: [
					'https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/827b7144-bfa4-4bb0-bd69-02579295bf9b.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/350b2b63-6075-4217-9ffe-0c5a9bf7afde.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/30468927-4c4b-489c-bd98-7ff307787c40.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODUxMjIxNDU3MDY5MTU5NDE2/original/2d272d04-0551-4823-ab68-3b7e3b803973.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/b95a0c8f-eeae-4878-896c-97389437a3cf.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/4bd50ff5-dc85-4417-a14b-3f9124701b8e.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/fd92afb1-1864-4eb2-8027-d0a5f0d3b22f.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/dd63b8f5-0962-412c-92a4-f01ca7036f11.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/747a7ae4-4b36-4eaa-941e-1ac20fabbce7.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/ae8f8981-9875-428e-90e3-41e4c9be857e.jpeg?im_w=720'
				],
				category: 'log-cabin',
				stars: 4.94,
				distance: 4542
			},
			{
				id: 4,
				title: 'Hwachon-myeon, Hongcheon, 한국의 통나무집 전체',
				startDate: '2024-10-24',
				endDate: '2024-10-29',
				guestTalk: '공기 좋고 고즈넉한 숙소...',
				price: 164202,
				images: [
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/32e8b4a0-83ff-4dba-8253-5340d8d05215.jpg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/a9caa9b8-3029-4f0b-b6f8-0ed33e8006b4.jpg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/a96d426b-458f-423e-b0a4-bb76adc42dc2.jpg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/fc57f7a1-a19c-474c-b860-2041dc3fc39d.jpg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/bd9c926c-0947-4767-a9df-a55899cf855e.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/a3a97624-c605-4588-95e3-7796109072a8.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/8fec0321-d5d1-4169-80f8-3dba1b5564f9.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/a39e2a3d-ef31-4957-ae6d-134312f04151.jpg?im_w=720'
				],
				category: 'log-cabin',
				stars: 4.88,
				distance: 93
			},
			{
				id: 5,
				title: '인도 Shimla',
				startDate: '2024-10-15',
				endDate: '2024-10-20',
				price: 130292,
				images: [
					'https://a0.muscache.com/im/pictures/decd42a0-ffa4-4dd3-bcc3-82aba3fca838.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/647f2ceb-af8e-432b-b3c6-a4816a1e8ddb.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/a4652e95-d641-47a5-bf8e-4b2afc896219.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/efb4d6cd-5070-49c5-8977-e507816d93af.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/fe915035-4429-4c3a-8c59-7d29c969aef4.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/4e4360cc-fbf2-4fc9-a1c3-737e8778dfb4.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/dac7c06f-9b62-402c-83a0-99c61018f49c.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/3bd232af-9cba-455a-a655-c979e6f11fe2.jpg?im_w=720'
				],
				category: 'log-cabin',
				stars: 4.86,
				distance: 4537
			},
			{
				id: 6,
				title: '일본 Nago',
				startDate: '2024-11-29',
				endDate: '2024-12-4',
				price: 1767867,
				images: [
					'https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/299f89ab-b4b5-4120-99ca-f6c5ae0b10dc.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/a04b03fc-a5de-4629-9811-7fd14d3b447c.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/c0e3bc7d-bc48-431c-a656-0d3b1faf6f11.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/bd2611f0-3fa2-47c7-8caf-bbfe5a8498d1.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/6692c0b0-b212-4aa8-a600-86d03e53bf24.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/2292f887-aac5-4a51-8d08-24833a78b637.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/5b187a60-0fb3-405b-abaa-d65aad7529b2.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/e645f560-6aeb-4b96-98d8-bc52b9ee74df.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-824254092645253914/original/3a2fa542-3b12-44a5-b104-336a8cdbcc24.jpeg?im_w=720'
				],
				category: 'log-cabin',
				stars: 5.0,
				distance: 1224
			},
			{
				id: 7,
				title: '한국 조천읍, 제주시',
				startDate: '2024-10-16',
				endDate: '2024-10-21',
				price: 83534,
				images: [
					'https://a0.muscache.com/im/pictures/fea3dd7f-f50f-4655-9350-3378a041fa58.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/ce0a6984-9118-48d7-a400-3a78fab57b7e.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/c1f99dd7-dbc3-49e1-a5ae-c30b4c9fcfe3.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/82b25575-d0e4-4d87-90c1-b4967fd20910.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/f88a7d1a-0c5d-49f7-824f-7f1fe202e4d0.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/01ac866b-93b5-4e19-a4c0-fe23d776cd1d.jpg?im_w=720',
					'https://a0.muscache.com/im/pictures/e46a689c-4156-4ba5-a753-e606e7ec891f.jpg?im_w=720'
				],
				category: 'log-cabin',
				stars: 4.86,
				distance: 454
			},
			{
				id: 8,
				title: 'Kecamatan Tegallalang, 인도네시아의 저택 전체',
				startDate: '2024-11-29',
				endDate: '2024-12-4',
				guestTalk: '머물기 너무 좋은 숙소였어요.',
				price: 146945,
				images: [
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-624851999765243683/original/16fbcfa9-3270-44fc-be40-65f2a3ac1544.jpeg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-624851999765243683/original/01bc4518-423e-4765-88fe-9982b5814267.jpeg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-624851999765243683/original/0f81b411-c5b7-416f-bc19-c8ef916a9c4a.jpeg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjI0ODUxOTk5NzY1MjQzNjgz/original/a9a25f85-18ad-4b02-8d56-4ceaf762c9ad.png?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-624851999765243683/original/ad6676e6-fade-465f-a572-c80f568a9323.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-624851999765243683/original/54cb248e-1266-4208-9d9d-49b0a778e617.jpeg?im_w=720'
				],
				category: 'log-cabin',
				stars: 4.91,
				distance: 5262
			},
			{
				id: 9,
				title: 'Kecamatan Sukasada, 인도네시아의 통나무집 전체',
				startDate: '2024-11-8',
				endDate: '2024-11-13',
				price: 186542,
				images: [
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-784291198551757159/original/9c2eafcb-79a7-422e-b9c4-4229632ed494.jpeg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-784291198551757159/original/3520c731-302f-42b2-8ff1-90c641382adb.jpeg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-784291198551757159/original/12500f38-84ed-486f-abc9-c166e7dd602c.jpeg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/143eac5b-b492-4294-a894-13f9ea2f8334.jpg?im_w=720',
					'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-784291198551757159/original/e3baaa77-c2e3-4dce-bfb0-b67a128a8ab3.jpeg?im_w=720',
					'https://a0.muscache.com/im/pictures/miso/Hosting-784291198551757159/original/9d504176-4d84-497e-886e-a92d3eacf22b.jpeg?im_w=720'
				],
				category: 'log-cabin',
				stars: 4.99,
				distance: 217135
			}
		])
	}),
]
