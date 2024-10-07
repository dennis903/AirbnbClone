import axios from 'axios';

// Axios 인스턴스 생성
const axiosClient = axios.create({
	baseURL: 'http://localhost:5173/api', // 기본 URL 설정
	timeout: 5000, // 요청 제한 시간 설정 (5초)
	headers: {
		'Content-Type': 'application/json', // 기본 헤더 설정
		// 인증 토큰이 필요한 경우 Authorization 헤더 추가 가능
		// 'Authorization': `Bearer ${yourToken}`,
	},
});

// 요청 인터셉터 설정 (요청을 보내기 전에 작업을 할 수 있음)
axiosClient.interceptors.request.use(
	config => {
		// 요청 보내기 전에 토큰 등을 설정하는 작업
		// 예: config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	error => {
		// 요청 오류 처리
		return Promise.reject(error);
	}
);

// 응답 인터셉터 설정 (응답을 받은 후 작업을 할 수 있음)
axiosClient.interceptors.response.use(
	response => {
		// 성공적인 응답 처리
		return response;
	},
	error => {
		// 응답 오류 처리
		if (error.response) {
			// 서버에서 응답을 받았으나 에러가 발생한 경우
			console.error('Error Response:', error.response.status);
		} else if (error.request) {
			// 요청이 만들어졌으나 응답을 받지 못한 경우
			console.error('No Response:', error.request);
		} else {
			// 요청 설정 중에 발생한 에러
			console.error('Axios Error:', error.message);
		}
		return Promise.reject(error);
	}
);

export default axiosClient;