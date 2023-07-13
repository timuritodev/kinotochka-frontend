import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch } from '../../hooks/redux';
import Slider, { SliderTypes } from '../Slider/Slider';
import Input, { InputTypes } from '../Input/Input';

import './Form.css';
import { signInUser, signUpUser } from 'src/services/redux/slices/user/user';
import { GENRES } from 'src/utils/constants';

export enum FormTypes {
	signIn = 'signIn',
	signUp = 'signUp',
	recoverPassword = 'recoverPassword',
}

interface IForm {
	formType: FormTypes;
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Form: FC<IForm> = ({ formType, step, setStep }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname;

	useEffect(() => {
		setStep(1);
	}, [currentPath]);

	const formInputs =
		formType === 'signUp' && step === 1 ? (
			<>
				<Input inputType={InputTypes.email}></Input>
				<Input inputType={InputTypes.password}></Input>
				<Input inputType={InputTypes.repeatPassword}></Input>
			</>
		) : formType === 'signUp' && step === 2 ? (
			<Slider contentType={SliderTypes.genresBlock} content={GENRES} />
		) : formType === 'recoverPassword' && step === 1 ? (
			<Input inputType={InputTypes.email}></Input>
		) : formType === 'recoverPassword' && step === 2 ? (
			<Input inputType={InputTypes.enteredPassword}></Input>
		) : (
			<>
				<Input inputType={InputTypes.email}></Input>
				<Input inputType={InputTypes.password}></Input>
			</>
		);

	const buttonText: string =
		formType === 'recoverPassword' && step === 1
			? 'Восстановить'
			: formType === 'recoverPassword' && step === 2
			? 'Перейти на Главную'
			: 'Продолжить';

	return (
		<form
			className="form"
			name={formType}
			autoComplete="off"
			noValidate
			// onSubmit={() => console.log('submitted')}
		>
			<div className="form__inputs">{formInputs}</div>
			<button
				className="form__button"
				// disabled
				type="button"
				onClick={() => {
					if (formType !== 'signIn' && step === 1) {
						setStep(step + 1);
					}
					if (formType === 'signIn') {
						dispatch(signInUser({ email: '123@mail.ru' }));
						navigate('/');
					}
					if (formType !== 'signIn' && step === 2) {
						navigate('/');
					}
					if (formType === 'signUp' && step === 2) {
						dispatch(
							signUpUser({
								email: '123@mail.ru',
								preferences: ['q', 'q', 'q'],
							})
						).then(() => navigate('/'));
					} else {
						console.log('submitted');
					}
				}}
			>
				{buttonText}
			</button>
		</form>
	);
};

export default Form;
