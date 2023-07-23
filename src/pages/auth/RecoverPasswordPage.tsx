import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Auth.css';
import { InputTypes } from 'src/types/Input.types';
import Button from 'src/components/Button/Button';
import Input from 'src/components/Input/Input';
import { selectUser } from 'src/services/redux/slices/user/user';
import { useAppSelector } from 'src/services/typeHooks';

const RecoverPasswordPage = () => {
	const navigate = useNavigate();

	const { email } = useAppSelector(selectUser);
	const [step, setStep] = useState(1);

	useEffect(() => {
		setStep(1);
	}, []);

	const formHint =
		step === 1
			? 'Введите электронную почту'
			: step === 2
			? 'Ссылка для восстановления пароля отправлена на указанную почту'
			: null;

	return (
		<main className="auth" id="recover-password-page">
			<div className="auth__container">
				<h1 className="auth__title">Восстановить пароль</h1>
				<p className="auth__hint">{formHint}</p>
				{step === 1 ? (
					<form className="auth__form">
						<Input inputType={InputTypes.email} labelText="Электронная почта" />
						<Button
							buttonText={'Восстановить'}
							handleButtonClick={() => setStep(step + 1)}
						/>
					</form>
				) : step === 2 ? (
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

export default RecoverPasswordPage;
