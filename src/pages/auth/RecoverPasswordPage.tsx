import { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import { FormTypes } from '../../types/Form.types';

import './Auth.css';

const RecoverPasswordPage = () => {
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
				<Form
					formType={FormTypes.recoverPassword}
					step={step}
					setStep={setStep}
				/>
			</div>
		</main>
	);
};

export default RecoverPasswordPage;
