import Button from 'src/components/Button/Button';
import { ButtonTypes } from '../../types/Button.types';

import './Auth.css';

const ConfirmEmailPage = () => {
	return (
		<main className="auth" id="confirm-email-page">
			<div className="auth__container">
				<h1 className="auth__title">Создать учетную запись</h1>
				<p className="auth__hint">Ваша почта успешно подтверждена</p>

				<Button buttonType={ButtonTypes.navigateToSignIn} />
			</div>
		</main>
	);
};

export default ConfirmEmailPage;
