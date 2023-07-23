import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Auth.css';
import Input from 'src/components/Input/Input';
import { InputTypes } from 'src/types/Input.types';
import Button from '../../components/Button/Button';
import Slider from 'src/components/Slider/Slider';
import { GENRES } from 'src/utils/constants';
import { SliderTypes } from 'src/types/Slider.types';
import { useAppSelector } from 'src/services/typeHooks';
import { selectUser } from 'src/services/redux/slices/user/user';

const SignUpPage = () => {
	const navigate = useNavigate();

	const { email } = useAppSelector(selectUser);
	const [step, setStep] = useState(1);

	// useEffect(() => {
	// 	setStep(1);
	// }, []);

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
				{step === 1 ? (
					<form className="auth__form auth__form_type_sign-up">
						<Input
							inputType={InputTypes.email}
							labelText={'Электронная почта'}
						/>
						<div>
							<Input
								inputType={InputTypes.password}
								labelText={'Пароль'}
								showPasswordButton={true}
							/>
							<span className="input__span">
								Минимум 8 символов (заглавные и строчные латинские буквы и
								цифры)
							</span>
						</div>
						<Input
							inputType={InputTypes.repeatPassword}
							labelText={'Повторите пароль'}
						/>
						<Button
							buttonText={'Продолжить'}
							handleButtonClick={() => setStep(step + 1)}
						/>
					</form>
				) : step === 2 ? (
					<form className="auth__form auth__form_type_sign-up">
						<Slider contentType={SliderTypes.genresBlock} content={GENRES} />
						<Button
							buttonText={'Продолжить'}
							handleButtonClick={() => setStep(step + 1)}
						/>
					</form>
				) : null}
				{step === 3 ? (
					<>
						<p className="auth__email">{email}</p>
						<Button
							buttonText={'Перейти на Главную'}
							handleButtonClick={() => navigate('/')}
						/>
					</>
				) : null}
			</div>
		</main>
	);
};

export default SignUpPage;
