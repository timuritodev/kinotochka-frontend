import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import { selectUser } from 'src/services/redux/slices/user/user';

import { IInput } from '../../types/Input.types';

import './Input.css';

const Input: FC<IInput> = ({ inputType, color = 'white' }) => {
	const { email } = useAppSelector(selectUser);
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
		inputType === 'password' && isPasswordHidden === false
			? 'text'
			: inputType === 'repeatPassword'
			? 'password'
			: inputType;

	return (
		<div className="input__container">
			{inputType !== 'enteredEmail' ? (
				<label className="input__label" htmlFor={inputType}>
					{labelText}
				</label>
			) : null}
			<input
				className={`input__field input__field_color_${color}${
					inputType === 'enteredEmail' ? ' input__field_disabled' : ''
				}`}
				style={
					inputType === 'enteredEmail'
						? { border: 'none', padding: '0' }
						: undefined
				}
				type={inputTextType}
				name={inputType}
				id={inputType}
				value={inputType === 'enteredEmail' ? email : undefined}
				readOnly={inputType === 'enteredEmail' ? true : false}
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
			{inputType === 'password' ? (
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
