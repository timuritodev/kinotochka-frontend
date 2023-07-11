import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Input.css';

export enum InputTypes {
	email = 'email',
	password = 'password',
	repeatPassword = 'repeatPassword',
	enteredPassword = 'enteredPassword',
}

interface IInput {
	inputType: InputTypes;
}

const Input: FC<IInput> = ({ inputType }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	const [isPasswordHidden, setIsPasswordHidden] = useState(true);

	useEffect(() => {
		setIsPasswordHidden(true);
	}, []);

	function togglePassword() {
		setIsPasswordHidden(!isPasswordHidden);
	}

	const labelText: string | null =
		inputType === 'email'
			? 'Электронная почта'
			: inputType === 'password'
			? 'Пароль'
			: inputType === 'repeatPassword'
			? 'Повторите пароль'
			: null;

	const inputTextType =
		inputType === 'password' &&
		isPasswordHidden === false &&
		currentPath === '/sign-in'
			? 'text'
			: inputType === 'repeatPassword'
			? 'password'
			: inputType;

	return (
		<div className="input__container">
			{inputType !== 'enteredPassword' ? (
				<label className="input__label" htmlFor={inputType}>
					{labelText}
				</label>
			) : null}
			<input
				className={`input__field ${
					inputType === 'enteredPassword' ? 'input__field_disabled' : null
				}`}
				style={
					inputType === 'enteredPassword'
						? { border: 'none', padding: '0' }
						: undefined
				}
				type={inputTextType}
				name={inputType}
				id={inputType}
				readOnly={inputType === 'enteredPassword' ? true : false}
				minLength={
					inputType === 'password' || inputType === 'repeatPassword'
						? 8
						: undefined
				}
			/>
			{inputType === 'password' && currentPath === '/sign-up' ? (
				<span className="input__span">
					Минимум 8 символов (заглавные и строчные латинские буквы и цифры)
				</span>
			) : null}
			{inputType === 'password' && currentPath === '/sign-in' ? (
				<button
					className="input__button"
					type="button"
					onClick={togglePassword}
				/>
			) : null}
		</div>
	);
};

export default Input;
