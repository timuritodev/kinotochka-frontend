import { useNavigate } from 'react-router';
import jwtDecode from 'jwt-decode';
import Button from 'src/components/Button/Button';

import './Auth.css';
import { useEffect } from 'react';
// import { setUser } from 'src/services/redux/slices/user/user';
// import { useAppDispatch } from 'src/services/typeHooks';

const ConfirmEmailPage = () => {
	const navigate = useNavigate();
	// const dispatch = useAppDispatch();

	const getTokenFromURL = () => {
		const url = window.location.href;
		const tokenStartIndex = url.indexOf('eyJ');

		if (tokenStartIndex !== -1) {
			const token = url.substring(tokenStartIndex);
			return token;
		}

		return null;
	};

	useEffect(() => {
		const token = getTokenFromURL();

		if (token) {
			try {
				const decodedToken: { email: string } = jwtDecode(token);
				console.log('decodedToken', decodedToken);
				// dispatch(
				// 	setUser({
				// 		email: decodedToken.email,
				// 		// fav_genres: decodedToken.fav_genres,
				// 	})
				// );
			} catch (error: any) {
				console.error('Ошибка расшифровки токена:', error.message);
			}
		}
	}, []);

	return (
		<main className="auth" id="confirm-email-page">
			<div className="auth__container">
				<h1 className="auth__title">Создать учетную запись</h1>
				<p className="auth__hint" style={{ paddingBottom: 30 }}>
					Ваша почта успешно подтверждена
				</p>

				<Button
					buttonText={'Войти'}
					handleButtonClick={() => navigate('/sign-in')}
					type="button"
				/>
			</div>
		</main>
	);
};

export default ConfirmEmailPage;
