import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import Input from 'src/components/Input/Input';
import { InputTypes } from 'src/types/Input.types';
import Button from 'src/components/Button/Button';
import { useState } from 'react';

const SignInPage = () => {
	const navigate = useNavigate();

	const [error, setError] = useState(false);

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
				<form className="auth__form auth__form_type_sign-in">
					<Input inputType={InputTypes.email} labelText="Электронная почта" />
					<Input
						inputType={InputTypes.password}
						labelText="Пароль"
						showPasswordButton={true}
					/>
					{error ? (
						<p className="auth__form-error auth__form-error_type_login">
							Неверный логин или пароль.
						</p>
					) : null}
					<Button
						buttonText={'Продолжить'}
						handleButtonClick={() => navigate('/')}
					/>
				</form>
				<Link to="/recover-password" className="auth__link auth__recover-link">
					Забыли пароль?
				</Link>
			</div>
		</main>
	);
};

export default SignInPage;
