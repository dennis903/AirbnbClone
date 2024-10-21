import { useEffect } from 'react';

function Categories() {
	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:5173/api/user', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await res.json();

			console.log(data);
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