import { Link } from 'react-router-dom';

import Form from '../../components/Form/Form';
import { FormTypes } from '../../types/Form.types';

import './Auth.css';

const SignInPage = () => {
	return (
		<main className="auth" id="sign-in-page">
			<div className="auth__container">
				<h1 className="auth__title">Войти</h1>
				<p className="auth__link-text">
					Новый пользователь?
					<Link to="/sign-up" className="auth__link">
						Создать учетную запись
					</Link>
				</p>
				<Form formType={FormTypes.signIn} />
				<Link to="/recover-password" className="auth__link auth__recover-link">
					Забыли пароль?
				</Link>
			</div>
		</main>
	);
};

export default SignInPage;
