import React, { useEffect } from 'react';
import axiosClient from '@/utils/axios';

function Categories() {
	useEffect(() => {
		(async () => {
			const res = await axiosClient.get('/categories');

			console.log(res.data);

			console.log(res);
		})();
	}, []);


	return (
		<nav>
			<ul>
				<li>카테고리</li>
			</ul>
		</nav>
	)
}

export default Categories;