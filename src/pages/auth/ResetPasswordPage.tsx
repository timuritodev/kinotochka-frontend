import { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Button from 'src/components/Button/Button';

import { FormTypes } from '../../types/Form.types';
import { ButtonTypes } from '../../types/Button.types';

import './Auth.css';

const ResetPasswordPage = () => {
	const [step, setStep] = useState(1);

	useEffect(() => {
		setStep(1);
	}, []);

	const formHint =
		step === 1
			? 'Введите новый пароль'
			: step === 2
			? 'Пароль успешно изменен'
			: null;

	return (
		<main className="auth" id="reset-password-page">
			<div className="auth__container">
				<h1 className="auth__title">Восстановить пароль</h1>
				<p className="auth__hint">{formHint}</p>
				{step === 1 ? (
					<Form
						formType={FormTypes.resetPassword}
						step={step}
						setStep={setStep}
					/>
				) : (
					<Button buttonType={ButtonTypes.navigateToSignIn} />
				)}
			</div>
		</main>
	);
};

export default ResetPasswordPage;
