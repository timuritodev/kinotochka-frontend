import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/Form/Form';
import { FormTypes } from '../../types/Form.types';

import './Auth.css';

const SignUpPage = () => {
	const [step, setStep] = useState(1);

	useEffect(() => {
		setStep(1);
	}, []);

	const formHint =
		step === 1
			? 'Зарегистрируйтесь с помощью электронной почты'
			: step === 2
			? 'Выберите любимые жанры'
			: step === 3
			? 'Ссылка для подтверждения отправлена на указанную почту'
			: null;

	const formSteps =
		step < 3 ? (
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
		<main className="auth" id="sign-up-page">
			<div className="auth__container">
				{formSteps}
				<h1 className="auth__title">Создать учетную запись</h1>
				{step === 1 ? <p className="auth__hint">{formHint}</p> : null}
				<p className="auth__link-text">
					У вас уже есть учетная запись?
					<Link to="/sign-in" className="auth__link">
						Войти
					</Link>
				</p>
				{step !== 1 ? <p className="auth__hint">{formHint}</p> : null}
				<Form formType={FormTypes.signUp} step={step} setStep={setStep} />
			</div>
		</main>
	);
};

export default SignUpPage;
