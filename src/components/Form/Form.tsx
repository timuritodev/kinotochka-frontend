import { FC, ReactNode, useEffect, useState } from 'react';

import Slider from '../Slider/Slider';
import Input from '../Input/Input';
import Button from '../Button/Button';

import { IForm } from 'src/types/Form.types';
import { InputColors, InputTypes } from 'src/types/Input.types';
import { ButtonTypes } from 'src/types/Button.types';
import { SliderTypes } from 'src/types/Slider.types';

import { GENRES } from 'src/utils/constants';

import './Form.css';

const Form: FC<IForm> = ({ formType, step, setStep }) => {
	// const [error, setError] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (setStep) {
			setStep(1);
		}
	}, []);

	const getFormInputs = (): ReactNode => {
		if (formType === 'signIn') {
			return (
				<>
					<Input inputType={InputTypes.email} />
					<Input inputType={InputTypes.password} />
				</>
			);
		}
		if (formType === 'signUp') {
			return step === 1 ? (
				<>
					<Input inputType={InputTypes.email} />
					<Input inputType={InputTypes.password} />
					<Input inputType={InputTypes.repeatPassword} />
				</>
			) : step === 2 ? (
				<Slider contentType={SliderTypes.genresBlock} content={GENRES} />
			) : (
				<Input inputType={InputTypes.enteredEmail} />
			);
		}
		if (formType === 'recoverPassword') {
			return step === 1 ? (
				<Input inputType={InputTypes.email} />
			) : (
				<Input inputType={InputTypes.enteredEmail} />
			);
		}
		if (formType === 'resetPassword') {
			return step === 1 ? (
				<>
					<Input inputType={InputTypes.password} />
					<Input inputType={InputTypes.repeatPassword} />
				</>
			) : null;
		}
		if (formType === 'profile') {
			return (
				<>
					<Input inputType={InputTypes.email} color={InputColors.black} />
					<Input inputType={InputTypes.password} color={InputColors.black} />
				</>
			);
		}
	};

	const getButtonType = (): ButtonTypes => {
		if (
			formType === 'signIn' ||
			(formType === 'signUp' && step === 2) ||
			(formType === 'recoverPassword' && step === 1) ||
			(formType === 'resetPassword' && step === 1)
		) {
			return formType as unknown as ButtonTypes;
		}
		if (
			(formType === 'signUp' && step === 3) ||
			(formType === 'recoverPassword' && step === 2)
		) {
			return ButtonTypes.navigateToMain;
		} else {
			return ButtonTypes.continue;
		}
	};

	console.log(step);

	return (
		<form
			className="form"
			style={
				(formType === 'recoverPassword' && step === 2) ||
				(formType === 'signUp' && step === 3)
					? { padding: '20px 0 0' }
					: formType === 'resetPassword' && step === 2
					? { padding: '0' }
					: undefined
			}
			name={formType}
			autoComplete="off"
			noValidate
			// onSubmit={() => console.log('submitted')}
		>
			<div className={`form__inputs form__inputs_type_${formType}`}>
				{getFormInputs()}
			</div>
			{error ? (
				<p className="form__error form__error_type_login">
					Неверный логин или пароль.
				</p>
			) : null}
			<Button buttonType={getButtonType()} step={step} setStep={setStep} />
		</form>
	);
};

export default Form;
