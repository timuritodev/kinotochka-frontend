import { FC } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../hooks/redux';

import './Button.css';

import { signInUser, signUpUser } from 'src/services/redux/slices/user/user';

import { IButton } from 'src/types/Button.types';

const Button: FC<IButton> = ({ buttonType, step, setStep }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const buttonText: string =
		buttonType === 'recoverPassword'
			? 'Восстановить'
			: buttonType === 'saveChanges'
			? 'Сохранить'
			: buttonType === 'navigateToMain'
			? 'Перейти на Главную'
			: buttonType === 'navigateToSignIn'
			? 'Войти'
			: 'Продолжить';

	const handleButtonClick = () => {
		if (buttonType === 'signIn') {
			dispatch(signInUser({ email: '123@mail.ru' }));
			navigate('/');
		}
		if (buttonType === 'signUp' && setStep && step) {
			dispatch(
				signUpUser({
					email: '123@mail.ru',
					preferences: ['q', 'q', 'q'],
				})
			).then(() => setStep(step + 1));
		}
		if (buttonType === 'saveChanges') {
			console.log(
				'Здесь будет диспатч: отправка патч запроса на сервер и затем откроется попап'
			);
		}
		if (buttonType === 'recoverPassword' && setStep && step) {
			console.log(
				'Здесь будет диспатч: отправка запроса на сервер и он отправит письмо с ссылкой на восстановление на почту'
			);
			setStep(step + 1);
		}
		if (buttonType === 'resetPassword' && setStep && step) {
			console.log('Здесь будет диспатч: отправка запроса на сервер');
			setStep(step + 1);
		}
		if (buttonType === 'continue' && setStep && step) {
			setStep(step + 1);
		}
		if (buttonType === 'navigateToMain') {
			navigate('/');
		}
		if (buttonType === 'navigateToSignIn') {
			navigate('/sign-in');
		} else {
			console.log('submitted');
		}
	};

	return (
		<button
			className="button"
			// disabled
			type="button"
			onClick={handleButtonClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
