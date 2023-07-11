import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

import './Auth.css';

export enum FormTypes {
	signIn = 'signIn',
	signUp = 'signUp',
	recoverPassword = 'recoverPassword',
}

interface IAuth {
	formName: FormTypes;
}

const Auth: FC<IAuth> = ({ formName }) => {
	const [step, setStep] = useState(1);

	useEffect(() => {
		setStep(1);
	}, []);

	const formTitle =
		formName === 'signUp'
			? 'Создать учетную запись'
			: formName === 'signIn'
			? 'Войти'
			: 'Восстановить пароль';

	const formHint =
		formName === 'signUp' && step === 1
			? 'Зарегистрируйтесь с помощью электронной почты'
			: formName === 'signUp' && step === 2
			? 'Выберите любимые жанры'
			: formName === 'recoverPassword' && step === 1
			? 'Введите электронную почту'
			: formName === 'recoverPassword' && step === 2
			? 'Ссылка для восстановления пароля отправлена на указанную почту'
			: null;

	const formLink =
		formName === 'signUp' ? (
			<p className="auth__link-text">
				У вас уже есть учетная запись?
				<Link to="/sign-in" className="auth__link">
					Войти
				</Link>
			</p>
		) : formName === 'signIn' ? (
			<p className="auth__link-text">
				Новый пользователь?
				<Link to="/sign-up" className="auth__link">
					Создать учетную запись
				</Link>
			</p>
		) : null;

	const formSteps =
		formName === 'signUp' ? (
			<div className="auth__steps-container">
				<p className="auth__steps">Шаг {step} из 2</p>
				{step === 2 ? (
					<button
						className="auth__back-button"
						onClick={() => setStep(step - 1)}
					>
						Назад
					</button>
				) : null}
			</div>
		) : null;

	return (
		<main className="auth">
			<div className="auth__container">
				{formSteps}
				<h1 className="auth__title">{formTitle}</h1>
				{formLink}
				<p
					className="auth__hint"
					style={formHint ? undefined : { padding: '0' }}
				>
					{formHint}
				</p>
				<Form formType={formName} step={step} setStep={setStep} />
				{formName === 'signIn' ? (
					<Link to="/forgot-password" className="auth__link auth__forgot-link">
						Забыли пароль?
					</Link>
				) : null}
			</div>
		</main>
	);
};

export default Auth;
